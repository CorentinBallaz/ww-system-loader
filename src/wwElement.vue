<template>
  <div class="app">
    <scaling-squares-spinner :animation-duration="animationDuration" :size="size" :color="color" />
  </div>
</template>

<script>
import { ScalingSquaresSpinner } from "epic-spinners";

export default {
  components: { ScalingSquaresSpinner },
  props: {
    content: { type: Object, required: true },
  },
  computed: {
    animationDuration() {
      return this.content.animationDuration;
    },
    size(){
      return this.content.size;
    },
    color() {
      return this.content.color;
    },
  },
};
</script>

<style lang="scss" scoped>
.app {
  height: 100%;
  width: 100%;
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.atom-spinner {
  height: 100%;
  width: 100%;
  box-sizing: content-box;
  display: flex;
  position: relative;
}
</style>
