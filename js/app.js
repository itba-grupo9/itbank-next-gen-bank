const dolarFetch = fetch(
  "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
