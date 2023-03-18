import axios from 'axios';

// https://newsapi.org/v2/everything?q=${this.searchword}&language=${this.language}&pageSize=${this.pagesize}&apiKey=${this.apiKey}&page=${this.currentPage}
// https://newsapi.org/v2/top-headlines?language=${this.language}&pageSize=${this.pagesize}&apiKey=${this.apiKey}&page=${this.currentPage}

export const API_KEY = '86a0143353cd4c36a4e4dd7557551002';
export const API_LANG = 'es';
export const API_PAGE_SIZE = 20;

export const newsApi = axios.create({
  baseURL: 'https://newsapi.org/v2',
});
