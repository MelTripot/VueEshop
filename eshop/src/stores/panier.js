import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { computed } from "vue";
export const usePanierStore = defineStore("panier", () => {
  const artictelst = ref([]);
  function add(article) {
    const i = artictelst.value.findIndex((x) => x.id == article.id);
    if (i != -1) {
      artictelst.value[i].quantity += 1;
    } else {
      article.quantity = 1;
      artictelst.value.push(article);
    }
  }
  const count = computed(() => articlelst.value.length);
  function changeQuantity(id, qte) {}
  function remove(id) {
    //TODO remove
  }
  function $reset() {
    artictelst = [];
  }

  return { count, artictelst, add, changeQuantity };
});
