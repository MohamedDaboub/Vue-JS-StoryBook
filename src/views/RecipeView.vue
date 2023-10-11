<script setup>
import { useRoute } from "vue-router";
import { onMounted,ref } from 'vue'
import {client } from '@/utils/axios.js'

const route = useRoute()
const recipe = ref({})

// const getRecipe = async (id) => {
//   const response = await fetch(`http://localhost:3000/recipes/${id}`)
//   return await response.json()
// }
const getrecipes = async (id) =>{
  const response = await client.get(`/recipes/${id}`)
  return response.data
}

onMounted(async()=>{
  recipe.value = await getrecipes(route.params.id)
})
    
</script>
<template>
  <div>
    <h1>Recipe View</h1>
    <router-link to="/home" >Retour a l'accueil</router-link>
    recettes avec l'id : {{ route.params.id }}
    <div>
      <h2>{{ recipe.recipe_name }}</h2>
      <p>{{ recipe.recipe_description }}</p>
      <p>{{ recipe.goal_id }}</p>
      <p>{{ recipe.image_url }}</p>
    </div>
  </div>
</template>

<style>

</style>