<template>
    <div>
        <TabView />
        <!-- {{ tabData?.tableData.data.headers }} -->
        <table id="customers">
            <tr>
                <th v-for="data in tabData?.tableData?.data?.headers" :key="data.id">{{ data }}</th>

            </tr>
            <tr v-for="data in tabData?.tableData?.data?.rows" :key="data.id">
                <td> {{ data.id }}</td>
                <td>{{ data?.url }}</td>
                <td>{{ data?.title }}</td>
                <td>{{ data?.pageviews }}</td>
                <td>{{ data?.date }}</td>



            </tr>

        </table>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import TabView from "../components/TabView.vue";
export default {
    components: {
        TabView
    },
    setup() {
        const store = useStore()
        const getLoad = () => {
            store.dispatch('table/getTableData')
        }
        const tabData = computed(() => store.state.table);
        console.log("tab data", tabData.value)
        onMounted(() => {
            getLoad()

        })
        // expose to template and other options API hooks
        return {
            tabData
        }
    },


}
</script>

<style scoped>
#customers {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#customers td,
#customers th {
    border: 1px solid #ddd;
    padding: 8px;
}

#customers tr:nth-child(even) {
    background-color: #f2f2f2;
}

#customers tr:hover {
    background-color: #ddd;
}

#customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04AA6D;
    color: white;
}
</style>