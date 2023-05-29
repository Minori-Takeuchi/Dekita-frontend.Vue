<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p>{{ user?.displayName }}</p>
    <BSDropdown/>
  </div>
</template>

<script>

import HelloWorld from "@/components/HelloWorld.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import BSDropdown from '@/components/BSDropdown.vue';

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    BSDropdown,
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user?.user);

    return {
      user,
    };
  },
};
</script>
