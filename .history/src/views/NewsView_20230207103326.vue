<template>
  <div class="list-container">
    <CardComponent
      v-for="(article, index) in newsApiComposable.articles"
      :key="index"
      @click="navTo(article.url)"
      :article="article"
      :index="index"
    ></CardComponent>
  </div>
  <div id="scroll-trigger"></div>
</template>

<script>
  import { onMounted, onUnmounted } from 'vue';
  import useNewsApiComposable from '@/composables/useNewsApiComposable';
  import CardComponent from '@/components/card-component/CardComponent.vue';
  let observer = null;

  export default {
    name: 'news-view',
    components: { CardComponent },

    setup() {
      const newsApiComposable = useNewsApiComposable();
      const scrollTrigger = () => {
        observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (
              entry.intersectionRatio > 0 &&
              newsApiComposable.currentPage.value < newsApiComposable.pageCount.value
            ) {
              newsApiComposable.currentPage.value += 1;
              newsApiComposable.fetchSearchNews(false);
            }
          });
        });
        observer.observe(document.querySelector('#scroll-trigger'));
      };

      const navTo = (url) => {
        window.open(url);
      };

      onMounted(() => {
        newsApiComposable.fetchTopNews();
        scrollTrigger();
      });
      onUnmounted(() => {
        observer.disconnect();
      });

      console.log(newsApiComposable.articles);

      return {
        newsApiComposable,
        navTo,
      };
    },
  };
</script>

<style lang="scss" scoped>
  #scroll-trigger {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    font-size: 1.6rem;
  }
</style>
