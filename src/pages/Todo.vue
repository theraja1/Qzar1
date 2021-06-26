<template>
  <q-page class="bg-grey-5 column">
    <div class="row q-pa-sm bg-accent">
      <q-input
        @keyup.enter="addTask"
        class="col"
        square
        bg-color="white"
        filled
        v-model="newTask"
        placeholder="Add Task"
        dense
      >
        <template v-slot:append>
          <q-btn @click="addTask" round dense flat icon="add" />
        </template>
      </q-input>
    </div>
    <q-list class="bg-white" bordered separator>
      <!--
        Rendering a <label> tag (notice tag="label")
        so QCheckboxes will respond to clicks on QItems to
        change Toggle state.
      -->

      <q-item
        v-bind:key="task.title"
        v-for="(task, index) in tasks"
        v-on:click="task.done = !task.done"
        v-ripple
        clickable
        :class="{ 'done bg-blue-2': task.done }"
      >
        <!-- :class="!task.done ? 'bg-blue-3' : 'bg-green-5'" -->
        <q-item-section avatar>
          <q-checkbox
            v-model="task.done"
            color="primary"
            class="no-pointer-events"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done" side>
          <q-btn
            @click.stop="deleteTask(index)"
            flat
            dense
            round
            color="primary"
            icon="delete"
          />
        </q-item-section>
      </q-item>
    </q-list>

    <div v-if="!tasks.length" class="no-tasks absolute-center">
      <q-icon name="check" size="100px" color="info" />
      <div class="text-h5 text-primary text-center">
        No TAsks
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
      tasks: [
        {
          title: "Study General Front-End Concepts",
          done: false
        },
        {
          title: "Learn Vue.js",
          done: false
        },
        {
          title: "Study Quasar ",
          done: true
        },
        {
          title: "Apply ",
          done: false
        }
      ]
    };
  },
  methods: {
    deleteTask(index) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Really wanna Delete Bro!!",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          console.log(">>>> OK Deleted");
          this.tasks.splice(index, 1);
          this.$q.notify("Deleted");
        });
    },
    addTask() {
      console.log("Task added");
      this.tasks.push({
        title: this.newTask,
        done: false
      });
      this.newTask = "";
    }
  }
};
</script>

<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: rgb(29, 119, 112);
  }
}
.no-tasks {
  opacity: 0.5;
}
</style>
