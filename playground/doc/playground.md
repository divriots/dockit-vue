<script setup>
import Description from '@divriots/dockit-vue/description/src/Description.vue';
import Props from '@divriots/dockit-vue/props/src/Props.vue';
import Playground from '@divriots/dockit-vue/playground/src/Playground.vue';

const advancedPlaygroundCode = `<Playground 
    code="<Props :of='Description'></Props>"
    :data-scope="{ Description }"
    :components="{ Props }">
</Playground>`;
</script>

# Playground component

## Description

This component may be used to render live components, ie components which are compiled on the fly based on the provided code and that may be editable by users.

## Props

<Props :of="Playground"/>

## Example

### Very simple

<Playground 
  code="<Playground code='<button>Heya</button>'></Playground>"
  :components="{ Playground }">
</Playground>

### More advanced

You may need to specify data to be provided to your component:

<Playground 
  :code="advancedPlaygroundCode"
  :data-scope="{ Props, Description }"
  :components="{ Playground }">
</Playground>
