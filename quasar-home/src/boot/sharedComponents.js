import { boot } from 'quasar/wrappers'
import vue, { createApp } from 'vue';
import HomeHeader from "../components/HomeHeader"

const app = createApp({})
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
  app.component(HomeHeader).mount()
})
