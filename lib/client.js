import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'w67ih30x',
  dataset: 'production',
  apiVersion: '2022-02-03',
  useCdn: true,
  token:'skCwIZmhXVsX1DbJRofuM7QcObDBp0AWCwiffO0Ix0pFoYRlnwD4wRHW6i9E8RrxJ36rbGWJdnZQFd9owBv0v31PJ1TQ3GaHrJc1r4518HUlaYqEy3XD4J08nC8KSmjeCh3Lf6KDvyBuCzykB8wqMUG05aC5qIZ1M4dCDJusGvXHfBmjKX8J'
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);