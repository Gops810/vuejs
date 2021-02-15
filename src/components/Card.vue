<template>
  <div class="hello">
  <div class="row "  v-if="more">
    <div class="col s12 " >
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title h1 "><h3>{{msg.title}}</h3></span>
          <h5>{{msg.body}}</h5>
        </div>
        <div class="card-action">
          <a href="#">{{msg.date}}</a>
         
          <div class="option" style="padding:5px; display: inline-table;" >
           
             <router-link  :to="{ name: 'About', params: { id: index }}"> <a class="waves-effect waves-light btn">View</a></router-link>
          <!-- <a class="waves-effect waves-light btn" 
         v-on:click="delete_item(index)" 
           >Del</a> -->
         
          </div>
        </div>
      </div>
    </div>

   
  </div>
   <div v-else class="row">
       <h1>else</h1>

          <div class="col s12 " >
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">

           <input placeholder="Placeholder" id="first_name" type="text" class="validate"  v-model="msg.title">
          
         
               
           <!-- <textarea id="textarea1" class="materialize-textarea" value="{{msg.body}}"></textarea>
          <label for="textarea1">Textarea</label> -->
        </div>
        <div class="card-action">
          <a href="#">{{msg.date}}</a>
         
          <div class="option" style="padding:5px; display: inline-table;" >
           
            <a class="waves-effect waves-light btn">Change</a>
          <!-- <a class="waves-effect waves-light btn" 
         v-on:click="delete_item(index)" 
           >Del</a> -->
         
          </div>
        </div>
      </div>
    </div>

    </div>
  </div>
</template>

<style >
  *{
    text-align: center;
  }
</style>

<script>
export default {
  name: 'Card',
  props: {
    msg: Object,
    index : Number,
    more : Boolean
  },
  methods:{
   
  }
}
</script>