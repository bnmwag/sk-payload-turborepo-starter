import type { Block } from "payload/types";

export const SubHeaderConfig: Block = {
  slug: "subHeader",
  labels: {
    singular: "Sub Header",
    plural: "Sub Headers",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    // TODO make this either paragraph or link group
    {
      name: "paragraph",
      type: "text",
    },
    {
      name: "link",
      type: "group",
      fields: [
        {
          name: "label",
          type: "text",
          minLength: 4,
          maxLength: 50,
        },
        {
          name: "href",
          type: "text",
        },
      ],
    },
  ],
};
