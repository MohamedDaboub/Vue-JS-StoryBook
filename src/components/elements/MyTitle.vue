<script setup>
import { computed } from 'vue'
const props = defineProps({
    content: String,
    title: String,
})
const className = computed(() => {
  return{
    "-h1": props.title === 'h1',
    "-h2": props.title === 'h2',
    "-h3": props.title === 'h3',
    "-h4": props.title === 'h4',
    "-h5": props.title === 'h5',
    "-h6": props.title === 'h6',
}
})

</script>
<template>
    <h2 :class="className " v-if="title === 'h2'">{{ content }}</h2>
    <h3 :class="className" v-else-if="title === 'h3'">{{ content }}</h3>
    <h4 :class="className" v-else-if="title === 'h4'">{{ content }}</h4>
    <h5 :class="className" v-else-if="title === 'h5'">{{ content }}</h5>
    <h6 :class="className" v-else-if="title === 'h6'">{{ content }}</h6>
    <h1 :class="className" v-else >{{ content }}</h1>

</template>
<style lang="scss" scoped>

</style>