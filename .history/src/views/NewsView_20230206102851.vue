<template>
  <div class="list-container">
    <CardComponent></CardComponent>
    <CardComponent></CardComponent>
    <CardComponent></CardComponent>
    <CardComponent></CardComponent>
    <CardComponent></CardComponent>
    <CardComponent></CardComponent>
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
      const { currentPage, articles, pageCount, fetchSearchNews, fetchTopNews } = useNewsApiComposable();
      const scrollTrigger = () => {
        observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio > 0 && this.currentPage < this.pageCount) {
              currentPage.value += 1;
              fetchSearchNews(false);
            }
          });
        });
        observer.observe(document.querySelector('#scroll-trigger'));
      };

      onMounted(() => {
        fetchTopNews();
        scrollTrigger();
      });
      onUnmounted(() => {
        observer.disconnect();
      });

      return {
        articles,
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
