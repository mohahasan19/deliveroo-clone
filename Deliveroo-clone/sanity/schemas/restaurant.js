import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image of the Restaurant",
    }),
    defineField({
      name: "lat",
      type: "number",
      title: "Latitude of the Restaurant",
    }),
    defineField({
      name: "long",
      type: "number",
      title: "Longitude of the Restaurant",
    }),
    defineField({
      name: "address",
      type: "string",
      title: "Address of the Restaurant",
      validation: (Rule) => Rule.required()
    }), 
    defineField({
      name: 'rating',
      title: 'Enter a rating (1-5)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).error("Please enter a value between 1 and 5")
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      to: [{type: "category"}]
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: "reference", to: [{type: "dish"}] }],
    })
  ],

})
