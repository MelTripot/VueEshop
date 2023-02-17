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
    console.log(artictelst.value);
  }
  const count = computed(() => articlelst.value.length);
  function changeQuantity(id, qte) {
    const i = artictelst.value.findIndex((x) => x.id == id);
    artictelst.value[i].quantity = qte;
    console.log(artictelst.value[i].quantity);
    if (artictelst.value[i].quantity < 1) {
      console.log("ici" + artictelst.value[i].quantity);
      delete (artictelst, i); // TODO voir le delete si on le replace pas par un set
    }
  }
  function remove(id) {
    //TODO remove
  }
  function $reset() {
    artictelst = [];
  }

  return { count, artictelst, add, changeQuantity };
});
