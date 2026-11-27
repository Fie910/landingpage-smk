//app/api/lead/route.ts
import { NextResponse } from 'next/server'
import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '@/sanity/env'

// Kita buat client khusus dengan token write
const writeClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token: process.env.SANITY_API_WRITE_TOKEN,
})

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000 // 10 menit
const RATE_LIMIT_MAX_REQUESTS = 5
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function getClientIp(request: Request): string {
    const forwardedFor = request.headers.get('x-forwarded-for')
    if (forwardedFor) {
        return forwardedFor.split(',')[0].trim()
    }
    return request.headers.get('x-real-ip') || 'unknown'
}

function isRateLimited(ip: string): boolean {
    const now = Date.now()

    if (rateLimitMap.size > 500) {
        for (const [key, entry] of rateLimitMap.entries()) {
            if (now > entry.resetAt) {
                rateLimitMap.delete(key)
            }
        }
    }

    const record = rateLimitMap.get(ip)

    if (!record || now > record.resetAt) {
        rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
        return false
    }

    if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
        return true
    }

    record.count += 1
    return false
}

export async function POST(request: Request) {
    try {
        const ip = getClientIp(request)
        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: 'Terlalu banyak permintaan. Silakan coba lagi nanti.' },
                { status: 429 }
            )
        }

        const body = await request.json()
        const { name, whatsapp, message, website } = body

        // Honeypot check: jika terisi, anggap bot dan kembalikan 200 tanpa menyimpan
        if (typeof website === 'string' && website.trim().length > 0) {
            return NextResponse.json({ success: true }, { status: 200 })
        }

        // Validasi ketat
        if (typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100) {
            return NextResponse.json(
                { error: 'Nama harus berupa teks 2–100 karakter' },
                { status: 400 }
            )
        }

        const cleanWhatsapp = typeof whatsapp === 'string' ? whatsapp.replace(/\D/g, '') : ''
        if (cleanWhatsapp.length < 10 || cleanWhatsapp.length > 15) {
            return NextResponse.json(
                { error: 'Nomor WhatsApp harus terdiri dari 10–15 digit angka' },
                { status: 400 }
            )
        }

        const cleanMessage = typeof message === 'string' ? message.trim() : ''
        if (cleanMessage.length > 1000) {
            return NextResponse.json(
                { error: 'Pesan maksimal 1000 karakter' },
                { status: 400 }
            )
        }

        // Simpan ke Sanity
        await writeClient.create({
            _type: 'lead',
            name: name.trim(),
            whatsapp: cleanWhatsapp,
            message: cleanMessage,
            status: 'Baru',
            createdAt: new Date().toISOString(),
        })

        return NextResponse.json({ success: true }, { status: 201 })
    } catch (error) {
        console.error('Error saving lead:', error)
        return NextResponse.json({ error: 'Gagal menyimpan data' }, { status: 500 })
    }
}