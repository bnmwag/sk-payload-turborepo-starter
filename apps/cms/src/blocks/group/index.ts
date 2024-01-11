import type { Block } from "payload/types";

import { BlogArchive } from "../blog-archive";
import { FormBlock } from "../form-block";
import { ProjectsArchive } from "../projects-archive";
import { SelectedProjects } from "../selected-projects";

const blocks = [BlogArchive, ProjectsArchive, SelectedProjects, FormBlock];

export const Group: Block = {
  slug: "group",
  labels: {
    singular: "Group",
    plural: "Groups",
  },
  fields: [
    {
      type: "text",
      name: "title",
      label: "Title",
    },
    {
      name: "layout",
      type: "blocks",
      required: true,
      blocks,
    },
  ],
};
