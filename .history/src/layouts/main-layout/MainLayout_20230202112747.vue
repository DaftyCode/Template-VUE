<template>
  <div class="container" :class="{ 'menu-open': isOpened }">
    <header>
      <HeaderComponent></HeaderComponent>
      <!-- <app-header (toggleMenu)="toggleMenu($event)" [isOpened]="isOpened" [menuItems]="headerMenuItems"></app-header> -->
      <!-- TODO: meter progress bar indeterminado -->
    </header>

    <!-- <app-sidenav [menuItems]="menuItems" [isOpened]="isOpened" class="sidenav-container"></app-sidenav> -->

    <SidenavComponent class="sidenav-container"></SidenavComponent>

    <main class="scroll-container grid-container">
      <div class="router-wrapper">
        <div v-if="!isOpened" class="menu-shadow" @click="toggleMenu()"></div>
        <div class="outlet-container">
          <RouterView />
        </div>
        <!-- <app-footer></app-footer> -->
      </div>
    </main>
  </div>
</template>

<script>
  import { RouterView } from 'vue-router';
  import { storeToRefs } from 'pinia';
  import { useSidenavStore } from '@/stores/sidenav';
  import HeaderComponent from '@/components/header-component/HeaderComponent.vue.vue';
  import SidenavComponent from '@/components/sidenav-component/SidenavComponent.vue';

  export default {
    name: 'main-layout',
    props: {},
    components: {
      HeaderComponent,
      RouterView,
      SidenavComponent,
    },

    setup() {
      const sidenavStore = useSidenavStore();
      const { isOpened } = storeToRefs(sidenavStore);

      const toggleMenu = () => {
        sidenavStore.toggleOpened();
      };
      return {
        isOpened,
        toggleMenu,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .container {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 60px 1fr;
    row-gap: 0px;
    grid-template-areas:
      'nav header header'
      'nav main aside'
      'footer footer footer';
    height: 100%;
    background: var(--admin-background);
  }

  header {
    grid-area: header;
  }

  .sidenav-container {
    height: 100vh;
  }

  main {
    grid-area: main;
    background-color: var(--admin-background);
    padding: 0px;
    overflow-y: auto;
  }

  .router-wrapper {
    grid-area: 1 / 1 / 13 / 13;
    display: flex;
    flex-direction: column;
  }

  .outlet-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
  }

  .menu-shadow {
    display: none;
  }

  @media (max-width: 1199px) {
    .container {
      transition: transform 0.2s;

      &.menu-open {
        transform: translateX(var(--navSize));
      }
    }

    .menu-shadow {
      display: block;
      position: absolute;
      height: 100%;
      width: 100%;
      background: black;
      z-index: 9;
      left: 0;
      top: 0;
      opacity: 0.6;
    }
  }
</style>
