import type { Block } from "payload/types";

export const SelectedProjects: Block = {
  slug: "selectedProjects",
  labels: {
    singular: "Selected Projects",
    plural: "Selected Projects",
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "projects",
      type: "relationship",
      relationTo: "projects",
      hasMany: true,
    },
  ],
};
