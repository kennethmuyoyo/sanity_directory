const toolSchema = {
    name: 'aitools',
    title: 'Tools',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'link',
        title: 'Link',
        type: 'url',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'array', // changed from 'string' to 'array'
        of: [{ type: 'string' }], // define the type of array elements
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'priceTag',
        title: 'Price Tag',
        type: 'string',
      },
    ],
  }
  
  export default toolSchema;
  