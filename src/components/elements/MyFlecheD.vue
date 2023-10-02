<script setup>
import { computed } from 'vue'
import IconflecheDVue from "../icons/IconFlecheD.vue";
const props = defineProps({
  back: String,
  shadow: String
})

const className = computed(() => {
  return{
  ' -Orange': props.back === 'Orange',
  ' -none': props.back === 'none',
  ' -shadow': props.shadow === 'shadow'
  }
})
</script>
<template>
    <div class="fleche" :class="className">
    <IconflecheDVue />
    </div>
</template>

<style lang="scss" scoped>
.fleche {
  align-items: center;
    border-radius: 100%;
    background: $black;
    fill:$white;
    display: inline-flex;
    height: rem(50);
    justify-content: center;
    width: rem(50);

  &.-Orange {
    background: $primary-color;
    fill:$white;
  }

  &.-none {
    background: none;
    fill: $black;
    &.-shadow{
      box-shadow: 0px rem(0) rem(25) rgba(131,165,255, 0.25);
    }
  }

}

</style>
