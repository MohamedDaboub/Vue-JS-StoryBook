<script setup>
import { computed, onMounted,ref } from 'vue'
// import axios from 'axios'
import MyBackgroundScroll from '../components/MyBackgroundScroll.vue'
import MyButton from '@/components/elements/MyButton.vue'
import DefaultLayout from '@/components/layouts/DefaultLayout.vue'
import MyCard from '../components/MyCard.vue'
import {client } from '@/utils/axios.js'

// const BASE_URL = import.meta.env.VITE_API_URL;

// client axios
// const client = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
// });
console.log('BASE_URL',client)

// axios
const getrecipes = async () =>{
  const response = await client.get('/recipes')
  return response.data
}

const recipes = ref([])

const recipeNames = computed(()=>{
  // return recipes.value.map(recipes => recipes.recipe_name)
  return recipes.value.map((item) =>  item.recipe_name)
})


const spaghettiRecipes = computed(()=>{
  return recipes.value.filter(recipes => recipes.recipe_name.toLowerCase().includes('spaghetti'))

})

const hasgoalID1 = computed(()=>{
  return recipes.value.some(recipes => recipes.goal_id === 1)
})

// utiliser 2 computed pour génér les listes de recettes

const recipesInHero = 4

// une computed pour afficher les 4 premières du tableau recipes .slice
const heroRecipes = computed(()=>{
  // index de 0 a 3 (4 exclus)
  return recipes.value.slice(0,recipesInHero)
})

const gridpage = ref(1)
// une computed pour afficher les autre .slice
const gridRecipes = computed(()=>{
  // index a partir du 4
  const recipesByPage = 3
  return recipes.value.slice(recipesInHero,recipesInHero + recipesByPage * gridpage.value)
})

const moreRecinesToShow = computed(()=>{
  // return recipes.value.length > recipesInHero + gridRecipes.value.length
  return gridRecipes.value.length < (recipes.value.length - recipesInHero)
})

const seeMoreRecipe = () =>{
  gridpage.value++

}


onMounted(async()=>{
  recipes.value = await getrecipes()
})



</script>

<template>
  <DefaultLayout>
    <template #header>
      <nav>
        <ul>
          <li><a href="#">Nav link 1</a></li>
          <li><a href="#">Nav link 2</a></li>
          <li><a href="#">Nav link 3</a></li>
        </ul>
      </nav>
    </template>

    <template #aside>
      <nav>
        <ul>
          <li><a href="#">Aside link 1</a></li>
          <li><a href="#">Aside link 2</a></li>
          <li><a href="#">Aside link 3</a></li>
        </ul>
        
      </nav>
    </template>
    {{ recipes }}
    <!-- {{ recipeNames }}
    {{ spaghettiRecipes }}
    {{ hasgoalID1 }} -->
    <ul>
      <li>Spaghetti</li>
      <li v-for="(recipe,index) in recipes" :key="index">
        {{ recipe.recipe_name }}
      </li>
    </ul>
    <ul>
      <li v-for="(spaghettiRecipes,index)  in recipes" :key="index">
        
        {{ spaghettiRecipes.recipe_name.toLowerCase().includes('spaghetti') }}

      </li>
    </ul>
    <p></p>
    <ul>
      <li v-for="(hasgoalID1,index) in recipes" :key="index">
        {{hasgoalID1.goal_id === 1 }}
      </li>
    </ul>
    <div>
      <p>reccette de la grille</p>
      <div v-for="(recipe,index) in heroRecipes" :key="index">
        <MyCard :id="recipe.recipe_id"  :title="recipe.recipe_name" :description="recipe.recipe_description" :ImageSrc="recipe.image_url"/>
      </div>
    </div>
 
    <div>
      <p>reccette de la grille</p>
      <div v-for="(recipe,index) in gridRecipes" :key="index">
        <MyCard :id="recipe.recipe_id" :title="recipe.recipe_name" :description="recipe.recipe_description" :ImageSrc="recipe.image_url"/>
      </div>
    </div>
    <button v-if="moreRecinesToShow"  @click="seeMoreRecipe">voir plus de recettes</button>
    <!-- <button @click="moreRecinesToShow">qqvoir plus de recettes</button> -->

    <MyBackgroundScroll />

    <template #footer>
      <MyButton href="/about">My link Button</MyButton>
    </template>
  </DefaultLayout>

  <!-- <MyButton size="small" href="/about">My Small Button</MyButton>
  <MyButton href="/about">My link Button</MyButton>
  <MyButton variant="rounded" >My rounded Button</MyButton> -->
  <p></p>
</template>
