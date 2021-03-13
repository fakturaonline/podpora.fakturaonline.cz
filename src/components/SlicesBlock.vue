<template>
  <section>
    <!-- Slice section template -->
    <section v-for="(slice, index) in slices" :key="'slice-' + index">
      <!-- Text slice template -->
      <template v-if="slice.slice_type === 'text'">
        <!-- Here :slice="slice" passes the data to the component -->
        <div class="post-part single container">
          <prismic-rich-text class="textslice" :field="slice.primary.text" />
        </div>
      </template>
      <!-- Quote slice template -->
      <template v-else-if="slice.slice_type === 'quote'">
        <quote-slice :slice="slice"></quote-slice>
      </template>
      <!-- Image with caption slice template -->
      <template v-else-if="slice.slice_type === 'image_with_caption'">
        <prismic-image :field="slice.primary.image" />
      </template>
    </section>
  </section>
</template>

<script>
// Imports for all slices
// const QuoteSlice = () => import("./slices/QuoteSlice.vue");
// const TextSlice = () => import("./slices/TextSlice.vue");
// const ImageCaptionSlice = () => import("./slices/ImageCaptionSlice.vue");
export default {
  props: ["slices"],
  name: "slices-block",
  components: {
    // QuoteSlice,
    // TextSlice
    // ImageCaptionSlice
  }
};
</script>
