<script setup>
import MyButtonVue2Vue from "./elements/MyButtonVue2.vue";
import MyIcon from './elements/MyIcon.vue'
import MyTitle from './elements/MyTitle.vue'
import MyParagraph from './elements/MyParagraph.vue'
const props = defineProps({
  title: String,
  buttonLabel: String,
  ImageSrc: String,
  ImageAlt: String,
  Prix: String,
  IconStar: String,
  NoteStar: String,
});
</script>

<template>
  <div class="card">
    <div class="card__image">
      <img  :src='ImageSrc' :alt="ImageAlt" />
    </div>
    <div class="card__content">
      <div class="card__content__UP">
        <div>
          <MyTitle :content="title" title="h4"/>
        </div>
        <div class="card__content__UP">
          <div>
            <MyIcon name="IconStar" variant="White"/>
          </div>
          <div>
            <MyParagraph :content="NoteStar" paragraphe_Size="p2"/>
          </div>
        </div>
      </div>
      <div class="card__content__UP">
        <div>
          <MyButtonVue2Vue size="small" variant="rounded">{{buttonLabel}}</MyButtonVue2Vue>
        </div>
        <div>
          <MyParagraph :content="Prix" paragraphe_Size="p1"/>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.card{
    max-width: rem(450);
    border-radius: rem(20);
    border: rem(1) $gray solid; 
    overflow: hidden;
    box-shadow: 0px rem(2) rem(30) rgba(0, 0, 0, 0.20);
    &__content{
        padding: rem(20);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &__UP{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
}
</style>