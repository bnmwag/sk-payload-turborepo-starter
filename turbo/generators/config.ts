// import { PlopTypes } from "@turbo/gen";

// export default function generator(plop: PlopTypes.NodePlopAPI): void {
//   plop.setGenerator("example", {
//     description:
//       "An example Turborepo generator - creates a new file at the root of the project",
//     prompts: [
//       {
//         type: "input",
//         name: "file",
//         message: "What is the name of the new file to create?",
//         validate: (input: string) => {
//           if (input.includes(".")) {
//             return "file name cannot include an extension";
//           }
//           if (input.includes(" ")) {
//             return "file name cannot include spaces";
//           }
//           if (!input) {
//             return "file name is required";
//           }
//           return true;
//         },
//       },
//       {
//         type: "list",
//         name: "type",
//         message: "What type of file should be created?",
//         choices: [".md", ".txt"],
//       },
//       {
//         type: "input",
//         name: "title",
//         message: "What should be the title of the new file?",
//       },
//     ],
//     actions: [
//       {
//         type: "add",
//         path: "{{ turbo.paths.root }}/{{ dashCase file }}{{ type }}",
//         templateFile: "templates/turborepo-generators.hbs",
//       },
//     ],
//   });
// }

import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("block", {
    description: "Creates a new block basically ready to use in Payload to build out.",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component? (kebap case)",
      },
    ],
    // perform actions based on the prompts
    actions: [
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/blocks/src/{{ name }}/{{ name }}.svelte",
        templateFile: "templates/block.hbs",
      },
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/blocks/src/{{ name }}/config.ts",
        templateFile: "templates/config.hbs",
      },
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/blocks/src/{{ name }}/index.ts",
        template: "export { default as {{ pascalCase name }} } from './{{ name }}.svelte'",
      },
      {
        type: "append",
        path: "{{ turbo.paths.root }}/packages/blocks/blocks.ts",
        template:
          "export { default as {{ pascalCase name }} } from './src/{{ name }}/{{ name }}.svelte'",
      },
      {
        type: "append",
        path: "{{ turbo.paths.root }}/packages/blocks/config.ts",
        template: "export { {{ pascalCase name }}Config } from './src/{{ name }}/config'",
      },
    ],
  });
}
