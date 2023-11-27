<template>
  <div class="section-arrow-container">
    <img
      v-if="type != 'dark'"
      class="hero__arrow section-arrow"
      src="/images/arrow.svg"
      alt=""
    />
    <img
      v-if="type == 'dark'"
      class="hero__arrow section-arrow"
      src="/images/arrow2.svg"
      alt=""
    />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
    }
  }
}
</script>

<style lang="scss">
.section-arrow-container {
  position: relative;
  height: 0;
  overflow: visible;
}

.section-arrow {
  z-index: 50;
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 18px;
  transform: translateX(-50%) translateY(50%);
}
</style>