<script setup>
import MyButtonVue2Vue from "./elements/MyButtonVue2.vue";
import MyIcon from './elements/MyIcon.vue'
import MyTitle from './elements/MyTitle.vue'
import MyParagraph from './elements/MyParagraph.vue'
const props = defineProps({
  title: String,
  ImageSrc: String,
  ImageAlt: String,
  Prix: String,
  Name: String,
});
</script>

<template>
  <div class="card">
    <div class="card__Image">
      <img :src='ImageSrc' :alt="ImageAlt" />
    </div>
    <div class="card__content">
      <div  >
        <MyTitle class="card__content__Gap" :content="title" title="h4"/>
        <MyParagraph class="card__content__Gap"  :content="Name" paragraphe_Size="p2"/>
        <MyTitle class="card__content__Gap"  :content="Prix" title="h5"/>
      </div>
      <div class="card__content__Icon">
        <MyIcon name="IconFlecheD" variant="black" Shadow/>
        <MyIcon name="IconFlecheG" Shadow/>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.card {
    position: relative; // added for absolute positioning context
    max-width: rem(250);
    border-radius: rem(20);
    border: rem(1) solid $gray;
    box-shadow: 0px rem(2) rem(30) rgba(0, 0, 0, 0.20);

    &__Image {
        width: 100%; // to make sure the image takes up the full width
        transform: translateX(0%) translateY(-5%);
        box-shadow: 0px rem(0) rem(10) rgba(0, 0, 0, 0.20);
    }
    &__content {
        padding: rem(0) rem(0) rem(30) rem(0);
        // margin: 0px 0 100px 0px;
        display: flex;
        flex-direction: column;
        justify-content: center; 
        height: 100%; 
        text-align: center;
        &__Gap {
            padding: rem(3);
            
        }
        
        &__Icon {
            position: absolute; // to position it at the bottom
            bottom: rem(-10); // move it down a bit so it's protruding
            left: 50%; // center it horizontally
            transform: translateX(-50%) translateY(30%); // ensures true centering

            display: flex;
            gap: rem(30);
        }
    }
}

</style>