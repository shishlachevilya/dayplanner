<script >
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let content = "";
  export let select = 0;

  function sayHello() {
    dispatch('message', {
      content: content,
      select: select
    });
    content = "";
    select = 0;
  }

</script>

<style type="text/scss">
  $btn-bg: #b6b6ef;

  .form {
    margin: 0 0 30px;

    &__row:nth-child(1) {
      margin: 0 0 16px;
    }

    &__row:nth-child(2) {
      display: flex;
      justify-content: space-between;
      margin: 0 0 30px;
    }

    &__col {
      display: inline-flex;
      width: 30.5%;
    }

    &__text {
      display: block;
      width: 100%;
      padding: 10px 18px;
      color: #3d3c70;
      font-size: 14px;
      font-family: "Roboto", sans-serif;
      font-weight: 700;
      border-radius: 25px;
      border: none;
      background-color: #e7e2f4;
      outline: none;
    }

    &__button {
      display: block;
      margin: auto;
      padding: 10px 25px;
      color: #3d3c70;
      font-size: 14px;
      font-family: "Roboto", sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      border: none;
      border-radius: 50px;
      background-color: $btn-bg;
      cursor: pointer;
      box-shadow: 5px 10px 15px rgba(0,0,0, .25);
      outline: none;

      &:hover {
        background-color: #9f9fea;
      }

      &:active {
        box-shadow: 2px 4px 15px rgba(0,0,0, .25);
      }
    }

    &__radio {
      display: none;
    }

    &__radio:checked + .form__label {
      background: #b6b6ef;
    }

    &__label {
      display: block;
      padding: 10px 14px;
      width: 100%;
      color: #3d3c70;
      font-size: 14px;
      font-family: "Roboto", sans-serif;
      font-weight: 700;
      text-align: center;
      border-radius: 25px;
      border: none;
      background-color: #e7e2f4;
      cursor: pointer;
    }
  }
</style>

<form class="form">
  <div class="form__row">
    <input class="form__text" type="text" placeholder="Введите название" bind:value={content}>
  </div>

  <div class="form__row">
    <div class="form__col">
      <input class="form__radio" type=radio bind:group={select} id="high" name="priority" value=high>
      <label class="form__label" for="high">Высокий</label>
    </div>

    <div class="form__col">
      <input class="form__radio" type=radio bind:group={select} id="medium" name="priority" value="medium">
      <label class="form__label" for="medium">Средний</label>
    </div>

    <div class="form__col">
      <input class="form__radio" type=radio bind:group={select} id="low" name="priority" value="low">
      <label class="form__label" for="low">Низний</label>
    </div>
  </div>

  <div class="form__row">
    <button class="form__button" type="submit" on:click|preventDefault={sayHello}>добавить новую</button>
  </div>
</form>