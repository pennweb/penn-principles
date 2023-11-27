<template>
  <div
    class="fixed-media-context"
    ref="target"
  >
    <div
      class="fixed-media-context__cart"
      ref="cart"
    >
      <div
        class="media-context"
      >
        <div class="media-context__inner grid">
          <div class="media-context__context">
            <h3
              class="media-context__heading heading-style-2 text-dark"
              v-text="heading"
            />
            <ul class="alpha-list"
              v-html="list"
            />
          </div>
          <div class="media-context__media">
            <div class="media-context__image">
              <img
                class="object-cover"
                :src="image.src"
                :alt="image.alt"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    this.animate();
  },
  props: {
    numeral: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    list: {
      type: String,
      required: true,
    },
    image: {
      type: Object,
      required: true,
    }
  },
  methods: {
    animate() {
      const component = this;
      const animationTarget = this.$refs.target;
      const cart = this.$refs.cart;
      const mm = gsap.matchMedia();

      mm.add('(min-width: 800px)', () => {
        gsap.to(
          cart,
          {
            scrollTrigger: {
              trigger: cart,
              start: 'top 200px',
              end: '+=250px',
              pin: true,
              onEnter: () => {
                component.sectionChanged();
              },
              onEnterBack: () => {
                component.sectionChanged();
              }
            },
            ease: 'power3.easeOut',
            duration: 3
          }
        );
      });
    },
    sectionChanged() {
      const { $event } = useNuxtApp();

      $event('section:changed', this.numeral);

      console.log(this.numeral);
    }
  }
}
</script>

<style lang="scss">
.fixed-media-context {
  padding-bottom: 100px;

  &__cart {
    display: flex;
    align-items: center;
    width: 100vw;
  }
}

.media-context {
  width: 100%;

  &__context {
    grid-column: span 12 / span 12;

    display: flex;
    flex-direction: column;
    justify-content: center;

    @include breakpoint(medium) {
      grid-column: span 5 / span 5;
    }
  }

  &__context + &__media {
    margin-top: 40px;

    @include breakpoint(medium) {
      margin-top: 0;
    }
  }

  &__media {
    grid-column: span 12 / span 12;

    @include breakpoint(medium) {
      grid-column: span 6 / span 6;
    }
  }

  &__number + &__heading {
    margin-top: 26px;
  }

  ul {
    @extend .alpha-list;
  }

  &__image {
    position: relative;
    width: 100%;
    padding-bottom: 66.6666%;
    border: 2px solid $red;

    img {
      position: absolute;
    }
  }
}
</style>