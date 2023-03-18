<template>
  <div class="card-container">
    <div class="card-header">
      <img v-if="article.urlToImage" :src="article.urlToImage" :alt="`article${index}`" />
    </div>

    <div class="card-body" v-html="article.title"></div>

    <div class="card-footer">{{ article.source?.name }} - {{ article.publishedAt }}</div>
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

      img {
        width: 100%;
        height: auto;
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
