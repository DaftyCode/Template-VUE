import { ref, computed } from 'vue';
import useLoadingComposable from './useLoadingComposable';
import { newsApi, API_LANG, API_PAGE_SIZE, API_KEY } from '@/api/news-api';

const articles = ref([]);
const searchword = ref('');
const fetchSearchNews = () => [];

const useNewsApiComposable = () => {
  const currentPage = ref(1);
  const totalResults = ref(0);
  const category = ref(null);
  const { isLoading, isLoadingTrue, isLoadingFalse } = useLoadingComposable();

  const pageCount = computed(() => Math.ceil(totalResults.value / API_PAGE_SIZE));

  fetchSearchNews.value = async (isNew = true) => {
    // https://newsapi.org/v2/everything?q=${this.searchword}&language=${this.language}&pageSize=${this.pagesize}&apiKey=${this.apiKey}&page=${this.currentPage}
    // https://newsapi.org/v2/top-headlines?language=${this.language}&pageSize=${this.pagesize}&apiKey=${this.apiKey}&page=${this.currentPage}
    if (isLoading.value) return;
    let url = '';
    let baseUrl = '';
    if (isNew) {
      currentPage.value = 1;
    }
    if (category.value) {
      baseUrl = `https://newsapi.org/v2/top-headlines?category=${category.value}&`;
    } else if (searchword.value && searchword.value !== '') {
      baseUrl = 'https://newsapi.org/v2/everything?';
    } else {
      baseUrl = 'https://newsapi.org/v2/top-headlines?';
    }

    if (searchword.value && searchword.value !== '') {
      url = `${baseUrl}q=${searchword.value}&language=${API_LANG}&pageSize=${API_PAGE_SIZE}&apiKey=${API_KEY}&page=${currentPage.value}`;
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
      totalResults.value = resp?.data.totalResults;
      resp.data?.articles.forEach((element) => {
        articles.value.push(element);
      });
      isLoadingFalse();
    } catch (error) {
      console.error(error);
      isLoadingFalse();
    }
    console.log(articles.value);
  };

  const fetchTopNews = () => {
    searchword.value = '';
    articles.value = [];
    fetchSearchNews(true);
  };

  return {
    currentPage,
    articles,
    pageCount,
    fetchSearchNews,
    fetchTopNews,
    searchword,
  };
};

export default useNewsApiComposable;
