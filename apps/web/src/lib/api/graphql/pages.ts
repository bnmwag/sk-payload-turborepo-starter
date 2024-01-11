import {
  SUBHEADER,
  TEASER,
  GROUP,
  STATS,
  PORTFOLIO_ARCHIVE,
  JOURNAL_ARCHIVE,
  SELECTED_PROJECTS,
  SERVICES_GRID,
  SLOT_MACHINE,
  FORM_BLOCK,
} from "./blocks";
import { META } from "./meta";

export const PAGES = `
  query Pages {
    Pages(limit: 300)  {
      docs {
        slug
      }
    }
  }
`;

export const PAGE = `
  query Page($slug: String, $draft: Boolean) {
    Pages(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        id
        title
        layout {
          ${SUBHEADER}
        }
        ${META}
      }
    }
  }
`;
