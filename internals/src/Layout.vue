<template>
  <Layout :docContext="docContext">
    <slot></slot>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@divriots/dockit-vue/layout/src/DefaultLayout.vue';
// TODO expose backlight typings
// @ts-ignore
import * as docContext from '~doc-context';
</script>
