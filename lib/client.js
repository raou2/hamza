import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'w67ih30x',
  dataset: 'production',
  apiVersion: '2022-02-03',
  useCdn: true,
  token:'sk6VHSxpVS7qaOkzQYXpXMQMRdBor7z4G8twb443cZZD5ZlQzCsA0EvN6fF74VfEiVw7ozo9SL5XmsDqNvfQIyVbeXHJkSwatPiOEMxOXj7fNLfuzHsq2i50BrN56fmfXUQmJTbXQMZlgUYvLKlRyNXjBX9PcY3B7sUTD9UnwkJOjoVfuoHV'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);