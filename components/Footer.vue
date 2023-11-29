<template>
  <div class="footer">
    <div class="footer__inner grid">
      <div class="footer__main">
        <Logo />
        <p>&#169; 2023, University of Pennsylvania</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.footer {
  padding: 100px 0 60px;
  background-color: $white;
  border-bottom: 7px solid $navy;

  &__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-column: span 12 / span 12;
  }

  &__logo {
    width: 280px;

    @include breakpoint(medium) {
      width: 540px;
    }
  }

  .logo {

    &__left {
      @include breakpoint(medium) {
        width: 260px;
      }
    }

    &__right {
      @include breakpoint(medium) {
        width: 220px;
      }
    }

    .st1,
    .st0 {
      fill:#011f5b;
    }
  }

  p {
    @include paragraph-style-2;

    color: $navy;
    margin-top: 80px;
  }
}
</style>