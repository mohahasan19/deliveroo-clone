import {defineCliConfig} from 'sanity/cli'
//import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder'

const sanityClient = defineCliConfig({
  api: {
    projectId: 'llrfu6uv',
    dataset: 'production',
    useCdn: true,
    apiVersion: "2021-10-21"
  }
})

export default sanityClient;
/*
const builder = ImageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)
*/