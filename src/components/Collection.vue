<template>
  <div>
    <div class="drop w-75 mx-auto" v-on:click="def(id)">
      {{ list.name }}<i class="fas fa-arrow-down"></i>
    </div>

    <div class="drop-content w-75 mx-auto cloose" v-if="tasks != null">
      <ul class="list-group">
        <div v-for="(task, index) in tasks" :key="index">
          
          <li class="list-group-item" v-if="task.l_id == list.l_id && ((new Date(task.date) - new Date()) > 0)">
             <button type="button" class="btn btn-primary">
  Активно до: <span class="badge badge-light">{{task.date}}</span>
</button><br>
            <input
              type="checkbox"
              v-model="task.complete"
              v-on:click="cng(index)"
            />
           
            <span
              class="ml-1" style="font-size:20px;"
              v-bind:class="{
                'text-throw': task.complete,
                'text-muted': task.complete,
                
                  'strong' : task.is_quickly
              }"
              >{{ task.name }}</span
            >
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<style>
.drop {
  cursor: pointer;
  border: 2px dashed rgb(240, 11, 11);
  padding: 3px;
  background-color: white;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
}
.drop-content li {
  list-style: none;

  background-color: azure;
}
.drop-content {
  transition: top 1s ease-out 0.5s;
}
.cloose {
  display: none;
}
.strong {
  font-weight: bold;
}
</style>

<script>
export default {
  // props: {
  //   id: Number,
  //   list: Object,
  //   tasks: {
  //     value: [String, Array],
  //   },
  // },
  props: ["id", "list", "tasks"],

  methods: {
    def: function(id) {
      // var all_drop = document.querySelectorAll(".drop");
      var all_content = document.querySelectorAll(".drop-content");
      // console.log(all_drop);
      //  console.log(all_content[id]);
      for(let count = 0; count < all_content.length ; count++)
      {
        if(!all_content[count].classList.contains("cloose") && count != id)all_content[count].classList.toggle("cloose");
      }

      if (this.tasks != null) {
        all_content[id].classList.toggle("cloose");
        // console.log(this.$store.state.tasks);
        if (
          all_content[id]
            .getElementsByTagName("ul")[0]
            .getElementsByTagName("li").length == 0 ||
          all_content[id]
            .getElementsByTagName("ul")[0]
            .getElementsByTagName("li").length == "undefined"
        ) {
          alert("в коллекции нет задач");
        }
      } else {
        alert("в коллекции нет задач ");
      }
    },
   async cng(id) {
      
      setTimeout(()=>{
      this.rn(id);
      //this.$store.commit("SetTasks");
      },50);
      // this.task1.complete = !this.task1.complete;
      // this.temp = this.task1.complete;
      
    },
    async rn(id){
         await fetch("http://localhost:3000/tasks/" + this.tasks[id].id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(this.tasks[id]),
      });
    }

  },
};
</script>
