const {createClient} = require('@sanity/client')
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: 'wi67t5mp',
  dataset: 'production',
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2023-03-28', // use current date (YYYY-MM-DD) to target the latest API version
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;