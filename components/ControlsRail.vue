<template>
  <div
    class="controls-rail"
    ref="target"
  >
    <div
      class="controls-rail__cart"
      ref="cart"
    >
      <ul
        class="controls-rail__controls"
        ref="controls"
      >
        <li>
          <button :class="{'active': active == 'I'}">Scroll to section 1</button>
        </li>
        <li>
          <button :class="{'active': active == 'II'}">Scroll to section 2</button>
        </li>
        <li>
          <button :class="{'active': active == 'III'}">Scroll to section 3</button>
        </li>
        <li>
          <button :class="{'active': active == 'IV'}">Scroll to section 4</button>
        </li>
      </ul>
    </div>
    <slot />
  </div>
</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      active: 'I',
    }
  },
  mounted() {
    const component = this;
    const { $listen } = useNuxtApp();

    $listen('section:changed', (numeral) => {
      component.active = numeral;
    });

    this.animate();

    console.log(this);
  },
  methods: {
    animate() {
      const animationTarget = this.$refs.target;
      const cart = this.$refs.cart;
      const controls = this.$refs.controls;

      gsap.to(
        cart,
        {
          scrollTrigger: {
            trigger: animationTarget,
            toggleActions: 'play reset play reset',
            start: 'top top',
            end: 'bottom bottom',
            onLeave: () => {
              console.log('leaving');
              cart.classList.add('controls-rail__cart--bottomed');
            },
            onEnterBack: () => {
              cart.classList.remove('controls-rail__cart--bottomed');
            }
          },
          position: 'fixed',
          ease: 'power3.easeOut',
        }
      )
    },
    toggleActive() {
      
    }
  }
}
</script>

<style lang="scss">
.controls-rail {
  position: relative;

  &__cart {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;

    &--bottomed {
      position: absolute;
      top: auto;
      bottom: 0;
    }
  }

  &__controls {
    position: absolute;
    top: 40vh;
    right: 40px;
    display: none;
    font-size: 0;

    @include breakpoint(medium) {
      display: block;
    }

    li + li {
      margin-top: 10px;
    }

    button {
      width: 12px;
      height: 12px;
      padding: 0;
      background-color: #b7b6b2;
      border: 0;
      font-size: 0;
      appearance: none;
      transition: $transition-default;

      &.active {
        color: $white;
        background-color: $navy;
        transform: rotate(225deg);
      }
    }
  }
}
</style>