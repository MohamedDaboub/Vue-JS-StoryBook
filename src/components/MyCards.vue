<script setup>
import MyCard from './MyCard.vue';

import {reactive} from 'vue';
const reponse = [{
  id:1,
  title: 'My Cards',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  buttonLabel: 'Click me',
  ImageSrc: 'https://picsum.photos/seed/picsum/200/100',
  ImageAlt: 'Random image',
},
{
  id:2,
  title: 'My Cards',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  buttonLabel: 'Click me',
  ImageSrc: 'https://picsum.photos/seed/picsum/200/100',
  ImageAlt: 'Random image',
},
{
  id:3,
  title: 'My Cards',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  buttonLabel: 'Click me',
  ImageSrc: 'https://picsum.photos/seed/picsum/200/100',
  ImageAlt: 'Random image',
},
{
  id:4,
  title: 'My Cards',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  buttonLabel: 'Click me',
  ImageSrc: 'https://picsum.photos/seed/picsum/200/100',
  ImageAlt: 'Random image',
},
{
  id:5,
  title: 'My Cards',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  buttonLabel: 'Click me',
  ImageSrc: 'https://picsum.photos/seed/picsum/200/100',
  ImageAlt: 'Random image',
},
{
  id:6,
  title: 'My Cards',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  buttonLabel: 'Click me',
  ImageSrc: 'https://picsum.photos/seed/picsum/200/100',
  ImageAlt: 'Random image',
},
{
  id:7,
  title: 'My Cards',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  buttonLabel: 'Click me',
  ImageSrc: 'https://picsum.photos/seed/picsum/200/100',
  ImageAlt: 'Random image',
},
{
  id:8,
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
    <MyCard v-for="card in cards" v-bind="card " :key='card.id' />
  </div>
</template>
<style lang="scss" scoped>
.my-cards{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: rem(20);
}
</style>