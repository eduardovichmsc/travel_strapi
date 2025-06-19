import type { Schema, Struct } from '@strapi/strapi';

export interface SharedListItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_items';
  info: {
    displayName: 'ListItem';
    icon: 'bulletList';
  };
  attributes: {
    item: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.list-item': SharedListItem;
    }
  }
}
