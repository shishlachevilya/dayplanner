<script>
  import Menu from "./Menu.svelte";
  import { fade, fly, slide } from 'svelte/transition';

  export let id = "";
  export let content = "";
  export let priority = "";
  export let isOpen = false;
  export let isDone = false;
  let isEdit = false;

  function showMenuHandler() {
    isOpen = !isOpen;
  }

  function editHandler() {
    isOpen = !isOpen;
    isEdit = !isEdit;
  }

  function endEdit() {
    isEdit = !isEdit;
  }

  function testHandler(event) {
    isDone = event.detail.isDone;
  }

  function changeHandler(event) {
    priority = event.detail.priority;
    showMenuHandler();
  }
</script>

<style type="text/scss">
  .todo-list__item {
    margin: -1px 0 0;
    border-top: 1px solid #e6dff7;
    border-bottom: 1px solid #e6dff7;

    &.low {
      order: 3;
    }

    &.medium {
      order: 2;
    }

    &.high {
      order: 1;
    }

    &.done {
      order: 4;
    }
  }

  .item {
    position: relative;
    margin: 2px 0;
    padding: 10px 54px 10px 26px;
    color: #3d3c70;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    border-radius: 25px;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 6px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      transform: translateY(-50%);
    }

    &.high {
      &::before {
        background: #dc3545;
      }

      &.edit {
        background-color: rgba(220,53,69, .15);
      }
    }


    &.medium {
      &::before {
        background: #ffc107;
      }

      &.edit {
        background-color: rgba(255,193,8, .15);
      }
    }


    &.low {
      &::before {
        background: #28a745;
      }

      &.edit {
        background-color: rgba(41,167,69, .15);
      }
    }

    &.done {
      opacity: .5;
      pointer-events: none;

      &::before {
        background: #ccc;
      }
    }
  }

  .menu-wrap {
    position: absolute;
    top: 50%;
    right: 0;
    border-radius: 25px;
    height: 36px;
    transform: translateY(-50%);
    background-color: #e7e2f4;
  }

  button {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
  }

  button[data-action="menu"] {
    position: absolute;
    top: 50%;
    right: 0;
    border-radius: 50%;
    transform: translateY(-50%);

    &:hover {
      background: #e7e2f4;
    }

    &.active {
      background: #b6b6ef;

      &:hover {
        background: #b6b6ef;
      }
    }
  }

  button[data-action="edit"] {
    top: 50%;
    right: 30px;
  }

  p {
    margin: 0;
    font-size: 14px;
    outline: none;
  }

  span {
    font-size: 12px;
  }

  svg {
    fill: #3d3c70;
  }

  .edit-btn {
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
    background: #b6b6ef;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    z-index: 2;
  }
</style>

<li data-id={id} class="todo-list__item {priority} {isDone ? 'done' : ''}" transition:slide="{{duration: 400}}">
  <div class="item {isEdit ? 'edit' : ''} {priority} {isDone ? 'done' : ''}" transition:fly="{{ x: -20, duration: 300, delay: 300 }}">
    <p contenteditable={isEdit}>{content}</p>

    {#if isEdit}
      <button class="edit-btn" on:click={endEdit}>
        <svg width="14" height="14" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.3 8.7C3.5 8.9 3.7 9 4 9C4.3 9 4.5 8.9 4.7 8.7L11.7 1.7C12.1 1.3 12.1 0.7 11.7 0.3C11.3 -0.1 10.7 -0.1 10.3 0.3L4 6.6L1.7 4.3C1.3 3.9 0.7 3.9 0.3 4.3C-0.1 4.7 -0.1 5.3 0.3 5.7L3.3 8.7Z" />
        </svg>
      </button>
    {/if}

    {#if isOpen}
      <div class="menu-wrap" in:fly="{{ x: 10, duration: 400 }}" out:fly="{{ x: 50, duration: 300}}">
        <Menu priority={priority} on:edit={editHandler} on:menu={showMenuHandler} on:test={testHandler} on:change={changeHandler}></Menu>
      </div>
    {/if}

    <button data-action="menu" class:active={isOpen} on:click={showMenuHandler}>
      {#if isOpen}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.41421 6.00001L11.6568 10.2427C12.0474 10.6332 12.0474 11.2663 11.6568 11.6569C11.2663 12.0474 10.6332 12.0474 10.2426 11.6569L5.99999 7.41422L1.75735 11.6569C1.36683 12.0474 0.733665 12.0474 0.34314 11.6569C-0.0473839 11.2663 -0.0473839 10.6332 0.34314 10.2427L4.58578 6.00001L0.34314 1.75737C-0.0473839 1.36684 -0.0473839 0.73368 0.34314 0.343156C0.733665 -0.0473686 1.36683 -0.0473686 1.75735 0.343156L5.99999 4.5858L10.2426 0.343156C10.6332 -0.0473686 11.2663 -0.0473686 11.6568 0.343156C12.0474 0.73368 12.0474 1.36684 11.6568 1.75737L7.41421 6.00001Z" />
        </svg>
      {:else}
          <svg width="14" height="14" viewBox="0 0 14 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.2C3.2 14.2 0 10.9 0 7.1C0 3.3 3.2 0.1 7 0C10.8 0 14 3.3 14 7.1C14 11 10.8 14.2 7 14.2ZM0 33.3C0 37.1 3.2 40.4 7 40.4C10.8 40.4 14 37.2 14 33.3C14 29.5 10.8 26.2 7 26.2C3.2 26.3 0 29.5 0 33.3ZM0 59.5C0 63.3 3.2 66.6 7 66.6C10.8 66.6 14 63.4 14 59.5C14 55.7 10.8 52.4 7 52.4C3.2 52.5 0 55.7 0 59.5Z" />
          </svg>
      {/if}
    </button>
  </div>
</li>