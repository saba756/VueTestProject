<template>
    <div>
        <TabView />
        <h1>Graph component</h1>
    </div>
</template>

<script>
import { ref } from 'vue'

import TabView from "../components/TabView.vue";
export default {
    components: {
        TabView
    },
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

<style scoped></style>