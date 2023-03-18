<template>
  <nav
    class="scroll-container"
    :class="{ 'menu-contract': isOpened, 'is-hovered': isHover }"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <div class="header-nav" :class="{ 'menu-contract': isOpened, 'is-hovered': isHover }">
      <div class="header-nav-body">
        <div class="header-nav-image cursor-pointer">
          <img class="logo-header-nav" alt="logo" src="../../assets/logo.png" />
        </div>
        <div class="header-nav-icon" @click="toggleMenu()">
          <!-- TODO: Meter icono para abrir y cerrar el sidenav -->
          <i class="pi pi-arrow-right-arrow-left" style="font-size: 1.5rem"></i>
        </div>
      </div>
      <div class="header-container tripple-line"></div>
    </div>
    <div class="header-body">
      <div
        class="menu-item"
        v-for="item in items"
        :key="item.id"
        @mouseenter="setHover(item.id)"
        @mouseleave="isMenuHover = false"
      >
        <div
          class="icon-menu"
          :class="{ 'is-menu-hovered': (isMenuHover && itemId === item.id) || activeRoute === item.link }"
        >
          <i :class="item.icon" style="font-size: 2rem"></i>
        </div>
        <div class="link-menu">
          <RouterLink :to="{ name: item.link }" :class="{ 'is-menu-hovered': isMenuHover && itemId === item.id }">{{
            item.name
          }}</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { ref, watch } from 'vue';
  import { RouterLink, useRoute } from 'vue-router';
  import { storeToRefs } from 'pinia';
  import { useSidenavStore } from '@/stores/sidenav';
  import { SIDE_MENU_ITEMS } from './constants/sideMenuItems';
  export default {
    name: 'sidenav-component',
    props: {},
    components: { RouterLink },

    setup() {
      const sidenavStore = useSidenavStore();
      const { isOpened } = storeToRefs(sidenavStore);
      const isHover = ref(false);
      const isMenuHover = ref(false);
      const itemId = ref(0);
      const items = ref(SIDE_MENU_ITEMS);
      const route = useRoute();
      const activeRoute = ref('home');

      console.log(route.name);

      const setHover = (id) => {
        itemId.value = id;
        isMenuHover.value = true;
      };

      const toggleMenu = () => {
        sidenavStore.toggleOpened();
      };

      watch(
        () => route.name,
        () => {
          activeRoute.value = route.name;
        },
      );

      return {
        isOpened,
        isHover,
        isMenuHover,
        toggleMenu,
        items,
        itemId,
        setHover,
      };
    },
  };
</script>

<style lang="scss" scoped>
  nav {
    grid-area: nav;
    width: var(--navSize);
    height: 100%;
    background-color: var(--primary);
    transition: width 0.5s;

    &.menu-contract {
      width: var(--navContractSize);
      transition: width 0.5s;

      &.is-hovered {
        width: var(--navSize);
        transition: width 0.5s;
      }
    }

    .header-nav {
      display: flex;
      flex-direction: column;
      top: 0px;
      width: var(--navSize);
      height: 60px;
      background: var(--primary);
      border-bottom: 1px solid var(--nav-line-color);
      transition: width 0.5s;

      &.menu-contract {
        width: var(--navContractSize);
        transition: width 0.5s;

        &.is-hovered {
          width: var(--navSize);
          transition: width 0.5s;
        }
      }

      .header-nav-body {
        display: flex;
        flex-direction: row;
        height: 100%;

        .header-nav-image {
          display: flex;
          flex-grow: 1;
          transition: width 0.5s;

          .logo-header-nav {
            display: flex;
            height: var(--headerSize);
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
            margin: auto;
          }
        }

        .header-nav-title {
          display: flex;
          align-items: center;
          margin: 5px 5px 0px 5px;
          font-size: 1.4rem;
          font-family: 'Playfair Display', serif;
          font-weight: 800;
          color: var(--secondary);
        }

        .header-nav-icon {
          display: inline-flex;
          align-items: center;
          margin: 0px 20px 0px 0px;
          color: var(--principal-text-color);

          &:hover {
            color: var(--menu-icon-color);
          }
        }
      }
    }

    .header-body {
      margin-top: 8px;
      height: calc(100% - 68px);
      display: flex;
      flex-direction: column;

      .menu-item {
        display: flex;
        align-items: center;
        padding: 10px;

        .icon-menu {
          color: var(--secondary);
          margin-left: 3px;

          &.is-menu-hovered {
            color: #fc2220;
          }
        }

        .link-menu {
          margin-left: 15px;

          a {
            color: #a0a0a5;
            font-size: 1.2rem;
            font-weight: 500;
            text-decoration: none;

            &.is-menu-hovered {
              color: #e1e1e3;
            }

            &.router-link-exact-active {
              color: #ffffff;
            }
          }
        }
      }
    }
  }

  .menu-scrollbar {
    --scrollbar-border-radius: 7px;
    --scrollbar-padding: 4px;
    --scrollbar-viewport-margin: 0;
    --scrollbar-track-color: transparent;
    --scrollbar-wrapper-color: transparent;
    --scrollbar-thumb-color: var(--primary-lighter);
    --scrollbar-thumb-hover-color: var(--primary-lighter);
    --scrollbar-size: 5px;
    --scrollbar-hover-size: 10px;
  }

  @media (max-width: 1199px) {
    nav {
      position: fixed;
      width: var(--navSize);
      left: calc(-1 * var(--navSize));
      height: 100%;
      transition: width 0.5s;

      &.menu-contract {
        width: var(--navSize);
        transition: width 0.5s;
      }

      .header-nav {
        top: 0px;
        width: var(--navSize);
        height: 60px;
        transition: width 0.5s;

        &.menu-contract {
          width: var(--navSize);
          transition: width 0.5s;
        }

        .logo-header-nav {
          display: block;
          height: var(--headerSize);
          padding: 8px;
          box-sizing: border-box;
          margin: auto;
        }

        .header-nav-icon {
          display: none !important;
        }
      }
    }
  }
</style>
