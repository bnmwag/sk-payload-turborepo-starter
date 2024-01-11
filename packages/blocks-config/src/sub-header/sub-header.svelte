<script lang="ts">
  import { balancer } from "svelte-action-balancer";

  export let title: string = "";
  export let link: { label: string; href: string } = {
    label: "",
    href: "",
  };
  export let paragraph: String = "";
</script>

<div class="mb-[2vw] bg-red-300 w-full items-end sm:grid sm:grid-cols-2">
  {#if title}
    <h2 class="text-h2" use:balancer>{title}</h2>
  {:else}
    <slot />
  {/if}
  <p class="text-copy mt-5" use:balancer>{paragraph}</p>
</div>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
