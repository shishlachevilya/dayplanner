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

  function editHandler() {
    dispatch('edit', {
      isDone: false
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
    padding: 0 38px 0 2px;
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
    width: 28px;
    height: 28px;
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
      <svg width="16" height="16" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.3 8.7C3.5 8.9 3.7 9 4 9C4.3 9 4.5 8.9 4.7 8.7L11.7 1.7C12.1 1.3 12.1 0.7 11.7 0.3C11.3 -0.1 10.7 -0.1 10.3 0.3L4 6.6L1.7 4.3C1.3 3.9 0.7 3.9 0.3 4.3C-0.1 4.7 -0.1 5.3 0.3 5.7L3.3 8.7Z" />
      </svg>
    </button>
  </li>
  <li class="menu-list__item">
    <button data-action="edit" on:click={editHandler}>
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
