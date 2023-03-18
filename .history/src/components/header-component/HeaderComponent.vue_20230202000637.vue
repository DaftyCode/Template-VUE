<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="menu-icon" @click="toggleMenu()">
      <div class="line first"></div>
      <div class="line middle"></div>
      <div class="line last"></div>
    </div>

    <div class="wrapper">
      <NavbarComponent></NavbarComponent>
    </div>
  </header>
</template>

<script>
  import NavbarComponent from '../navbar-component/NavbarComponent.vue';
  import { useSidenavStore } from '@/stores/sidenav';

  export default {
    name: 'header-component',
    props: {},
    components: {
      NavbarComponent,
    },

    setup() {
      const store = useSidenavStore();

      const toggleMenu = () => {
        store.toggleOpened();
      };

      return {
        toggleMenu,
      };
    },
  };
</script>

<style lang="scss" scoped>
  header {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

  .logo {
    max-height: 40px;
    width: auto;
    padding: 10px 10px 0px 10px;
  }

  .menu-icon {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    cursor: pointer;
    background-size: cover;
    background-repeat: no-repeat;

    .line {
      height: 3px;
      width: 100%;
      background: var(--secondary);
      margin-bottom: 4px;
      border-radius: 2px;
      position: relative;
      top: 0;
      transition: all 0.5s;
    }

    &:hover {
      .line {
        background: var(--secondary-light);
        box-shadow: 0px 0px 8px 0px rgb(0 0 0 / 100%);
      }
    }

    &.open {
      display: block;

      .middle {
        width: 0px;
      }

      .first {
        transform: rotate(45deg);
        top: 6.5px;
        width: 85%;
      }

      .last {
        transform: rotate(-45deg);
        top: -7px;
        width: 85%;
      }
    }
  }
</style>
