<template>
  <div class="card-container">
    <div class="card-header">
      <img v-if="article.urlToImage" :src="article.urlToImage" :alt="`article${index}`" />
      <img v-else alt="logo" src="@/assets/no-image.png" />
    </div>

    <div class="card-body" v-html="article.title"></div>

    <div class="card-footer"><i class="pi pi-globe" style="font-size: 1rem"></i>{{ article.source?.name }}</div>
  </div>
</template>

<script>
  export default {
    name: 'card-component',
    props: {
      article: {
        type: Object,
      },
      index: {
        type: Number,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .card-container {
    display: flex;
    flex-direction: column;
    box-shadow: var(--box-shadow);
    background-color: white;
    height: 100%;
    justify-content: space-between;
    border-radius: 10px;

    .card-header {
      display: flex;
      flex-direction: row;
      color: var(--black-text-color);
      font-size: 1.2rem;
      font-weight: 600;
      justify-content: center;
      margin-bottom: 10px;
      cursor: pointer;

      img {
        width: 100%;
        height: auto;
        border-radius: 10px 10px 0px 0px;
      }
    }

    .card-body {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 10px;
      font-size: 1.2rem;
    }

    .card-footer {
      display: flex;
      flex-direction: row;
      color: var(--black-text-color);
      font-size: 1rem;
      font-weight: 600;
      justify-content: center;
      margin-top: 10px;
      align-items: center;
      padding: 10px 5px 10px 5px;
      cursor: pointer;
      border-top: 1px solid #c3c7cb;

      i {
        margin-right: 10px;
      }
    }
  }
</style>
