import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
    name: 'table',
    title: 'Table',
    type: 'object',
    fields: [
        defineField({
            name: 'rows',
            title: 'Rows',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    name: 'row',
                    fields: [
                        defineField({
                            name: 'cells',
                            title: 'Cells',
                            type: 'array',
                            of: [{ type: 'string' }],
                        }),
                    ],
                    preview: {
                        select: {
                            cells: 'cells',
                        },
                        prepare({ cells }) {
                            return {
                                title: cells?.join(' | ') || 'Empty row',
                            }
                        },
                    },
                }),
            ],
        }),
        defineField({
            name: 'hasHeaderRow',
            title: 'First row is header',
            type: 'boolean',
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            rows: 'rows',
        },
        prepare({ rows }) {
            return {
                title: `Table (${rows?.length || 0} rows)`,
            }
        },
    },
})
