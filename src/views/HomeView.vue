<script setup>
import { onMounted } from 'vue'
import axios from 'axios'
import MyBackgroundScroll from '../components/MyBackgroundScroll.vue'
import MyButton from '@/components/elements/MyButton.vue'
import DefaultLayout from '@/components/layouts/DefaultLayout.vue'

//  recuperer toutles les recettes de  la cuisine 1 => /recipes/cuisine/:cuisineid



const getArticlesthen = ()=>{
  fetch('http://localhost:3000/recipes')
    .then(response => response.json())
    .then((recipes) =>{
      fetch('http://localhost:3000/recipes/cuisine/1')
        .then(response => response.json())
        .then(cuisineRecipies => console.log({recipes,cuisineRecipies}))
    })
}

const getarticles = async()=>{
  const response = await fetch('http://localhost:3000/recipes')
  const cuisineRecipies = await fetch ('http://localhost:3000/recipes/cuisine/1')
  return {recipes:response.json,cuisineRecipies: await cuisineRecipies.json}
}
onMounted(async()=>{
  console.log('fetch + await', getarticles())
  getArticlesthen()
  
})
// }
// // .then 
// fetch('http://localhost:3000/recipes',{
//   method: 'GET'
// }).then(response => {
//   return response.json()
// }).then(data => {
//   console.log('liste des recete',data)
// }).catch(err => {
//   console.log(err)
// })
// console.log('test')
// // async await
// const response = await fetch('http://localhost:3000/recipes')
// const data = await response.json()
// console.log('liste des recete',data)

// console.log('test apres')

// axios


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
