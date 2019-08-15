<script>
  export let currentPriority = ""
</script>

<style type="text/scss">
  .menu-list__item {
    margin: 0 2px;
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

<li class="menu-list__item">
  <button class={currentPriority}>
    <svg width="16" height="16" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40.5 80.5C62.5914 80.5 80.5 62.5914 80.5 40.5C80.5 18.4086 62.5914 0.5 40.5 0.5C18.4086 0.5 0.5 18.4086 0.5 40.5C0.5 62.5914 18.4086 80.5 40.5 80.5Z" stroke="#010101" stroke-width="0.25" stroke-miterlimit="10"/>
    </svg>
  </button>
</li>