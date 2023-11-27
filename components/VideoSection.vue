<template>
  <div class="video-section">
    <div class="video-section__block video-section__block--left">
      <h2
        class="video-section__heading paragraph-style-1 text-light"
        v-text="'A Message from the President'"
      />
      <div class="video-section__btns">
        <a class="video-section__btn" href="/">
          <svg viewBox="0 0 19.7 13.6">
            <path d="M0 0v13.6l19.7-6.8z" />
          </svg>
          Read
        </a>
      </div>
      <Signature class="signature" />
    </div>
    <div class="video-section__block video-section__block--right">
      <Video
        :image="{
          src: 'https://www.upenn.edu/sites/default/files/2020-12/philly-penn-skyline-quad.jpg',
          srcset: 'https://www.upenn.edu/sites/default/files/2020-12/philly-penn-skyline-quad.jpg',
          alt: 'test alt'
        }"
        :id="'Pyig6G90WVM'"
      />
    </div>
  </div>
</template>

<style lang="scss">
.video-section {
  display: flex;

  &__block {
    width: 50%;

    &--left {
      display: flex;
      flex-direction: column;
      padding: 60px;
      background-color: $red;
    }
  }

  &__heading {
    text-transform: uppercase;
  }

  &__heading + &__btns {
    margin-top: 20px;
  }

  &__btn {
    @include paragraph-style-2;

    font-family: $font-primary;
    display: inline-flex;
    align-items: center;
    padding: 5px 12px;
    color: $navy;
    text-transform: uppercase;
    text-decoration: none;
    background-color: #e2e2e0;
    border-radius: 4px;

    svg {
      width: 20px;
      fill: $navy;
      margin-right: 8px;
    }
  }

  &__btn + &__btn {
    margin-left: 22px;
  }

  .signature {
    width: 140px;
    margin-top: auto;
    margin-bottom: 0;
    fill: $white;
  }

  .video {
    flex-shrink: 0;
  }
}
</style>