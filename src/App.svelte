<script>
  import INITIAL_TODO from './db';
  import Form from "./components/Form.svelte";
  import ListElement from "./components/ListElement.svelte";
  import ProgressBar from "./components/ProgressBar.svelte";
  import TodoDate from "./components/Date.svelte";
  import {getLocalTasks} from "./helpers/getLocalTasks";
  import {setLocalTasks} from "./helpers/setLocalTasks";

  import {Notyf} from 'notyf';

  const notyf = new Notyf();

  let todoList = getLocalTasks() || INITIAL_TODO;

  let content = "";
  let priority = "";

  function handleMessage(event) {
    if (event.detail.content === "") {
      notyf.error("Введите название задачи");
      return;
    }

    if (event.detail.select === 0) {
      notyf.error("Выберите приоритет");
      return;
    }

    todoList = [...todoList, {
      id: Date.now(),
      content: event.detail.content,
      priority: event.detail.select
    }];
    setLocalTasks(todoList);

    notyf.success("Новая задача добавлена");
  }

</script>

<style type="text/scss">
  $todo-box-bg: #f7f1fb;

  h2 {
    margin: 0 0 30px;
    text-align: center;
  }

  .todo-box {
    margin: 25px 0 0;
    padding: 20px 26px 30px;
    background-color: $todo-box-bg;
    border-radius: 15px;
    box-shadow: 5px 10px 15px rgba(0, 0, 0, .25);
  }

  .todo-list {
    display: flex;
    flex-direction: column;
    margin: 0 0 30px;
    padding: 0;
    list-style-type: none;
  }
</style>

<div class="container">
  <div class="todo-box">
    <TodoDate></TodoDate>
    <h2>Мои задачи</h2>

    <Form content={content} on:todo={handleMessage}></Form>

    <ul class="todo-list">
      {#each todoList as {id, content, priority}}
        <ListElement {id} {content} {priority}></ListElement>
      {/each}
    </ul>

<!--    <ProgressBar/>-->
  </div>
</div>
