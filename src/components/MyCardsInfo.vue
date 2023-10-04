<script setup>
import MyCardInfo from './MyCardInfo.vue';
import {reactive} from 'vue';

const reponse = [{
  id:1,
  title: 'My Cards',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  Icon: 'IconCamion',
},
{
  id:2,
  title: 'My Cards',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  Icon: 'IconEat',
},
{
  id:3,
  title: 'Healthy Food',
  description: 'But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.',
  Icon: 'IconEat2',
}]
const cardsinfo = reactive(reponse);
</script>
<template>
  <div class="my-cards">
    <MyCardInfo v-for="cardinfo in cardsinfo" v-bind="cardinfo" :key="cardinfo.id" />
  </div>
</template>
  <style lang="scss" scoped>
  .my-cards{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: rem(20);
  }
  </style>