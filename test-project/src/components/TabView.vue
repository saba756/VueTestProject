<template>
    <ul class="tabs">

          <router-link to="/">
                <li>Table tab</li>
            </router-link>
        <!-- <li>Settings tab</li> -->
        <router-link to="/setting">
            <li>Settings tab</li>
        </router-link>

         <router-link to="/graph">
                <li>Graph tab</li>
            </router-link>
    </ul>
</template>

<script>
import { ref } from 'vue'
//import GraphTab from '../components/GraphTab.vue'
export default {
    components: {
        //GraphTab,
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

<style scoped>
.tabs {
    display: flex;
    gap: 10px;
    cursor: pointer;
}

ul {
    list-style-type: none;
}
</style>