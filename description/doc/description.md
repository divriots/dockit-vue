<script setup>
import Description from '@divriots/dockit-vue/description/src/Description.vue';
</script>

# Description component

## Description

<Description :of="Description"></Description>
You can see how to document your components [here](https://vue-styleguidist.github.io/docs/Documenting.html).

## Props

<Props :of="Description"/>

## Example

<Playground 
  code="<Description :of='Description'></Description>"
  :data-scope="{ Description }"
  :components="{ Description }">
</Playground>
