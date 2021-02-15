<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
 
  <div class="card-container"  v-if="this.$store.state.count && (this.$store.state.count).length >= 1  ">
              <h1 class="center">Todo List</h1>
  <select class="browser-default" style="font-size:17px;">
    <option value="" disabled selected>Choose your sort</option>
    <option value="1">Length</option>
    <option value="2">Priority</option>
    <option value="3">Date</option>
  </select>
      <div  class="card-panel" v-for="(item,index) in  Array(this.$store.state.count)[0]"  :key="item.props">
        <!-- <h1>{{item}} //{{index}} </h1>  -->
      
           <Card :msg = 'item.name' :more="true"  :index='index' />
      </div>

    </div>
 <div v-else-if="this.$store.state.count">
     <Card :msg = 'this.$store.state.count.name' />
 </div>

  </div>
</template>


<style>
  div.card-container {
    max-width: 80%;
    margin:auto;
    border: 1px dashed red;
    padding: 10px !important;
    background:	rgb(192,192,192);
  /* -webkit-column-width: 50rem;
  -webkit-column-gap: 1rem; */
  padding: 0;
}

.card-panel {
  display: inline-block;
  padding: 0;
  width: 100%;
}
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script>
// @ is an alias to /src

  import Card from "../components/Card"

export default {

    name : 'home',
  data : function(){
    return {
      test : 0
    }
  
  },
  methods : {

    
  },
 
    components : {
        Card
    }
}
</script>
