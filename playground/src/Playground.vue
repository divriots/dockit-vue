<template>
  <VueLive
    :code="code"
    :layout="PlaygroundLayout"
    :components="components"
    :dataScope="dataScope"
    :checkVariableAvailability="false"
    :delay="500"
    v-on:error="(e: any) => handleError(e)"
  ></VueLive>
</template>

<script setup lang="ts">
import { VueLive } from 'vue-live';
import 'vue-live/lib/vue-live.esm.css';
import PlaygroundLayout from './PlaygroundLayout.vue';

defineProps({
  /**
   * Vue code to compile and render. May be a SFC or Javascript code
   */
  code: {
    type: String,
    required: true,
  },
  /**
   * Hashtable of auto-registered components
   * @example { DatePicker: VueDatePicker }
   * @example { VueDatePicker }
   */
  components: Object,
  /**
   * Outside data to the preview
   * @example { count: 1 }
   */
  dataScope: Object,
  /**
   * Hashtable of modules available in require and import statements
   * in the Preview component
   * @example { lodash: require("lodash") }
   * @example { moment: require("moment") }
   */
  requires: Object,
});

const handleError = (e) => console.error(e);
</script>
