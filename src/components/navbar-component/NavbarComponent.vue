<template>
  <nav>
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
  </nav>
</template>

<script>
  import { RouterLink } from 'vue-router';

  export default {
    name: 'navbar-component',
    props: {},
    components: {
      RouterLink,
    },

    setup() {
      return {};
    },
  };
</script>

<style lang="scss" scoped>
  nav {
    width: 100%;
    font-size: 1rem;
    text-align: center;

    a {
      font-weight: bold;
      color: var(--color-text);
      padding: 0 1rem;
      border-left: 1px solid var(--color-border);

      &:first-of-type {
        border: 0;
      }

      &:hover {
        color: var(--color-text);
      }

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
