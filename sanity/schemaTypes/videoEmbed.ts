// Video embed schema for YouTube/Vimeo embeds
import { defineType } from 'sanity'

export default defineType({
    name: 'videoEmbed',
    title: 'Video Embed',
    type: 'object',
    fields: [
        {
            name: 'url',
            title: 'Video URL',
            type: 'url',
            description: 'Enter a YouTube or Vimeo URL (e.g., https://www.youtube.com/watch?v=xxxxx or https://vimeo.com/xxxxx)',
            validation: (Rule) => Rule.required().uri({
                scheme: ['http', 'https']
            }),
        },
        {
            name: 'caption',
            title: 'Caption',
            type: 'string',
            description: 'Optional caption to display below the video',
        },
    ],
    preview: {
        select: {
            url: 'url',
            caption: 'caption',
        },
        prepare({ url, caption }) {
            return {
                title: caption || 'Video Embed',
                subtitle: url,
            }
        },
    },
})
