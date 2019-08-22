<script>
  import Circle from "./Circle.svelte";
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let priority = "";

  function deleteHandler(event) {
    event.target.closest('.todo-list__item').remove();
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

  function handleClick(event) {
    const currentClass = event.target.closest("button").className.replace(/\s.*/,'');

    dispatch('change', {
      priority: currentClass
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
    <Circle currentPriority="medium" on:click={handleClick}></Circle>
    <Circle currentPriority="low" on:click={handleClick}></Circle>
  {:else if priority === "medium"}
    <Circle currentPriority="high" on:click={handleClick}></Circle>
    <Circle currentPriority="low" on:click={handleClick}></Circle>
  {:else}
    <Circle currentPriority="high" on:click={handleClick}></Circle>
    <Circle currentPriority="medium" on:click={handleClick}></Circle>
  {/if}
  <li class="menu-list__item">
    <button on:click={deleteHandler}>
      <svg width="16" height="16" viewBox="0 0 70 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M49.2999 5.70001H66.8999C68.0999 5.70001 69.0999 6.70001 69.0999 7.90001V15.8C69.0999 17 68.0999 18 66.8999 18H3.0999C1.8999 18 0.899902 17 0.899902 15.8V7.90001C0.899902 6.70001 1.8999 5.70001 3.0999 5.70001H20.9999L21.4999 2.30001C21.6999 1.40001 22.3999 0.700012 23.2999 0.700012H46.8999C47.7999 0.700012 48.4999 1.40001 48.6999 2.30001L49.2999 5.70001ZM16.2999 73.2C12.5999 73.2 9.49995 70.5 9.29995 67L5.69995 21H64.3999L60.8 67C60.6 70.5 57.6 73.2 53.8999 73.2H16.2999Z" />
      </svg>
    </button>
  </li>
</ul>
