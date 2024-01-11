<script lang="ts">
  import type { Page } from "@repo/payload-config/types";

  const { description, image, title } = $$props as Page["meta"];

  console.log({ description, image, title });
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@sveltejs" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
</svelte:head>
