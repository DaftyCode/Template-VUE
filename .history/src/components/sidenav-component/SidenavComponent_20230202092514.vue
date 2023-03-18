<template>
  <nav class="scroll-container" :class="{ 'menu-contract': isOpened }">
    <div class="header-nav" :class="{ 'menu-contract': isOpened }">
      <div class="header-nav-body">
        <div class="header-nav-image cursor-pointer">
          <img class="logo-header-nav" alt="logo" src="../../assets/logo.png" />
        </div>
        <div class="header-nav-icon">
          <!-- <mat-icon
            *ngIf="(menuOpen && isMenuContract) || (!menuOpen && isMenuContract)"
            [svgIcon]="'chevronRight'"
            aria-hidden="false"
            aria-label="menuItem.menuName"
            class="menu-icon"
            (click)="menuContract()"
          ></mat-icon>
          <mat-icon
            *ngIf="(menuOpen && !isMenuContract) || (!menuOpen && !isMenuContract)"
            [svgIcon]="'chevronLeft'"
            aria-hidden="false"
            aria-label="menuItem.menuName"
            class="menu-icon"
            (click)="menuContract()"
          ></mat-icon> -->
        </div>
      </div>
      <div class="header-container tripple-line"></div>
    </div>
    <div class="header-body">
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'about' }">About</RouterLink>
    </div>
  </nav>
</template>

<script>
  import { RouterLink } from 'vue-router';
  import { storeToRefs } from 'pinia';
  import { useSidenavStore } from '@/stores/sidenav';
  export default {
    name: 'sidenav-component',
    props: {},
    components: { RouterLink },

    setup() {
      const sidenavStore = useSidenavStore();
      const { isOpened } = storeToRefs(sidenavStore);

      return {
        isOpened,
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
          margin: 0px 10px;
          color: var(--principal-text-color);

          &:hover {
            color: var(--menu-icon-color);
          }
        }
      }
    }

    .header-body {
      margin-top: 8px;
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
