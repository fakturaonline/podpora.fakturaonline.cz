<template>
  <section>
    <!-- Slice section template -->
    <section v-for="(slice, index) in slices" :key="'slice-' + index">
      {{ slice.slice_type }}
      <template v-if="slice.slice_type === 'text'">
        <!-- Here :slice="slice" passes the data to the component -->
        <div class="post-part single container">
          <prismic-rich-text class="textslice" :field="slice.primary.text" />
        </div>
      </template>
      <!-- Image with caption slice template -->
      <template v-else-if="slice.slice_type === 'image_with_caption'">
        <prismic-image :field="slice.primary.image" />
      </template>
      <template v-else-if="slice.slice_type === 'quote'">
        <h1>quote</h1>
        <prismic-rich-text class="textslice" :field="slice.primary.quote" />
        <prismic-rich-text
          class="textslice"
          :field="slice.primary.name_of_the_author"
        />
        <prismic-image :field="slice.primary.portrait_author" />
      </template>
      <template v-else-if="slice.slice_type === 'gallery'">
        <ul>
          <li v-for="(item, index) in slice.items" :key="'slice-' + index">
            <prismic-image :field="item.image" />
          </li>
        </ul>
        <!-- <prismic-image :field="slice.primary.image" /> -->
      </template>
    </section>
  </section>
</template>

<script>
export default {
  props: ["slices"],
  name: "slices-block"
};
</script>
