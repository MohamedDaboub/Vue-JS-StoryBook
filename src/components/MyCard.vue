<script setup>
import MyButtonVue2Vue from "./elements/MyButtonVue2.vue";
const props = defineProps({
  title: String,
  description: String,
  buttonLabel: String,
  ImageSrc: String,
  ImageAlt: String,
});
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
        <MyButtonVue2Vue size="small" variant="rounded">{{buttonLabel}}</MyButtonVue2Vue>
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