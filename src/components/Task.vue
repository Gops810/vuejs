<template>
  <div>
    <div
      style="
        font-size:18px;  
        <!-- border-style: solid ; 
        border-width: 0px 0px 0px 4px; 
        border-color:blue;  -->
     "
    >
      <div class="btn-group" role="group">
        <button v-on:click="log(task1.id)" type="button" class="btn btn-danger">
          Удалить <i class="far fa-trash-alt"></i>
        </button>
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Добавить в коллекцию
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div v-if="lists">
            <a
              class="dropdown-item"
              v-for="(list, index) in lists"
              :key="index"
              v-on:click="l_id(list.l_id)"
              >{{ list.name }}</a
            >
          </div>
          <div v-else>
            <a class="dropdown-item" href="">коллекции не найдены</a>
          </div>
        </div>
      </div>

      <button type="button" class="btn btn-primary">
  Активно до: <span class="badge badge-light">{{task1.date}}</span>
</button>
      <div class="text pl-2 pt-1" style="margin-bottom: -10px;">
        <input type="checkbox" v-model="temp" v-on:click="cng(task1.id)" />
        <span
          class="ml-1"
          v-bind:class="{
            'text-throw': temp,
            'text-muted': temp,
            strong: temp,
            strong: task1.is_quickly,
          }"
          >{{ task1.name }}
        </span>
      </div>

      <hr />
    </div>
  </div>
</template>

<style>
.text-throw {
  text-decoration: line-through;
}
.strong {
  font-weight: bold;
}
</style>

<script>
export default {
  data() {
    return {
      temp: "",
    };
  },
  created() {
    this.temp = this.task1.complete;
  },
  props: ["task1", "lists", "is_sorted"],
  methods: {
    async log(id) {
      //console.log(id);
      await fetch("http://localhost:3000/tasks/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      this.$store.commit("SetTasks");

      if (this.is_sorted) {
        setTimeout(() => {
          this.$store.state.tasks.sort((a, b) =>
            +a.is_quickly < +b.is_quickly ? 1 : -1
          );
        }, 200);
        console.log(this.is_sorted);
      }
    },
    cng(id) {
      this.task1.complete = !this.task1.complete;
      this.temp = this.task1.complete;
      fetch("http://localhost:3000/tasks/" + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(this.task1),
      });
      this.$store.commit("SetTasks");

      if (this.is_sorted) {
        setTimeout(() => {
          this.$store.state.tasks.sort((a, b) =>
            +a.is_quickly < +b.is_quickly ? 1 : -1
          );
        }, 200);
        console.log(this.is_sorted);
      }
    },
    async l_id(id) {
      this.task1.l_id = id;

      await fetch("http://localhost:3000/tasks/" + this.task1.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(this.task1),
      });
      this.$store.commit("SetTasks");

      if (this.is_sorted) {
        setTimeout(() => {
          this.$store.state.tasks.sort((a, b) =>
            +a.is_quickly < +b.is_quickly ? 1 : -1
          );
        }, 200);
        console.log(this.is_sorted);
      }
    },
  },
};
</script>
