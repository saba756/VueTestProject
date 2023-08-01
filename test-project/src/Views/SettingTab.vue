<template>
    <div>
        <TabView />
        <h1>Setting component</h1>
        <section class="w-full flex justify-center items-center my-10">
            <form class="">
                <div class="form-group">
                    <label class="">Email</label>
                    <div v-for="(email, index) in appSettings?.settings.emails" :key="index"
                        class="input wrapper flex items-center">
                        <input :value="email" :name="email" :id="index" type="text" class="" placeholder="Enter your email"
                            @change="updateField(index, email)" />
                        <!--          Add Svg Icon-->
                        <Fragment v-if="isEmailLengthReached(index)">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                class="ml-2 cursor-pointer" @click="addField(index, email)">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path fill="green"
                                    d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                            </svg>
                        </Fragment>
                        
                        <Fragment v-if="appSettings.settings.emails.length !== 1">
                            <!--          Remove Svg Icon-->
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                class="ml-2 cursor-pointer" @click="removeField(index)">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path fill="#EC4899"
                                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z" />
                            </svg>
                        </Fragment>
                    </div>
                    <label for="fname">Number:</label><br>
                    <input type="number" :value="appSettings?.settings.rowsCount" name="fname" min="1" max="5"><br>

                    <label class="switch">
                        <input type="checkbox" checked>
                        <span class="slider round"></span>
                    </label>
                </div>
                <button>Save</button>
            </form>
        </section>
    </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'


import TabView from "../components/TabView.vue";
export default {
    components: {
        TabView
    },
    setup() {
        const store = useStore()
        //const count = ref(0)
        const appSettings = ref({})
        const getLoad = () => {
            store.dispatch('settings/getSettings')
        }
        onMounted(() => {
            getLoad()

        })

        const settingData = computed(() => store.state.settings);
        appSettings.value = settingData.value
        console.log("hiii", appSettings.value.settings.emails)
        // console.log(store.state.settings)

        //  console.log(JSON.parse(JSON.stringify(settingData.value)))

        // expose to template and other options API hooks
        const addField = (index, value) => {
            console.log("index: ", index, "value: ", value)
            if (appSettings.value.settings.emails.length < 5) {
                appSettings.value.settings.emails[index + 1] = ""
            }
        }
        const updateField = (index, value) => {
            appSettings.value.settings.emails[index] = value
        }
        const removeField = (index) => {
            console.log(appSettings.value.settings.emails.length)
            appSettings.value.settings.emails.splice(index, 1);
        }
        const isEmailLengthReached = (index) => {
            return appSettings.value.settings.emails.length < 5 && index === (appSettings.value.settings.emails.length - 1)
        } 
        return {
            addField, isEmailLengthReached, updateField,
            removeField, appSettings, settingData
        }
    },




    mounted() {

    }
}
</script>

<style scoped></style>