<template>
  <nav :class="{ 'menu-contract': isOpened, 'is-hovered': isHover }">
    <div class="header-nav" :class="{ 'menu-contract': isOpened, 'is-hovered': isHover }">
      <div class="header-nav-body">
        <div class="header-nav-image">
          <img class="logo-header-nav" alt="logo" src="../../assets/logo.png" />
        </div>
        <div class="header-nav-icon" @click="toggleMenu()">
          <i class="pi pi-chevron-left" style="font-size: 1.5rem" v-if="!isOpened"></i>
          <i class="pi pi-chevron-right" style="font-size: 1.5rem" v-if="isOpened"></i>
        </div>
      </div>
      <div class="header-container"></div>
    </div>
    <div class="header-body" @mouseenter="isHover = true" @mouseleave="isHover = false">
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
  import useSidenavComposable from '@/composables/useSidenavComposable';
  import { SIDE_MENU_ITEMS } from './constants/sideMenuItems';
  export default {
    name: 'sidenav-component',
    props: {},
    components: { RouterLink },

    setup() {
      const { isOpened, toggleMenu } = useSidenavComposable();
      const isHover = ref(false);
      const isMenuHover = ref(false);
      const itemId = ref(0);
      const items = ref(SIDE_MENU_ITEMS);
      const route = useRoute();
      const activeRoute = ref('home');

      const setHover = (id) => {
        itemId.value = id;
        isMenuHover.value = true;
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
        activeRoute,
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
