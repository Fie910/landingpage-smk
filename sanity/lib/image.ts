// sanity/lib/image.ts
import { createImageUrlBuilder } from '@sanity/image-url'
import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: any) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}

// import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url'
// import { dataset, projectId } from '../env'
// // https://www.sanity.io/docs/image-url
// const builder = createImageUrlBuilder({ projectId, dataset })
// export const urlFor = (source: SanityImageSource) => {
//   return builder.image(source)
// }