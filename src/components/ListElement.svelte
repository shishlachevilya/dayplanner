<script>
  import Menu from "./Menu.svelte";
  import { fade, fly, slide } from 'svelte/transition';

  export let id = "";
  export let content = "";
  export let priority = "";
  let visible = false;
  let add = false;

  function deleteHandler(event) {
    event.target.closest("li").remove();
  }

  function showMenuHandler() {
    visible = !visible;
  }

  // function editHandler(event) {
  //   event.target.closest('button').previousElementSibling.setAttribute("contenteditable", true);
  // }
</script>

<style type="text/scss">
  li {
    margin: -1px 0 0;
    border-top: 1px solid #e6dff7;
    border-bottom: 1px solid #e6dff7;
  }

  li.low {
    order: 3;
  }

  li.medium {
    order: 2;
  }

  li.high {
    order: 1;
  }

  .item {
    position: relative;
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

    &.high::before {
      background: #dc3545;
    }

    &.medium::before {
      background: #ffc107;
    }

    &.low::before {
      background: #28a745;
    }
  }

  .menu-wrap {
    position: absolute;
    top: 50%;
    right: 0;
    border-radius: 25px;
    height: 30px;
    transform: translateY(-50%);
    background-color: #e7e2f4;
  }

  button {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
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
  }

  span {
    font-size: 12px;
  }

  svg {
    fill: #3d3c70;
  }
</style>

<li data-id={id} class={priority} transition:slide="{{duration: 400}}">
  <div class="item {priority}" transition:fly="{{ x: -20, duration: 300, delay: 300 }}">
    <p>{content}</p>

    {#if visible}
      <div class="menu-wrap" in:fly="{{ x: 10, duration: 400 }}" out:fly="{{ x: 50, duration: 300}}">
        <Menu visible={visible} priority={priority}></Menu>
      </div>
    {/if}


    <button data-action="menu" class:active={visible} on:click={showMenuHandler}>
      {#if visible}
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
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