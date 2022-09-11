<template>
    <button class="btn bg-blue" @click="basicButton"> Basic Button </button>
</template>
<script>
export default {
name: 'HomeButton',
methods: {
    basicButton() {
        console.log("basic button");
    }
}
}
</script>
