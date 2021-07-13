<template>
  <div>
    <button v-custom-directive @click="load">Lazy Load</button>
    <LazyLoad v-if="show" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      lazyLoad: null,
    };
  },
  components: {
    LazyLoad: async () => import('@/LazyLoad.vue'),
  },
  methods: {
    load() {
      this.show = true;
    },
  },
};
</script>
