import { redirect } from "@sveltejs/kit";

import type { Page, Post, Project } from "@repo/payload-config/types";
import { fetchDocs, fetchDoc } from "$lib/api";

export const load = async ({ params }) => {
  const { slug } = params;

  let page: Page | null = null;
  // let posts: Post[] | null = null;
  // let projects: Project[] | null = null;

  try {
    page = await fetchDoc<Page>({ collection: "pages", slug });
    // posts = await fetchDocs<Post>("posts");
    // projects = await fetchDocs<Project>("projects");
  } catch (error) {
    console.log("error", error);
  }

  if (!page) {
    throw redirect(302, "/not-found");
  }

  return { page };
};
