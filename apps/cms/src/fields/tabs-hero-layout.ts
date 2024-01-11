import { Field } from "payload/types";
import { BlogArchive } from "../blocks/blog-archive";
import { FormBlock } from "../blocks/form-block";
import { Group } from "../blocks/group";
import { ProjectsArchive } from "../blocks/projects-archive";
import { SelectedProjects } from "../blocks/selected-projects";
import { hero } from "./hero";

import { SubHeaderConfig } from "@repo/blocks-config/sub-header/config";

const blocks = [SubHeaderConfig];

export const tabsHeroLayout: Field = {
  type: "tabs",
  tabs: [
    {
      label: "Hero",
      name: "hero",
      fields: [hero],
    },
    {
      label: "Content",
      fields: [
        {
          name: "layout",
          type: "blocks",
          required: true,
          blocks,
        },
      ],
    },
  ],
};
