<template>
    <div>
        <TabView />
        <h1>{{ barName }}</h1>
        <Chart :type="bar" :data="barData" />
    </div>
</template>

<script>
import Chart from '../components/GraphView.vue'
import TabView from "../components/TabView.vue";
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { isProxy, toRaw } from 'vue';



export default {
    name: 'GraphTab',
    components: {
        Chart,
        TabView
    },

    data() {
        const store = useStore()
        onMounted(() => {
            getLoad()

        })
        const getLoad = () => {
            store.dispatch('table/getTableData')
        }

        const graphData = computed(() => store.state.table);
        let rawData = graphData.value;

        if (isProxy(graphData.value)) {
            rawData = toRaw(graphData.value.graphData)

        }

        var result = Object.values(rawData);

        const dateField = () => {
            let humanDateFormat = [];
            result.forEach(element => {
                const unixTimestamp = element.date
                const milliseconds = unixTimestamp * 1000
                const dateObject = new Date(milliseconds)
                humanDateFormat.push(dateObject.toLocaleDateString("en-US"))

            });
            return humanDateFormat
        }
        const valueField = () => {
            let resultValue = [];
            result.forEach(element => {
                resultValue.push(element.value)


            });
            return resultValue
        }



        return {
            barName: 'Graph data',
            bar: 'bar',
            barData: {
                //labels: ['Isaac', 'Morah', 'Sam', 'Jess', 'Suka'],
                labels: dateField(),
                datasets: [{
                    label: 'Values against Date',
                    //data: [10, 4.8, 17.7, 20, 14],
                    data: valueField(),
                    backgroundColor: [
                        'rgba(17, 50, 64, 0.4)',
                        'rgba(94, 72, 0, 0.4)',
                        'rgba(171, 122, 232, 0.4)',
                        'rgba(27, 25, 169, 0.4)',
                        'rgba(141, 47, 108, 0.4)'
                    ],
                    borderColor: [
                        'rgba(17, 50, 64, 1)',
                        'rgba(94, 72, 0, 1)',
                        ' rgba(171, 122, 232, 1)',
                        'rgba(27, 25, 169, 1)',
                        'rgba(141, 47, 108, 1)'
                    ],
                    borderWidth: 2
                }]
            },
        }
    },
}

</script>



