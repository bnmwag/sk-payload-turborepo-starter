import { CATEGORIES } from "./categories";
import { MEDIA } from "./media";
import { META } from "./meta";

export const TEASER = `
...on Teaser {
  blockType
  logos {
    ${MEDIA}
  }
}
`;

export const SUBHEADER = `
...on SubHeader {
  blockType
  title
  paragraph
  link {
    label
    href
  }
}
`;

export const STATS = `
...on Stats {
  blockType
  title
  stats {
    stat {
      label
      value
    }
  }
}
`;

export const CLIENT_LIST = `
...on ClientList {
  blockType
  clients {
    client {
      logo {
        url
        alt
      }
    }
  }
}
`;

export const PORTFOLIO_ARCHIVE = `
...on PortfolioArchive {
  blockType
  PA_populateBy: populateBy
  PA_relationTo: relationTo
  ${CATEGORIES}
  PA_limit: limit
  PA_selectedDocs: selectedDocs {
    relationTo
    value {
      ...on Project {
        id
        slug
        title
        ${META}
      }
    }
  }
  PA_populatedDocs: populatedDocs {
    relationTo
    value {
      ...on Project {
        id
        slug
        title
        ${META}
      }
    }
  }
  PA_populatedDocsTotal: populatedDocsTotal
}
`;

export const JOURNAL_ARCHIVE = `
...on JournalArchive {
  blockType
  JA_populateBy: populateBy
  JA_relationTo: relationTo
  ${CATEGORIES}
  JA_limit: limit
  JA_selectedDocs: selectedDocs {
    relationTo
    value {
      ...on Post {
        id
        slug
        title
        ${META}
      }
    }
  }
  JA_populatedDocs: populatedDocs {
    relationTo
    value {
      ...on Post {
        id
        slug
        title
        ${META}
      }
    }
  }
  JA_populatedDocsTotal : populatedDocsTotal
}
`;

export const SELECTED_PROJECTS = `
...on SelectedProjects {
  blockType
  projects {
    title
    slug
    categories {
      title
    }
    image {
      url
      alt
    }
  }
}
`;

export const SERVICES_GRID = `
...on ServicesGrid {
  blockType
  services {
    title
    description
  }
}
`;

export const SLOT_MACHINE = `
...on SlotMachine {
  blockType
}
`;

const FORM_FIELD = `
  label
  required
  blockType
  name
`;

export const FORM_BLOCK = `
...on FormBlock {
  blockType
  intro {
    title
    description
  }
  form {
    id
    title
    fields {
      ...on Checkbox {
        ${FORM_FIELD}
      }
      ...on Email {
        ${FORM_FIELD}
        placeholder
      }
      ...on Text {
        ${FORM_FIELD}
        placeholder
      }
      ...on Textarea {
        ${FORM_FIELD}
        placeholder
      }
    }
    submitButtonLabel
    confirmationType
    confirmationMessage 
  }
}
`;

export const GROUP = `
...on Group {
  blockType
  layout {
    ${TEASER}
    ${SUBHEADER}
    ${STATS}
    ${CLIENT_LIST}
    ${SERVICES_GRID}
    ${JOURNAL_ARCHIVE}
    ${SLOT_MACHINE}
  }
}
`;

export const ALL_BLOCKS = `
  ${TEASER}
  ${SUBHEADER}
  ${STATS}
  ${CLIENT_LIST}
  ${PORTFOLIO_ARCHIVE}
  ${JOURNAL_ARCHIVE}
  ${GROUP}
`;
