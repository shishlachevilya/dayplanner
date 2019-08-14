<script>
  import Form from "./components/Form.svelte";
  import ListElement from "./components/ListElement.svelte";
  import ProgressBar from "./components/ProgressBar.svelte";
  import TodoDate from "./components/Date.svelte";
  import { Notyf } from 'notyf';

  const notyf = new Notyf();

  let todo = [
    { id: "fw4e1ql20titpsqlccbbx", content: "Задача 1", priority: "high" },
    { id: "lkxvbm81y1iau1ry9i7ik", content: "Задача 2", priority: "medium" },
    { id: "lkxvbm81y1iau1ry9i", content: "Задача 3", priority: "low" }
  ];

  let content = "";
  let priority = "";

  function handleMessage(event) {
    if(event.detail.content === "") {
      notyf.error("Введите название задачи");
      return;
    }

    if(event.detail.select === 0) {
      notyf.error("Выберите приоритет");
       return;
    }

    todo = [...todo, {
      id: Date.now(),
      content: event.detail.content,
      priority: event.detail.select
    }];

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
    box-shadow: 5px 10px 15px rgba(0,0,0, .25);
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

    <Form content={content} on:message={handleMessage}></Form>

    <ul class="todo-list">
      {#each todo as {id, content, priority}}
        <ListElement id={id} content={content} priority={priority}></ListElement>
      {/each}
    </ul>

    <ProgressBar />
  </div>
</div>
