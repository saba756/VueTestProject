<template>
    <div>
        <TabView />
        <table>
            <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
            </tr>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
            </tr>
        </table>
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