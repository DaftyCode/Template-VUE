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
        <div class="menu-icon" @click="toggleMenu()">
          <div class="line first"></div>
          <div class="line middle"></div>
          <div class="line last"></div>
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
  import Menubar from 'primevue/menubar';
  import InputText from 'primevue/inputtext';
  import { useSidenavStore } from '@/stores/sidenav';

  export default {
    name: 'header-component',
    props: {},
    components: {
      Menubar,
      InputText,
    },

    setup() {
      const store = useSidenavStore();

      const toggleMenu = () => {
        store.toggleOpened();
      };

      const items = ref([
        {
          label: 'File',
          icon: 'pi pi-fw pi-file',
          items: [
            {
              label: 'New',
              icon: 'pi pi-fw pi-plus',
              items: [
                {
                  label: 'Bookmark',
                  icon: 'pi pi-fw pi-bookmark',
                },
                {
                  label: 'Video',
                  icon: 'pi pi-fw pi-video',
                },
              ],
            },
            {
              label: 'Delete',
              icon: 'pi pi-fw pi-trash',
            },
            {
              separator: true,
            },
            {
              label: 'Export',
              icon: 'pi pi-fw pi-external-link',
            },
          ],
        },
        {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
            {
              label: 'Left',
              icon: 'pi pi-fw pi-align-left',
            },
            {
              label: 'Right',
              icon: 'pi pi-fw pi-align-right',
            },
            {
              label: 'Center',
              icon: 'pi pi-fw pi-align-center',
            },
            {
              label: 'Justify',
              icon: 'pi pi-fw pi-align-justify',
            },
          ],
        },
        {
          label: 'Users',
          icon: 'pi pi-fw pi-user',
          items: [
            {
              label: 'New',
              icon: 'pi pi-fw pi-user-plus',
            },
            {
              label: 'Delete',
              icon: 'pi pi-fw pi-user-minus',
            },
            {
              label: 'Search',
              icon: 'pi pi-fw pi-users',
              items: [
                {
                  label: 'Filter',
                  icon: 'pi pi-fw pi-filter',
                  items: [
                    {
                      label: 'Print',
                      icon: 'pi pi-fw pi-print',
                    },
                  ],
                },
                {
                  icon: 'pi pi-fw pi-bars',
                  label: 'List',
                },
              ],
            },
          ],
        },
        {
          label: 'Events',
          icon: 'pi pi-fw pi-calendar',
          items: [
            {
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              items: [
                {
                  label: 'Save',
                  icon: 'pi pi-fw pi-calendar-plus',
                },
                {
                  label: 'Delete',
                  icon: 'pi pi-fw pi-calendar-minus',
                },
              ],
            },
            {
              label: 'Archieve',
              icon: 'pi pi-fw pi-calendar-times',
              items: [
                {
                  label: 'Remove',
                  icon: 'pi pi-fw pi-calendar-minus',
                },
              ],
            },
          ],
        },
        {
          label: 'Quit',
          icon: 'pi pi-fw pi-power-off',
        },
      ]);

      return {
        toggleMenu,
        items,
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

  .p-menubar-start {
    display: inline-flex;
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
