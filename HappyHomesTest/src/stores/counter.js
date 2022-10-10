import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    products: []
  }),
  actions: {
    async fetchData() {
      try {
        const { data } = await axios({
          url: "https://dummyjson.com/products",
          method: "GET"
        });
        console.log(data.products);
        this.products = data.products;
      } catch (error) {
        console.log(error);
      }
    }
  }
});
