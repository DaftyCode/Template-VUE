<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo-head.png" width="125" height="125" />

    <div class="menu-icon" @click="toggleMenu()">
      <div class="line first"></div>
      <div class="line middle"></div>
      <div class="line last"></div>
    </div>

    <div class="wrapper">
      <NavbarComponent></NavbarComponent>
    </div>
  </header> -->
  <div>
    <Menubar :model="items">
      <template #start>
        <div class="menu-icon" v-if="!isOpened" @click="toggleMenu()">
          <i class="pi pi-bars" style="font-size: 2rem"></i>
        </div>
        <img alt="logo" src="@/assets/logo-head.png" height="40" class="mr-2" />
      </template>
      <template #end>
        <InputText placeholder="Search" type="text" />
      </template>
    </Menubar>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import { storeToRefs } from 'pinia';
  import Menubar from 'primevue/menubar';
  import InputText from 'primevue/inputtext';
  import { useSidenavStore } from '@/stores/sidenav';
  /* import NavbarComponent from '../navbar-component/NavbarComponent.vue'; */

  export default {
    name: 'header-component',
    props: {},
    components: {
      Menubar,
      InputText,
      /* NavbarComponent, */
    },

    setup() {
      const sidenavStore = useSidenavStore();
      const { isOpened } = storeToRefs(sidenavStore);

      const toggleMenu = () => {
        sidenavStore.toggleOpened();
      };

      const items = ref();

      return {
        toggleMenu,
        items,
        isOpened,
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
    display: none;
  }

  @media (max-width: 1199px) {
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
      margin-top: 8px;
      margin-right: 10px;

      &:hover {
        color: red;
      }
    }
  }
</style>
