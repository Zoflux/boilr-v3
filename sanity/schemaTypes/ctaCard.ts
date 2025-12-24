import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'ctaCard',
    title: 'Boilr CTA Card',
    type: 'object',
    fields: [
        defineField({
            name: 'template',
            title: 'Choose Template',
            type: 'string',
            options: {
                list: [
                    { title: '🎯 Spot your next client before competitors', value: 'template1' },
                    { title: '⚡ Find hiring signals in seconds', value: 'template2' },
                    { title: '🤖 Automate your lead generation', value: 'template3' },
                ],
                layout: 'radio',
            },
            validation: Rule => Rule.required(),
            initialValue: 'template1',
        }),
    ],
    preview: {
        select: {
            template: 'template',
        },
        prepare({ template }) {
            const titles: Record<string, string> = {
                template1: '🎯 Spot your next client before competitors',
                template2: '⚡ Find hiring signals in seconds',
                template3: '🤖 Automate your lead generation',
            }
            return {
                title: titles[template] || 'Boilr CTA Card',
            }
        },
    },
})
