import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryType'
import { personType } from './personType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ categoryType, personType ],
}
