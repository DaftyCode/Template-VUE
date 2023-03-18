<template>
  <div class="card-container">
    <div class="card-header">
      <img v-if="article.urlToImage" :src="article.urlToImage" :alt="`article${index}`" />
      <img v-else alt="logo" src="@/assets/no-image.png" />
    </div>

    <div class="card-body" v-html="article.title"></div>

    <div class="card-footer">{{ article.source?.name }}</div>
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
    padding: 15px;
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
      margin-top: 10px;

      img {
        width: 100%;
        height: auto;
        border-radius: 10px 0px;
      }
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
