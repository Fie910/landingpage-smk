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

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, whatsapp, message } = body

        // Validasi sederhana
        if (!name || !whatsapp) {
            return NextResponse.json({ error: 'Nama dan WhatsApp wajib diisi' }, { status: 400 })
        }

        // Simpan ke Sanity
        await writeClient.create({
            _type: 'lead',
            name,
            whatsapp,
            message,
            status: 'Baru',
            createdAt: new Date().toISOString(),
        })

        return NextResponse.json({ success: true }, { status: 201 })
    } catch (error) {
        console.error('Error saving lead:', error)
        return NextResponse.json({ error: 'Gagal menyimpan data' }, { status: 500 })
    }
}