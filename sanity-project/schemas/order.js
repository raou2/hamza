export default {
  name: 'Contact',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      description: "The name of the contact."
    },
    {
      name: "phoneNumber",
      type: "string",
      description: "The phone number of the contact."
    },
    {
      name: "city",
      type: "string",
      description: "The city of the contact."
    },
    {
      name: "country",
      type: "string",
      description: "The country of the contact."
    },
    {
      name: "price",
      type: "number",
      description: "The price of the product."
    },
    {
      name: "qtt",
      type: "number",
      description: "The quantity of the product."
    },
    {
      name: "details",
      type: "text",
      description: "The details of the product."
    },
    {
      name: "productName",
      type: "string",
      description: "The name of the product."
    },
    // {
    //   name: "img",
    //   type: "image",
    //   description: "The image of the product."
    // }
  ]
}
