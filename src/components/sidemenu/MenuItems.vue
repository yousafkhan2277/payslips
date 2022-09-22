<template>

    <div class="nav__list">
    <div class="nav__listitem" v-for="menu in menuItems" :key="menu">
          <router-link :to="menu.path" >
              <font-awesome-icon :icon="menu.icon" height="80px" />
              <p>{{menu.title}}</p>
          </router-link>
          </div>
    </div>
</template>

<script>

export default {
  props: ['menuItems'],
  setup() {

  }
}
</script>

<style lang="scss" scoped>

.nav__list {
    display: flex;
    flex-direction: column;

    &item {
      list-style: none;
      transition: all 200ms ease-in;
      padding: 0.7rem 2.2rem;
      border-left: 6px solid transparent;
      cursor: pointer;



      &:hover {
        background-color: var(--clr-gray150);
      }

      a {
        display: flex;
        gap: 1rem;
        align-items: center;
        color: var(--clr-gray400);
        text-decoration: none;
        font-weight: 500;
      }

      svg {
        fill: var(--clr-gray400);
        width: 2rem;
      }

      &-active {
        background-color: var(--clr-gray200);
        border-left: 6px solid var(--clr-primary);

        svg,
        p {
          color: var(--clr-primary);
          fill: var(--clr-primary);
        }
      }
    }
  }
  .navClosed p{
display: none;
}
.router-link-active{
  background-color: ghostwhite !important;
    color: coral !important;
    height: 40px;
}


</style>