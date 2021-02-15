<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>id :  {{$route.params.id}}</h2>
    <Card :more="false"  :msg = 'Array(this.$store.state.count)[0][$route.params.id].name' />
 
  </div>
  
</template>


<script>
  import Card from "../components/Card";

export default {
    components : {
      Card
       
    },
    methods: {
       is_view : ()=>{
    
     if(this.$route.name != "About") return true;
      return false;
    }
    }
   
}
</script>