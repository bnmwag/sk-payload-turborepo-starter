import type { CollectionConfig } from "payload/types";

import { admins } from "../../access/admins";
import { adminsOrPublished } from "../../access/adminsOrPublished";
import { slugField } from "../../fields/slug";
import { populatePublishedAt } from "../../hooks/populatePublishedAt";
import { revalidateProject } from "./hooks/revalidateProject";
import { hero } from "../../fields/hero";
import { Group } from "../../blocks/group";
import { SelectedProjects } from "../../blocks/selected-projects";
import { ProjectsArchive } from "../../blocks/projects-archive";
import { FormBlock } from "../../blocks/form-block";
import { BlogArchive } from "../../blocks/blog-archive";

export const projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
    preview: (doc) => {
      return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/preview?url=${encodeURIComponent(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/projects/${doc?.slug}`
      )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`;
    },
  },
  hooks: {
    beforeChange: [populatePublishedAt],
    afterChange: [revalidateProject],
    // afterRead: [populateArchiveBlock],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: adminsOrPublished,
    update: admins,
    create: admins,
    delete: admins,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "services",
      type: "relationship",
      relationTo: "services",
      hasMany: true,
    },
    {
      name: "publishedAt",
      type: "date",
      admin: { position: "sidebar" },
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Hero",
          name: "hero",
          fields: [hero],
        },
        {
          label: "Content",
          name: "content",
          fields: [
            {
              type: "blocks",
              name: "layout",
              required: true,
              blocks: [BlogArchive, FormBlock, ProjectsArchive, SelectedProjects, Group],
            },
          ],
        },
      ],
    },
    slugField(),
  ],
};
