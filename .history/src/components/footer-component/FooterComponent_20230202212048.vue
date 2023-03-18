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
    display: flex;
    flex-direction: row;
    background-color: #f8f9fa;
    padding: 10px;
    border-top: 1px solid #c9c9c9;

    .copyrigth {
      display: flex;
      flex-grow: 1;
    }

    .footer-menus {
      display: inline-flex;
    }
  }
</style>
