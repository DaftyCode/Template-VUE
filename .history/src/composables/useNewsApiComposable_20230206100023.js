import { ref, computed } from 'vue';
import useLoadingComposable from './useLoadingComposable';
import { newsApi, API_LANG, API_PAGE_SIZE, API_KEY } from '@/api/news-api'

const useNewsApiComposable = () => {
  const currentPage = ref(1);
  const articles = ref([]);
  const totalResults = ref(0);
  const category = ref(null);
  const { isLoading, isLoadingTrue, isLoadingFalse } = useLoadingComposable();

  const pageCount = computed(() => Math.ceil(totalResults.value / API_PAGE_SIZE));

  const fetchSearchNews = async (event) => {
    // https://newsapi.org/v2/everything?q=${this.searchword}&language=${this.language}&pageSize=${this.pagesize}&apiKey=${this.apiKey}&page=${this.currentPage}
    // https://newsapi.org/v2/top-headlines?language=${this.language}&pageSize=${this.pagesize}&apiKey=${this.apiKey}&page=${this.currentPage}
    console.log(isLoading.value);
    if (isLoading.value) return;
    let url = '';
    let baseUrl = '';
    if (event?.isNew) {
      currentPage.value = 1;
    }
    if (category.value) {
      baseUrl = `https://newsapi.org/v2/top-headlines?category=${category.value}&`;
    } else if (event?.data && event?.data !== '') {
      baseUrl = 'https://newsapi.org/v2/everything?';
    } else {
      baseUrl = 'https://newsapi.org/v2/top-headlines?';
    }

    if (event?.data && event?.data !== '') {
      console.log(event?.data);
      url = `${baseUrl}q=${event?.data}&language=${API_LANG}&pageSize=${API_PAGE_SIZE}&apiKey=${API_KEY}&page=${currentPage.value}`;
      isLoadingTrue();
    } else {
      url = `${baseUrl}language=${API_LANG}&pageSize=${API_PAGE_SIZE}&apiKey=${API_KEY}&page=${currentPage.value}`;
      isLoadingTrue();
    }
    if (currentPage.value === 1) {
      articles.value = [];
    }
    try {
      const resp = await newsApi.get(url);
      console.log(resp.data.articles);
      totalResults.value = resp?.data.totalResults;
      resp.data?.articles.forEach((element) => {
        articles.value.push(element);
      });
      isLoadingFalse();
    } catch (error) {
      console.error(error);
      isLoadingFalse();
    }
  };

  const fetchTopNews = () => {
    articles.value = [];
    fetchSearchNews(true);
    console.log('LLAMO A FECTHTOPNEWS');
  };

  return {
    currentPage,
    articles,
    pageCount,
    fetchSearchNews,
    fetchTopNews,
  };
};

export default useNewsApiComposable;
