import { defineConfig } from 'sanity'
import { schemaTypes } from './schemas' // ✅ Import the combined schemas

export default defineConfig({
  name: 'atlas',
  title: 'Atlas Power Studio',
  projectId: 'your_project_id', // ⛳ Replace with actual ID
  dataset: 'production',
  basePath: '/admin',
  schema: {
    types: schemaTypes, // ✅ Centralized schema array
  },
})
