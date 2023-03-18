<template>
  <div class="list-container">
    <CardComponent></CardComponent>
    <CardComponent></CardComponent>
    <CardComponent></CardComponent>
    <CardComponent></CardComponent>
    <CardComponent></CardComponent>
    <CardComponent></CardComponent>
  </div>
</template>

<script>
  import CardComponent from '@/components/card-component/CardComponent.vue';

  export default {
    name: 'news-view',
    components: { CardComponent },
  };
</script>

<style lang="scss" scoped></style>
