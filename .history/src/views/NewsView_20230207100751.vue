<template>
  <div class="list-container">
    <CardComponent
      v-for="(article, index) in state.articles"
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
      const { currentPage, pageCount, fetchSearchNews, fetchTopNews, state } = useNewsApiComposable();
      const scrollTrigger = () => {
        observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio > 0 && currentPage.value < pageCount.value) {
              currentPage.value += 1;
              fetchSearchNews(false);
            }
          });
        });
        observer.observe(document.querySelector('#scroll-trigger'));
      };

      const navTo = (url) => {
        window.open(url);
      };

      onMounted(() => {
        fetchTopNews();
        scrollTrigger();
      });
      onUnmounted(() => {
        observer.disconnect();
      });

      console.log(state.articles);

      return {
        state,
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
