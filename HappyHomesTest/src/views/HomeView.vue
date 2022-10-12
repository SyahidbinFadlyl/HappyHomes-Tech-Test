<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import Card from "../components/Card.vue";
export default {
  components: {
    Card,
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchData"]),
  },
  computed: {
    ...mapState(useCounterStore, ["products"]),
  },
  created() {
    this.fetchData();
  },
};
</script>

<template>
  <div v-if="products.length !== 0" class="containerList">
    <Card v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>
