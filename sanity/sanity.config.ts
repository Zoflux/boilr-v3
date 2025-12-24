import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { codeInput } from '@sanity/code-input'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
    name: 'default',
    title: 'Boilr Blog',

    projectId: 'vdu66rd4',
    dataset: 'production',

    plugins: [structureTool(), visionTool(), codeInput()],

    schema: {
        types: schemaTypes,
    },
})
