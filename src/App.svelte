<script>
  import Form from "./components/Form.svelte";
  import ListElement from "./components/ListElement.svelte";
  import ProgressBar from "./components/ProgressBar.svelte";

  let todo = [
    { id: "fw4e1ql20titpsqlccbbx", content: "Задача 1", priority: "high" },
    { id: "lkxvbm81y1iau1ry9i7ik", content: "Задача 2", priority: "medium" },
    { id: "lkxvbm81y1iau1ry9i", content: "Задача 3", priority: "low" }
  ];

  let id = "";
  let content = "";
  let priority = "";

  function handleSubmit() {
    todo = [...todo, {
      id: Date.now(),
      content: content,
      priority: priority
    }];
  }
</script>

<style>
  :root {
    --todo-box-bg: #f7f1fb;
    --btn-bg: #b6b6ef;
  }

  h2 {
    margin: 0 0 30px;
    text-align: center;
  }

  .todo-box {
    margin: 25px 0 0;
    padding: 20px 50px 30px;
    background-color: var(--todo-box-bg);
    border-radius: 15px;
    box-shadow: 5px 10px 15px rgba(0,0,0, .25);
  }

  .todo-list {
    margin: 0 0 30px;
    padding: 0;
    list-style-type: none;
  }
</style>

<div class="container">
  <div class="todo-box">
    <h2>Мои задачи</h2>

    <Form content={content} on:click={handleSubmit}></Form>

    <ul class="todo-list">
      {#each todo as {content, priority}}
        <ListElement id={id} content={content} priority={priority}></ListElement>
      {/each}
    </ul>

    <ProgressBar />
  </div>
</div>
