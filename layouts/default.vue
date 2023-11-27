<template>
  <main class="layout layout--default">
    <slot />
  </main>
</template>

<style lang="scss">
.layout {
  min-height: 100vh;

  &--default {
    background-color: $white;
  }
}
</style>