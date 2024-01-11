import type { CollectionConfig } from "payload/types";

export const categories: CollectionConfig = {
  slug: "categories",
  labels: {
    singular: "Category",
    plural: "Categories",
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
    },
  ],
};
