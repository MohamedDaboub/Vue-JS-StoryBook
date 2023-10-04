<script setup>
import MyCard from './MyCard.vue';

import {reactive} from 'vue';
const reponse = [{
  title: 'My Cards',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  buttonLabel: 'Click me',
  ImageSrc: 'https://picsum.photos/seed/picsum/200/100',
  ImageAlt: 'Random image',
},
{
  title: 'My Cards',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  buttonLabel: 'Click me',
  ImageSrc: 'https://picsum.photos/seed/picsum/200/100',
  ImageAlt: 'Random image',
},
{
  title: 'My Cards',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  buttonLabel: 'Click me',
  ImageSrc: 'https://picsum.photos/seed/picsum/200/100',
  ImageAlt: 'Random image',
},
{
  title: 'My Cards',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  buttonLabel: 'Click me',
  ImageSrc: 'https://picsum.photos/seed/picsum/200/100',
  ImageAlt: 'Random image',
},
{
  title: 'My Cards',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  buttonLabel: 'Click me',
  ImageSrc: 'https://picsum.photos/seed/picsum/200/100',
  ImageAlt: 'Random image',
},
{
  title: 'My Cards',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  buttonLabel: 'Click me',
  ImageSrc: 'https://picsum.photos/seed/picsum/200/100',
  ImageAlt: 'Random image',
},
{
  title: 'My Cards',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  buttonLabel: 'Click me',
  ImageSrc: 'https://picsum.photos/seed/picsum/200/100',
  ImageAlt: 'Random image',
},
{
  title: 'My Cards',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  buttonLabel: 'Click me',
  ImageSrc: 'https://picsum.photos/seed/picsum/200/100',
  ImageAlt: 'Random image',
}]
const cards = reactive(reponse);
</script>
<template>
  <div class="my-cards">
    <MyCard v-for="card in cards" v-bind="card" />
  </div>
</template>
<style lang="scss" scoped>
.my-cards{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: rem(20);
}
</style>