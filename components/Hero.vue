<template>
  <Video
    :id="'226053498'"
    v-slot="video"
  >
    <div class="hero">
      <div class="hero__overlay">
        <div class="hero__inner grid">
          <div class="hero__top">
            <a href="https://www.upenn.edu/" target="_blank">
              <img
                class="hero__logo"
                src="/images/logo.svg"
                alt="header logo and link to homepage"
              />
            </a>
            <img
              class="hero__badge"
              src="/images/badge.svg"
              alt="badge"
            />
          </div>
        </div>
        <div class="hero__inner grid">
          <div class="hero__main">
            <div class="hero__main-group">
              <div
                class="subheading-style-1 text-light"
                v-text="'A Message from the President and Provost'"
              ></div>
              <h1
                class="heading-style-2 text-light"
                v-text="'Penn’s Focus on Tomorrow'"
              />
              <p
                class="paragraph-style-1 text-light"
                v-text="'Introducing a New Strategic Framework for the University of Pennsylvania.'"
              />
            </div>
            <div class="btn-group">
              <button
                class="btn"
                @click="video.setActive()"
              >
                <svg viewBox="0 0 19.7 13.6">
                  <path d="M0 0v13.6l19.7-6.8z" />
                </svg>
                Watch
              </button>
              <a class="btn btn--read" href="/" target="_blank">
                <svg viewBox="0 0 17.1 13">
                  <path d="M17.1 0 8.6 2.3 0 0v13l8.6-2.3 8.5 2.3z" />
                </svg>
                Read
              </a>
            </div>
          </div>
        </div>
      </div>
      <video autoplay muted loop>
        <source src="/videos/videoplayback.mp4" type="video/mp4">
      </video>
    </div>
  </Video>
</template>

<style lang="scss">
.hero {
  z-index: 10;
  position: relative;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: visible;
  
  &__overlay {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background:
      linear-gradient(
        to right,
        rgba(1, 31, 91, 1) 10%,
        rgba(1, 31, 91, 0) 100%
      );
  }

  &__inner:first-child {
    position: absolute;
    top: 0;
  }

  &__top {
    display: flex;
    justify-content: center;
    grid-column: span 12 / span 12;
    margin-top: 40px;

    @include breakpoint(medium) {
      justify-content: space-between;
    }

    .hero__badge {
      display: none;

      @include breakpoint(medium) {
        display: block;
      }
    }
  }
  
  &__main {
    position: relative;
    grid-column: span 12 / span 12;

    @include breakpoint(medium) {
      grid-column: span 9 / span 9;
    }

    @include breakpoint(large) {
      grid-column: span 7 / span 7;
    }
  }

  &__main-group {
    position: relative;
  }

  &__logo {
    width: 300px;

    @include breakpoint(medium) {
      width: 360px;
    }
  }

  &__badge {
    position: absolute;
    right: 20px;
    bottom: 20px;
    width: 120px;

    @include breakpoint(medium) {
      position: static;
    }
  }

  .subheading-style-1 {
    &::after {
      display: block;
      content: '';
      height: 7px;
      width: 160px;
      margin-top: 7px;
      background-color: $red;
    }
  }

  &__signature {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 54px;
    transform: translateX(-50%) translateY(110%);

    @include breakpoint(medium) {
      transform: translateX(-50%) translateY(100%);
    }
  }

  video {
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: auto;
    height: auto;
    min-width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
    background-repeat: repeat;
    background-size: cover;
  }

  .btn-group {
    margin-top: 60px;
    display: flex;

    @include breakpoint(medium) {
      margin-top: 40px;
    }

    .btn + .btn {
      margin-left: 16px;
    }
  }

  .btn {
    font-size: rem-calc(16px);
    appearance: none;
    border: 0;
    cursor: pointer;
  }
}
</style>