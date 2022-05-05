<template>
  <Layout :docContext="docContext">
    <template #logo>
      <div class="logo" aria-label="dockit-vue" v-html="logoSvg"></div>
    </template>
    <slot></slot>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '~/layout/src/DefaultLayout.vue';
import logoSvg from './logo.svg?raw';
// TODO expose backlight typings
// @ts-ignore
import * as docContext from '~doc-context';
</script>

<style lang="scss" scoped>
.logo {
  color: #f8c307;

  > :first-child {
    height: 100%;
  }
}
</style>
