<template>
  <div class="card-container">
    <div class="card-header"></div>

    <div class="card-body"></div>

    <div class="card-footer"></div>
  </div>
</template>

<script>
  export default {
    name: 'card-component',
  };
</script>

<style lang="scss" scoped>
  .card-container {
    display: flex;
    flex-direction: column;
    box-shadow: var(--box-elevation);
    background-color: white;
    padding: 15px;
    height: 100%;
    justify-content: space-between;

    .card-header {
      display: flex;
      flex-direction: row;
      color: var(--black-text-color);
      font-size: 1.2rem;
      font-weight: 600;
      justify-content: center;
      margin-bottom: 10px;
      margin-top: 10px;
    }

    .card-body {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .card-footer {
      display: flex;
      flex-direction: row;
      color: var(--black-text-color);
      font-size: 1.2rem;
      font-weight: 600;
      justify-content: center;
      margin-top: 10px;
    }
  }
</style>
