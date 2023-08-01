<template>
  <suspense>
    <router-view />
  </suspense>
</template>

<script>
import { ref } from 'vue'

export default {

  setup() {
    const count = ref(0)

    // expose to template and other options API hooks
    return {
      count
    }
  },

  mounted() {

  }
}
</script>

