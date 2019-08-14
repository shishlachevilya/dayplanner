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
  .top-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .icon {

  }

  .date {
    display: inline-block;
    padding: 10px 16px;
    color: #3d3c70;
    font-size: 12px;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    background: #e7e2f4;
    border-radius: 25px;
  }
</style>

<div class="top-line">
  <div class="icon">
    <svg width="24" height="24" viewBox="0 0 70 92" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.21003 24H40.2091C45.2956 24 49.4187 19.8769 49.4187 14.79V9.21003C49.4187 4.12309 45.2956 0 40.2091 0H9.21003C4.12309 0 0 4.12309 0 9.21003V14.79C0 19.8769 4.12309 24 9.21003 24Z" fill="#dc3545"/>
      <path d="M60.1331 34H9.21032C4.12322 34 0 38.1232 0 43.2092V48.7893C0 53.8783 4.12322 58 9.21032 58H60.1331C65.2198 58 69.343 53.8783 69.343 48.7893V43.2092C69.343 38.1232 65.2198 34 60.1331 34Z" fill="#ffc107"/>
      <path d="M21.4894 68H9.21003C4.12309 68 0 72.1246 0 77.2096V82.7896C0 87.8785 4.12309 92 9.21003 92H21.4894C26.576 92 30.699 87.8785 30.699 82.7896V77.2096C30.699 72.1246 26.576 68 21.4894 68Z" fill="#28a745"/>
    </svg>
  </div>

  <div class="date">{formatDate(d)}</div>
</div>