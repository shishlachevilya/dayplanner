<script>
  import Circle from "./Circle.svelte";
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let priority = "";

  function deleteHandler(event) {

  }

  function doneHandler() {
    dispatch('menu', {
      isOpen: false
    });
  }

  function showText() {
    dispatch('test', {
      isDone: true
    });
  }
</script>

<style type="text/scss">
  .menu-list {
    display: flex;
    align-items: center;
    padding: 0 32px 0 1px;
    margin: 0;
    height: 100%;
    list-style: none;

    &__item {
      margin: 0 2px;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    padding: 0;
    background: none;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    outline: none;

    &.high svg {
      fill: #dc3545;
    }

    &.medium svg {
      fill: #ffc107;
    }

    &.low svg {
      fill: #28a745;
    }

    &:hover {
      background: #b6b6ef;
    }
  }

  svg {
    width: 16px;
    height: 16px;
    fill: #948ebd;
    transition: all .15s ease;
  }
</style>

<ul class="menu-list">
  <li class="menu-list__item">
    <button on:click={doneHandler} on:click={showText}>
      <svg width="16" height="16" viewBox="0 0 86 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.4 60.6C27.3 62.5 29.8 63.5 32.5 63.5C35.2 63.5 37.7 62.4 39.6 60.6L82.7 17.5C86.6 13.6 86.6 7.29998 82.7 3.39998C78.8 -0.500024 72.5 -0.500024 68.6 3.39998L32.4 39.4L17.5 24.5C13.6 20.6 7.29998 20.6 3.39998 24.5C-0.500024 28.4 -0.500024 34.7 3.39998 38.6L25.4 60.6Z" />
      </svg>
    </button>
  </li>
  <li class="menu-list__item">
    <button data-action="edit">
      <svg width="16" height="16" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M61 0L49.4375 11.5625L66.4375 28.5625L78 17L61 0ZM46.5938 14.4062L0 61V78H17L63.5938 31.4062L46.5938 14.4062Z" />
      </svg>
    </button>
  </li>
  {#if priority === "high"}
    <Circle currentPriority="medium"></Circle>
    <Circle currentPriority="low"></Circle>
  {:else if priority === "medium"}
    <Circle currentPriority="high"></Circle>
    <Circle currentPriority="low"></Circle>
  {:else}
    <Circle currentPriority="high"></Circle>
    <Circle currentPriority="medium"></Circle>
  {/if}
  <li class="menu-list__item">
    <button on:click={deleteHandler}>
      <svg width="16" height="16" viewBox="0 0 82 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M52.5 9.1H78.4C80 9.1 81.3 10.4 81.3 12V17.9C81.3 19.5 80 20.8 78.4 20.8H3.59995C1.99995 20.8 0.699951 19.5 0.699951 17.9V12.1C0.699951 10.5 1.99995 9.2 3.59995 9.2H29.5V3.4C29.5 1.8 30.8 0.5 32.4 0.5H49.5999C51.1999 0.5 52.5 1.8 52.5 3.4V9.1ZM8.09995 26.4H73.8999C74.7999 26.4 75.3999 27.2 75.4999 28L68 87.9C67.3999 92.3 63.7999 95.5 59.4 95.5H22.7999C18.4 95.5 14.7 92.2 14.2 87.9L6.69995 28C6.49995 27.2 7.19995 26.4 8.09995 26.4ZM27.2 82.8H27.4C28.9 82.7 29.9 81.4 29.7999 80L26.5999 41.5C26.5 40 25.2 39 23.7999 39.1C22.2999 39.2 21.3 40.5 21.4 41.9L24.5999 80.4C24.7 81.8 25.9 82.8 27.2 82.8ZM41 82.8C42.4 82.8 43.5999 81.6 43.5999 80.2V41.7C43.5999 40.3 42.4 39.1 41 39.1C39.6 39.1 38.4 40.3 38.4 41.7V80.2C38.4 81.6 39.6 82.8 41 82.8ZM54.7 82.8C56.1 82.8 57.2 81.8 57.3 80.4L60.5 41.9C60.6 40.5 59.4999 39.2 58.1 39.1C56.7 39 55.4 40.1 55.3 41.5L52.0999 80C52 81.4 53.1 82.7 54.5 82.8H54.7Z" />
      </svg>
    </button>
  </li>
</ul>
