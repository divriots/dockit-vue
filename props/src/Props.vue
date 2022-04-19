<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Type(s)</th>
          <th>Default</th>
          <th>Required</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="!componentProps">
          <td colspan="5">No props found.</td>
        </tr>
        <template v-else>
          <tr v-for="prop in componentProps">
            <td>{{ prop.name }}</td>
            <td>{{ prop.description }}
              <template v-for="example of prop.tags?.example">
                <div><span class="example-header">Example: </span><span class="example">{{ example.description }}</span>
                </div>
              </template>
            </td>
            <td>{{ prop.type?.name }}</td>
            <td>
              {{
                prop.defaultValue?.func ? 'Function' : prop.defaultValue?.value ?? '-'
              }}
            </td>
            <td>{{ prop.required }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

/**
 * Provides the props of a component based on the comments of its props.
 */
export default defineComponent({
  props: {
    /**
     *  Component with documentation info for which to list the props details.
     */
    of: { type: Object, required: true }
  },
  computed: {
    componentProps() {
      return this.of.__docgenInfo?.props;
    }
  }
})
</script>

<style scoped lang="scss">
table {
  border-collapse: collapse;
}

thead {
  border-bottom: 1px solid var(--border-color);
}

th,
td {
  padding: 10px;
  vertical-align: top;
  text-align: left;
}

.example-header {
  font-style: italic;
}

.example .example-header {
  font-size: 0.5rem;
}

.example {
  opacity: 0.7;
}
</style>