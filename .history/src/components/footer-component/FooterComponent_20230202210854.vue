<template>
  <footer>
    <div class="copyrigth">© 2023 Curso Vue</div>

    <div class="footer-menus">Soporte Contacto</div>
  </footer>
</template>

<script>
  export default {
    name: 'footer-component',
  };
</script>

<style lang="scss" scoped>
  footer {
    grid-area: footer;
    display: flex;
    flex-direction: row;
    background-color: antiquewhite;

    .copyrigth {
      display: flex;
      flex-grow: 1;
    }

    .footer-menus {
      display: inline-flex;
    }
  }
</style>
