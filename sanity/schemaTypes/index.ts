import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryType'
import { personType } from './personType'
import { socialLinkType } from './socialLinkType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ categoryType, personType, socialLinkType ],
}
