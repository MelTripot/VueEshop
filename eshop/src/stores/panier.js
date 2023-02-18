import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { computed } from "vue";
export const usePanierStore = defineStore("panier", () => {
  const artictelst = ref([]);
  function add(article) {
    const i = artictelst.value.findIndex((x) => x.id == article.id);
    if (i != -1) {
      artictelst.value[i].quantity += 1;
      artictelst.value[i].qtePrice =
        artictelst.value[i].quantity * artictelst.value[i].price;
    } else {
      article.quantity = 1;
      artictelst.value.push(article);
    }
    calculCount();
  }
  const count = ref(0);
  function calculCount() {
    let tot = 0;
    artictelst.value.forEach((x) => {
      tot += x.quantity;
    });
    console.log(tot);
    count.value = tot;
  }
  function changeQuantity(id, qte) {
    //en vrai bloquer la descente pour pas descendre en dessous de 1 et forcer l'utilisation du bouton suppr
    if (qte != 0) {
      const i = artictelst.value.findIndex((x) => x.id == id);
      artictelst.value[i].quantity = qte;
      artictelst.value[i].qtePrice =
        artictelst.value[i].quantity * artictelst.value[i].price;
    }
    calculCount();
  }
  function removeItem(id) {
    const i = artictelst.value.findIndex((x) => x.id == id);
    artictelst = artictelst.value.splice(i, 1);
    // delete artictelst.value[i];
    calculCount();
  }

  const prixTot = computed(() => calculPrixtot());
  function calculPrixtot() {
    let tot = 0;
    artictelst.value.forEach((x) => {
      tot += x.quantity * x.price;
    });
    return tot;
  }
  function $reset() {
    artictelst.value = [];
    calculCount();
  }

  return {
    count,
    artictelst,
    prixTot,
    add,
    removeItem,
    changeQuantity,
    $reset,
  };
});
