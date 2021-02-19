<template>
  <div id="app">
    <HelloWorld v-if="this.$route.name != 'error'" />

    <router-view />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "app",
  data: function() {
    return {};
  },
  components: { HelloWorld },
  created(){
    this.$store.commit("SetList");
     this.$store.commit("SetTasks");

      console.log(this.$store.state);
  }
};
</script>
