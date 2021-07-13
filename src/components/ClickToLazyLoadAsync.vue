<template>
  <div>
    <button @click="load">Lazy Load</button>
    <LazyLoad v-if="show" />
  </div>
</template>

<script>
const LazyLoad = async () => import('@/LazyLoad.vue');

export default {
  data() {
    return {
      show: false,
    };
  },
  components: {
    LazyLoad,
  },
  methods: {
    load() {
      this.show = true;
    },
  },
};
</script>
