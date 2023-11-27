<template>
  <div
    ref="video"
    class="video"
  >
    <div
      class="video__overlay"
      :class="{'video__overlay--active': active == true}"
    >
      <slot :setActive="setActive" />
    </div>
    <button
      class="video__close-btn"
      @click="setInactive()"
    >
      <img
        src="/images/close.svg"
        alt="close button"
      />
    </button>
    <div ref="iframe" class="video__iframe"></div>
  </div>
</template>

<script>
import Player from '@vimeo/player';
let VMPlayer;

export default {
  data() {
    return {
      active: false,
      player: null,
    };
  },
  mounted() {
    const component = this;
    const id = this.id;
    VMPlayer = new Player(component.$refs.iframe, {
      id: id,
    });

    VMPlayer.on('ended', () => {
      component.active = false;
    });

    VMPlayer.on('pause', () => {
      component.active = false;
    });
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    setInactive() {
      this.active = false;

      VMPlayer.pause();
    },
    setActive() {
      this.active = true;

      VMPlayer.play();
    },
  },
}
</script>

<style lang="scss">
.video {
  position: relative;
  height: 100vh;
  min-height: 700px;
  overflow: hidden;

  &__overlay {
    z-index: 10;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: $transition-default;

    &--active {
      visibility: hidden;
      opacity: 0;
    }
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80%;
    background-color: black;

    @include breakpoint(medium) {
      height: 100%;
    }

    iframe {
      width: 100%;
      height: 100%;
    }
  }

  &__close-btn {
    z-index: 1;
    position: absolute;
    top: 25px;
    right: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 40px;
    appearance: none;
    background: transparent;
    border: none;
    cursor: pointer;

    @include breakpoint(medium) {
      right: 50px;
      width: 50px;
    }
  }
}
</style>