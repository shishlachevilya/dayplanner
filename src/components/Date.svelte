<script>
  let src = './img/logo.svg';
  let alt = 'planner';

  function formatDate(date) {

    let dd = date.getDate();
    if (dd < 10) dd = "0" + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = "0" + mm;

    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = "0" + yy;

    return dd + "." + mm + "." + yy;
  }

  let d = new Date();
</script>

<style type="text/scss">
  .top-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 10px;
  }

  .date {
    display: inline-block;
    padding: 6px 12px;
    color: #3d3c70;
    font-size: 12px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    border: 2px solid #e7e2f4;
    border-radius: 25px;
  }
</style>

<div class="top-line">
  <div class="icon">
    <img {src} {alt}>
  </div>

  <div class="date">{formatDate(d)}</div>
</div>