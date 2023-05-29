<template>
  <div class="header">

    <button class="btn btn-outline-warning" v-if="user" @click="logout">
      ろぐあうと
    </button>
  </div>
</template>

<script>
import { auth } from "../firebase";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "MainHeader",
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);
    const logout = async () => {
      try {
        auth.signOut().then(() => {
          store.commit("setUser", null);
          alert("ログアウトしました");
        });
      } catch (error) {
        console.log(error);
      }
    };

    return {
      logout,
      user,
    };
  },
};
</script>
