<template>
    <div class="container">
        <canvas id="chart"></canvas>
    </div>
</template>
<script>
import Chart from 'chart.js/auto';

export default {
    name: 'ChartJs',
    props: {
        type: String,
        data: {}
    },
    mounted() {
        const chrt = document.getElementById('chart');
        const chart = new Chart(chrt, {
            type: this.type,
            data: this.data
        });
        chart;
    }
}
</script>
<style scoped>
.container {
    height: 40rem;
    width: 40rem;
}
</style>