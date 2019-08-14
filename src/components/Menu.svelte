<script>


  // export let visible;


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

    &:hover {
      background: #b6b6ef;
    }
  }

  .svg-inline--fa {
    width: 16px;
    height: 16px;
    fill: #948ebd;
    transition: all .15s ease;

    &.fa-pen {
      width: 14px;
      height: 14px;
    }
  }
</style>


<ul class="menu-list">
  <li class="menu-list__item">
    <button data-action="edit">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" class="svg-inline--fa fa-pen fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path>
      </svg>
    </button>
  </li>
  <li class="menu-list__item">
    <button data-action="delete">
      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path>
      </svg>
    </button>
  </li>
</ul>
