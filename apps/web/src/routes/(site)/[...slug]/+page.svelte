<script lang="ts">
  import { PageSpacer } from "$lib/components/layout";
  import { RenderBlocks } from "$lib/components/render";

  export let data;

  const { page } = data;

  const { layout } = page;
</script>

<!-- <HeroToRender {...page.hero} /> -->

<!-- <Seo {...page.meta} /> -->

<PageSpacer>
  <RenderBlocks {layout} />
  <div class="bg-red-500 p-12"></div>
</PageSpacer>
