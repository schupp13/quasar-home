<template>
    <q-btn class="btn bg-blue" @click="basicButton"> Basic Button </q-btn>
</template>
<script>
export default {
name: 'HomeButtonWithQuasarComponent',
methods: {
    basicButton() {
        console.log("basic button");
    }
}
}
</script>
