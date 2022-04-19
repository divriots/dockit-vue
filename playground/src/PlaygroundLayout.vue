<template>
  <div class="live">
    <div class="live-preview not-prose light">
      <slot name="preview"></slot>
    </div>
    <div class="live-editor">
      <slot name="editor"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, inject, ref, watch } from 'vue';
import { ColorThemeKey } from '~/layout/src/LayoutConstants';

const colorTheme = inject(ColorThemeKey, ref("dark"));
const liveBorderColor = computed(() =>
  colorTheme.value === 'dark' ? '#aaa' : '#000'
);
</script>
<style lang="scss">
.live {
  border: 1px solid v-bind(liveBorderColor);
  border-radius: 10px;
  overflow: hidden;
}

.live-editor {
  color: white;
  line-height: 1.3rem !important;
  padding: var(--dockit-vue-spacer);
  background-color: #333;

  textarea {
    outline: none !important;
    caret-color: #aaa;
  }

  textarea,
  .prism-editor-wrapper pre {
    font-weight: inherit;
    font-size: inherit;
    line-height: 1.3rem;
    margin: 0;
    padding: 0;
  }
}

.live-preview {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: calc(2 * var(--dockit-vue-spacer));
  background-color: #f3f4f6;
}
</style>
