import type { CollectionConfig } from "payload/types";

export const services: CollectionConfig = {
  slug: "services",
  labels: {
    singular: "Service",
    plural: "Services",
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      label: "Title",
      name: "title",
      type: "text",
    },
    {
      label: "Description",
      name: "description",
      type: "textarea",
    },
  ],
};
