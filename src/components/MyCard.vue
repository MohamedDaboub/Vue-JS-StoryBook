<script setup>
import MyButtonVue2Vue from "./elements/MyButtonVue2.vue";
// import { useRoute } from "vue-router";
// import { onMounted,ref } from 'vue'
// import {client } from '@/utils/axios.js'

// const route = useRoute()
// const recipe = ref({})

const props = defineProps({
  title: String,
  description: String,
  buttonLabel: String,
  ImageSrc: String,
  ImageAlt: String,
  id: Number,
});
// const getrecipes = async (id) =>{
//   const response = await client.get(`/recipes/${id}`)
//   return response.data
// }

// onMounted(async()=>{
//   recipe.value = await getrecipes(route.params.id)
// })
</script>

<template>
  <div class="card">
    <div class="card__image">
      <img  :src='ImageSrc' :alt="ImageAlt" />
    </div>
    <div class="card__content">
      <div class="card__title">
        <h1>{{title}}</h1>
      </div>
      <div class="card__description">
        <p>{{description}}</p>
      </div>
      <div class="card__button">
        <router-link :to="`/recipes/${id}`">
          <MyButtonVue2Vue size="small" variant="rounded">{{buttonLabel}}</MyButtonVue2Vue>
        </router-link>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.card{
    max-width: rem(300);
    border-radius: rem(20);
    border: rem(1) $gray solid; 
    overflow: hidden;
    &__image{

        
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    &__content{
        padding: rem(20) rem(10);
        > * + *{
            margin-top: rem(20);
        }
    }
    &__button{
        text-align: center;
    }
}
</style>