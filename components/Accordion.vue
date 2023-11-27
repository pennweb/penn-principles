<template>
  <div
    class="accordion"
    ref="accordion"
  >
    <div class="accordion__inner grid">
      <div class="accordion__main">
        <article
          v-for="(item, index) in items"
          class="accordion__panel"
          data-accordion-panel
        >
          <h3 class="accordion__header">
            <button
              class="accordion__button"
              data-accordion-button
              :aria-expanded="active.includes(index) ? true : false"
              @click="toggleActive(index, $event)"
            >
              <div class="accordion__image">
                <img
                  class="object-cover"
                  :src="item.image.src"
                  :alt="item.image.alt"
                />
              </div>
              <div class="accordion__title">
                <!-- <div class="pill" v-html="item.bullet" /> -->
                <div>{{ item.heading }}</div>
              </div>
              <span class="accordion__arrow-btn pill">
                <svg viewBox="0 0 18.1 10.1">
                  <path d="m9 10.1-9-9L1.1 0 9 8l8-8 1.1 1.1z" />
                </svg>
              </span>
            </button>
          </h3>
          <div
            class="accordion__window"
            data-accordion-window
          >
            <div
              class="accordion__content"
              :class="{'accordion__content--active': active.includes(index)}"
              data-accordion-content
            >
              <ul class="alpha-list"
                v-html="item.content"
              />
            </div>
          </div>
        </article>
      </div>
    </div>
    <!-- <FootDecor class="accordion__footer-decor" /> -->
  </div>
</template>

<script>
  export default {
      name: 'accordion',
      data() {
          return {
              active: [],
          };
      },
      props: {
          items: {
            type: Array,
            required: true,
          },
          single: {
              type: Boolean,
              required: false,
              default: false,
          },
      },
      methods: {
          toggleActive(b, e) {
              const panel = e.target.closest('[data-accordion-panel]');
              const panelSiblings = this.getSiblings(panel);
              const window = panel.querySelector('[data-accordion-window]');
              const content = panel.querySelector('[data-accordion-content]');

              if (this.active.includes(b)) {
                  this.active = this.active.filter((item) => item !== b);
              } else {
                  this.active.push(b);
              }

              this.active.includes(b)
                  ? window.setAttribute(
                        'style',
                        `height: ${content.offsetHeight}px; visibility: visible;`
                    )
                  : window.setAttribute('style', 'height: 0; visibility: hidden;');

              if (this.single == 1) {
                  this.active = this.active.filter((item) => item == b);
                  panelSiblings
                      .filter((item) => item.localName !== 'code')
                      .forEach((sibling) => {
                          const siblingWindow = sibling.querySelector('[data-accordion-window]');
                          siblingWindow.setAttribute('style', 'height: 0; visibility: hidden;');
                      });
              }
          },
          getSiblings(element) {
              let siblings = [];
              let sibling = element.parentNode.firstChild;

              while (sibling) {
                  if (sibling.nodeType === 1 && sibling !== element) {
                      siblings.push(sibling);
                  }
                  sibling = sibling.nextSibling;
              }

              return siblings;
          },
      },
  };
</script>

<style lang="scss">
.accordion {
  &__panel + &__panel {
    border-top: 1px solid #ffffff;
  }

  &__header {
    margin: 0;
  }

  &__button {
    z-index: 10;
    position: relative;
    margin: 0;
    border: 0;
    padding: 30px 0;
    width: 100%;
    text-align: left;
    appearance: none;
    cursor: pointer;

    @include breakpoint(large) {
      padding: 30px 30px 30px 0;
    }
  }

  &__window {
    margin: 0;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    transition: .2s ease-in-out;
  }

  &__content {
    padding: 20px 14px;
  }

  p:nth-child(1) {
    margin-top: 0;
  }
}

.accordion {
  padding: 0 0 100px;
  background-color: $navy;

  &__main {
    grid-column: span 12 / span 12;
  }

  &__button {
    @extend .heading-style-3;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: $white;
    background-color: transparent;
  }

  &__image {
    position: relative;
    display: none;
    flex-shrink: 0;
    width: 100%;
    padding-bottom: 66.6666%;
    border: 1px solid $white;

    @include breakpoint(medium) {
      display: block;
      width: 270px;
      height: 170px;
      padding-bottom: 0;
    }

    img {
      position: absolute;
    }
  }

  &__image + &__title {
    @include breakpoint(medium) {
      margin-left: 80px;
    }
  }

  &__title {
    justify-self: flex-start;

    .pill {
      margin-bottom: 8px;
    }
  }

  &__arrow-btn.pill {
    flex-shrink: 0;
    width: 60px;
    height: 30px;
    margin-left: 20px;
    background-color: transparent;
    border-radius: 30px;
    border: 2px solid $red;
    transition: $transition-default;

    @include breakpoint(medium) {
      margin-left: auto;
    }

    &:hover {
      background-color: $red;
    }

    [aria-expanded='true'] & {
      background-color: $red;
    }

    svg {
      width: 16px;
      fill: $white;
      transition: $transition-default;

      [aria-expanded='true'] & {
        transform: rotate(180deg);
      }
    }
  }

  .alpha-list {
    color: $white;

    @include breakpoint(medium) {
      margin-left: 350px;
    }

    li::marker {
      color: $red;
    }
  }

  &__content {
    padding: 0 0 80px;
  }

  &__footer-decor {
    display: block;
    width: 360px;
    margin: 100px auto 0;
    fill: $white;
  }
}

@mixin heading-style-1() {
  font-family: $font-primary;
  font-size: 7vw;
  font-weight: 400;
  font-style: normal;
  letter-spacing: -0.02em;

  @include breakpoint(large) {
    font-size: 6vw;
  }
}

@mixin heading-style-2() {
  font-family: $font-primary;
  font-size: 6vw;
  font-weight: 400;
  font-style: normal;
  letter-spacing: -0.02em;

  @include breakpoint(large) {
    font-size: 5vw;
  }
}

@mixin heading-style-3() {
  font-family: $font-primary;
  font-size: 2.2vw;
  font-weight: 400;
  font-style: normal;
  letter-spacing: -0.02em;
}

@mixin subheading-style-1() {
  font-family: $font-primary;
  font-size: 1.2vw;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

@mixin paragraph-style-1() {
  font-family: $font-primary;
  font-size: 2.1vw;
  font-weight: 400;
  font-style: normal;
  line-height: 2.4vw;
  letter-spacing: -0.02em;
}

@mixin paragraph-style-2() {
  font-family: $font-secondary;
  font-size: 1.2vw;
  font-weight: 400;
  font-style: normal;
  line-height: 1.6vw;
  letter-spacing: -0.02em;
}

</style>