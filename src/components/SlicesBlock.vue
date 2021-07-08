<template>
  <div class="article__content">
    <section v-for="(slice, index) in slices" :key="'slice-' + index">
      <template v-if="slice.slice_type === 'text'">
        <div class="post-part single">
          <prismic-rich-text class="textslice" :field="slice.primary.text" />
        </div>
      </template>
      <template v-else-if="slice.slice_type === 'image_with_caption'">
        <prismic-image :field="slice.primary.image" />
      </template>
      <template v-else-if="slice.slice_type === 'quote'">
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
      </template>
    </section>
  </div>
</template>

<script>
export default {
  props: ["slices"],
  name: "slices-block"
};
</script>
