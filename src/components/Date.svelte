<script>
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
  div {
    padding: 0 0 20px;
    text-align: right;
  }

  span {
    color: #3d3c70;
    font-size: 12px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }
</style>

<div>
  <span>{formatDate(d)}</span>
</div>