import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'ctaCard',
    title: 'CTA Card',
    type: 'object',
    fields: [
        defineField({
            name: 'icon',
            title: 'Icon/Logo',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'learnMoreUrl',
            title: 'Learn More URL',
            type: 'url',
        }),
        defineField({
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
            initialValue: 'Start Now',
        }),
        defineField({
            name: 'buttonUrl',
            title: 'Button URL',
            type: 'url',
        }),
        defineField({
            name: 'backgroundColor',
            title: 'Background Color',
            type: 'string',
            options: {
                list: [
                    { title: 'Purple', value: '#f3e8ff' },
                    { title: 'Green (Boilr)', value: '#dcfce7' },
                    { title: 'Blue', value: '#dbeafe' },
                    { title: 'Gray', value: '#f3f4f6' },
                ],
            },
            initialValue: '#f3e8ff',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'icon',
        },
    },
})
