<template>

  <div class="create ">
    <h1>This is a create page </h1>
     
  <div class="row" >
    <form class="col s6">
      
    
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="text"  v-model="todo.name.title" class="validate" required>
          <label for="password">Title</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <textarea id="textarea1"  v-model="todo.name.body" class="materialize-textarea" required></textarea>
          <label for="textarea1">Body
          </label>
        </div>
      </div>

         <div class="row">
        <div class="input-field col s12">
        <input type="text" class="datepicker"  id="dpiker"  ref="datapiker" required>
          <label for="dpiker">Select date</label>
        </div>
      </div>
                <p>
      <label>
        <input type="checkbox" class="filled-in" v-model="todo.name.strong" />
        <span>Срочно</span>
      </label>
    </p>
    <a class="btn-floating btn-large waves-effect waves-light green" type="submit" v-on:click="end()"><i class="material-icons">add</i></a>


    </form>
        <!-- <Card  msg="123"  /> -->

  </div>
  </div>

    
</template>
    
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script>
//import Card from "../components/Card"

export default 
{
    name : 'create',
    data : ()=>{
      return {
        status : true,
        todo : {
          "name" : {

         
          title : "",
          body : "",
          date : "",
          strong : false,
          create_time : "",
          collection_id : ""
             }
        }
      }
    },
    components:{
     // Card
    },
  
    methods:{
      end : function(){
     
     console.log( (this.$store.state.count));
        if(this.todo.name.title && this.todo.name.body && this.$refs.datapiker.value )
        {
          this.todo.name.date = this.$refs.datapiker.value;
          this.todo.name.create_time = Date.now();
           let e  = this.$store.state.count;
           if(this.$store.state.count != null)
           {
            // console.log("fail");
              if((this.$store.state.count).length < 2  || ((this.$store.state.count).length == undefined ) )

              {
                console.log("success");
                  var b = Array(this.$store.state.count);
              }
              else {
                      var b = (this.$store.state.count);
              }
            

              b.push(this.todo);
               this.$store.commit( "increment",b);
               location.reload();
           }
           else{
             this.$store.commit( "increment",this.todo);
              location.reload();
           }
        }
      }
    },
    mounted()
    {
      
      M.Datepicker.init(this.$refs.datapiker);
    }
}
</script>
