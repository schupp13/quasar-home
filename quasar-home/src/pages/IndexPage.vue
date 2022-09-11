<template>
  <q-page class="flex flex-center">
    <homeButton />
    <homeButtonWithQuasarComponent />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import HomeButton from "components/HomeButton"
import HomeButtonWithQuasarComponent from "components/HomeButtonWithQuasarComponent"
export default defineComponent({
  name: 'IndexPage',
  components: {
    HomeButton,
    HomeButtonWithQuasarComponent
  }
})
</script>
