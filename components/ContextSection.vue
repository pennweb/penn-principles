<template>
  <div
    class="context-section"
    :class="{'context-section--dark': type == 'dark'}"
  >
    <div class="context-section__inner grid">
      <div class="context-section__icons">
        <img
          v-if="type == 'dark'"
          src="/images/icon_4.svg"
          alt=""
        />
        <img
          v-if="type == 'dark'"
          src="/images/icon_4.svg"
          alt=""
        />
        <img
          v-if="type != 'dark'"
          src="/images/icon_5.svg"
          alt=""
        />
        <img
          v-if="type != 'dark'"
          src="/images/icon_5.svg"
          alt=""
        />
      </div>
      <div class="context-section__main text-center">
        <h2
          class="context-section__heading heading-style-1"
          :class="type == 'dark' ? 'text-light' : 'text-dark'"
          v-html="heading"
        />
        <p
          class="context-section__p paragraph-style-1"
          :class="type == 'dark' ? 'text-light' : 'text-primary'"
          v-html="paragraph"
        />
        <BottomBorder />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
    },
    heading: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss">
.context-section {
  position: relative;
  padding: 60px 0;

  @include breakpoint(medium) {
    padding: 100px 0;
  }

  &--dark {
    background-color: $navy;

    .bottom-border {
      fill: $red !important;
    }
  }

  &__icons {
    display: flex;
    grid-column: span 12 / span 12;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    @include breakpoint(medium) {
      margin-bottom: 8px;
    }

    img {
      width: 36px;
    }
  }

  &__main {
    grid-column: span 12 / span 12;

    @include breakpoint(medium) {
      grid-column: span 8 / span 8;
      grid-column-start: 3;
    }
  }

  &__heading {
    line-height: 54px;

    span {
      display: inline-block;
      margin-bottom: -10px;
      font-size: 40px;
      text-transform: lowercase;
    }
  }


  &__p + .bottom-border {
    margin-top: 60px;
  }

  .bottom-border {
    width: 130px;
    margin-right: auto;
    margin-left: auto;
    fill: $navy;

    @include breakpoint(medium) {
      width: 186px;
    }
  }

  &__reverse-arrow {
    transform: rotate(180deg);
  }
}
</style>