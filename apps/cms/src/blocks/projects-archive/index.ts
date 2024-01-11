import type { Block } from "payload/types";

export const ProjectsArchive: Block = {
  slug: "projectsArchive",
  labels: {
    singular: "Projects Archive",
    plural: "Projects Archives",
  },
  fields: [
    {
      name: "populateBy",
      type: "select",
      defaultValue: "collection",
      options: [
        {
          label: "Collection",
          value: "collection",
        },
        {
          label: "Individual Selection",
          value: "selection",
        },
      ],
    },
    {
      type: "select",
      name: "relationTo",
      label: "Collections To Show",
      defaultValue: "projects",
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === "collection",
      },
      options: [
        {
          label: "Projects",
          value: "projects",
        },
      ],
    },
    {
      type: "relationship",
      name: "services",
      label: "Project Categories To Show",
      relationTo: "services",
      hasMany: true,
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === "collection",
      },
    },
    {
      type: "number",
      name: "limit",
      label: "Limit",
      defaultValue: 10,
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === "collection",
        step: 1,
      },
    },
    {
      type: "relationship",
      name: "selectedDocs",
      label: "Selection",
      relationTo: "posts",
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === "selection",
      },
    },
    {
      type: "relationship",
      name: "populatedDocs",
      label: "Populated Docs",
      relationTo: "posts",
      admin: {
        disabled: true,
        description: "This field is auto-populated after-read",
        condition: (_, siblingData) => siblingData.populateBy === "collection",
      },
    },
    {
      type: "number",
      name: "populatedDocsTotal",
      label: "Populated Docs Total",
      admin: {
        step: 1,
        disabled: true,
        description: "This field is auto-populated after-read",
        condition: (_, siblingData) => siblingData.populateBy === "collection",
      },
    },
  ],
};
