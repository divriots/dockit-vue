<template>
  <div>
    {{ description ? description : 'No description found.' }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

/**
 * Provides the description of a component based on its comments.
 */
export default defineComponent({
  props: {
    /**
     * Component to provide the description for
     */
    of: { type: Object, required: true },
  },
  computed: {
    description() {
      return this.of.__docgenInfo?.description;
    },
  },
});
</script>
