<template>
  <p v-custom-directive>
    This is a test component to be loaded lazily with import('...')
  </p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class LazyLoad extends Vue {}
</script>
