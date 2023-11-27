<template>
  <div class="footer">
    <div class="footer__inner grid">
      <div class="footer__main">
        <a href="https://www.upenn.edu/" target="_blank">
          <img
            class="footer__logo"
            src="/images/logo2.svg"
            alt="footer logo and link to homepage"
          />
        </a>
        <p>@inPrinciple&Practice</p>
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

  p {
    @include paragraph-style-2;

    color: $navy;
    margin-top: 80px;
  }
}
</style>