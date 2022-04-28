<script setup>
import { Description, Props } from '@divriots/dockit-vue';
</script>

# Props component

## Description

<Description :of="Props"></Description>
You can see how to document your components [here](https://vue-styleguidist.github.io/docs/Documenting.html).

## Props

<Props :of="Props"/>

## Example

<Playground 
  code="<Props :of='Description'></Props>"
  :data-scope="{ Description }"
  :components="{ Props }">
</Playground>
