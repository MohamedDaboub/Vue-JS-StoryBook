<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  setup() {
    const container = ref(null)
    const percent = ref(0)

    function handleScroll() {
      let scrollTop = window.scrollY
      let scrollBottom = scrollTop + window.innerHeight
      if (container.value) {
        let offsetTop = container.value.offsetTop
        let elementHeight = container.value.offsetHeight

        let result = ((scrollBottom - offsetTop) / elementHeight) * 100
        percent.value = Math.round(result)
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      percent,
      container
    }
  }
}
</script>

<template>
  <div ref="container" class="backgroundScroll">
    <div class="backgroundScroll__content">
      <p>Section Scroll : {{ percent }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.backgroundScroll {
  background: $black;
  color: $white;
  height: 2000px;

  &__content {
    left: 0;
    position: sticky;
    top: 0;
    width: 100%;
  }
}
</style>
