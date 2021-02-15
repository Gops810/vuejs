<template>
    <div style="margin-top: -60px;">
      <ul id="dropdown1" class="dropdown-content">
 

   <router-link  :to="{ name: 'Create'}">  <li   style="display:block; width:126px;margin-left: -20px;"><a  >Задачу</a></li></router-link>
    <li class="divider"></li>
  
   <router-link  :to="{ name: 'Create'}">  <li   style="display:block; width:126px;margin-left: -20px;"><a  >Коллекцию</a></li></router-link>
  <li class="divider"></li>

</ul>


 <ul id="dropdown2" class="dropdown-content">
 

   <router-link  :to="{ name: 'Create'}">  <li   style="display:block; width:126px;margin-left: -20px;"><a  >Задачу</a></li></router-link>
    <li class="divider"></li>
  
   <router-link  :to="{ name: 'Create'}">  <li   style="display:block; width:126px;margin-left: -20px;"><a  >Коллекцию</a></li></router-link>
  <li class="divider"></li>

</ul>
    <nav>
   
    <div class="nav-wrapper" >
         <router-link  :to="{ name: 'Home'}"> <a  class="brand-logo">Home</a></router-link>
      <!-- <a href="#!" class="brand-logo">Logo</a> -->
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li>  <a  href="/">To-do list</a> </li>
        <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Create :<i class="material-icons right">arrow_drop_down</i></a></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li>  <a  href="/">To-do list</a> </li>
     <li><a class="dropdown-trigger1" href="#!" data-target="dropdown2">Create :<i class="material-icons right">arrow_drop_down</i></a></li>  
  </ul>
    </div>
</template>



<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script>
export default {
  mounted: ()=>{

    $( document ).ready(function(){
          $(".dropdown-trigger").dropdown();
          $(".dropdown-trigger1").dropdown();
        
    } );
  
  }
}
</script>