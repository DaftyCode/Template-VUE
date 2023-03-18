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
        <InputText
          placeholder="Buscar noticias..."
          type="text"
          v-model="searchInputText"
          @keyup.enter="searchByWord()"
        />
        <div class="search-icons">
          <i v-if="!isLoading" class="pi pi-search" style="font-size: 1.2rem" @click="searchByWord()"></i>
          <i v-else class="pi pi-spin pi-spinner" style="font-size: 1.2rem"></i>
          <i class="pi pi-times" style="font-size: 1.2rem" @click="newSearch()"></i>
        </div>
      </template>
    </Menubar>
  </div>
</template>

<script>
  import { ref, watchEffect } from 'vue';
  import useSidenavComposable from '@/composables/useSidenavComposable';
  import useNewsApiComposable from '@/composables/useNewsApiComposable';
  import useLoadingComposable from '@/composables/useLoadingComposable';
  import Menubar from 'primevue/menubar';
  import InputText from 'primevue/inputtext';
  import { MENU_ITEMS } from './constants/menuItems';
  import { useRoute, useRouter } from 'vue-router';
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
      const { isOpened, toggleMenu } = useSidenavComposable();
      const { searchword, fetchSearchNews, fetchTopNews } = useNewsApiComposable();
      const { isLoading } = useLoadingComposable();
      const route = useRoute();
      const router = useRouter();

      const items = ref(MENU_ITEMS);
      const searchInputText = ref('');

      const searchByWord = () => {
        searchword.value = searchInputText.value;
        fetchSearchNews(true);
        if (route.name !== 'news') {
          router.push({ name: 'news' });
        }
      };

      const newSearch = () => {
        searchInputText.value = '';
        searchword.value = '';
        if (route.name !== 'news') {
          router.push({ name: 'news' });
        } else {
          fetchTopNews();
        }
      };

      watchEffect(() => route.name);

      return {
        toggleMenu,
        items,
        isOpened,
        searchInputText,
        searchByWord,
        newSearch,
        isLoading,
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

  .search-icons {
    margin-left: 10px;
    i {
      padding: 5px;
      cursor: pointer;
    }
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

  /* .menu-icon {
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
  } */
</style>
