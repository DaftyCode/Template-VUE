<template>
  <div class="container" :class="{ 'menu-open': isOpened }">
    <header>
      <HeaderComponent></HeaderComponent>
      <ProgressBar v-if="isLoading" mode="indeterminate" style="height: 0.3em" />
    </header>

    <SidenavComponent class="sidenav-container"></SidenavComponent>

    <main>
      <div class="router-wrapper">
        <div v-if="isOpened" class="menu-shadow" @click="toggleMenu()"></div>
        <div class="outlet-container">
          <RouterView />
        </div>
        <footer>
          <FooterComponent></FooterComponent>
        </footer>
      </div>
    </main>
  </div>
</template>

<script>
  import { RouterView } from 'vue-router';
  import useSidenavComposable from '@/composables/useSidenavComposable';
  import useLoadingComposable from '@/composables/useLoadingComposable';
  import HeaderComponent from '@/components/header-component/HeaderComponent.vue';
  import SidenavComponent from '@/components/sidenav-component/SidenavComponent.vue';
  import FooterComponent from '@/components/footer-component/FooterComponent.vue';
  import ProgressBar from 'primevue/progressbar';

  export default {
    name: 'main-layout',
    props: {},
    components: {
      HeaderComponent,
      RouterView,
      SidenavComponent,
      ProgressBar,
      FooterComponent,
    },

    setup() {
      const { isOpened, toggleMenu } = useSidenavComposable();
      const { isLoading } = useLoadingComposable();

      return {
        isOpened,
        toggleMenu,
        isLoading,
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
    display: flex;
    flex-direction: column;
    height: 100%;
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
