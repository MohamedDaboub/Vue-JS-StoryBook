<script setup>
import { computed } from 'vue'
import IconCommunityVue from "../icons/IconCommunity.vue";
import IconDocumentationVue from "../icons/IconDocumentation.vue";
import IconSupportVue from "../icons/IconSupport.vue";
import IconToolingVue from "../icons/IconTooling.vue";
import IconEcosystemVue from "../icons/IconEcosystem.vue";


const props = defineProps({
  name: String,
})
const getIcon = computed(()=>{
    switch(props.name){
        case 'community':
            return IconCommunityVue
        case 'Documentation':
            return IconDocumentationVue
        case 'Support':
            return IconSupportVue
        case 'Tooling':
            return IconToolingVue
        default:
            return IconEcosystemVue
    }
})
</script>
<template>
 <i class="icon">
    <component :is="getIcon" />
 </i>
</template>
<style lang="scss" scoped>
.icon{
    align-items: center;
    border-radius: 100%;
    background: $white;
    box-shadow: 0px 0px rem(5) 0px rgba(0,0,0,0.75);
    display: inline-flex;
    height: rem(50);
    justify-content: center;
    width: rem(50);
}
</style>