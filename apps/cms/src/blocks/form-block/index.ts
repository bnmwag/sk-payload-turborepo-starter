import { Block } from "payload/types";

export const FormBlock: Block = {
  slug: "formBlock",
  labels: {
    singular: "Form Block",
    plural: "Form Blocks",
  },
  fields: [
    {
      label: "Intro",
      name: "intro",
      type: "group",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Title",
        },
        {
          name: "description",
          type: "textarea",
          label: "Description",
        },
      ],
    },
    {
      name: "form",
      type: "relationship",
      relationTo: "forms",
      required: true,
    },
  ],
};
