fetch('./assets/json/objetivos.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    displayData(data);
  })
  .catch(function (error) {
    console.log('Ocurrió un error:', error);
  });

  function displayData(data) {
    let qs = document.getElementById("objetivos");
    let text1 = "";
    for (let i in data.objetivos) {
      let tag1 = data.objetivos[i].textspan;
      let tag2 = data.objetivos[i].textp;
      let dato = "<div><h3>" + tag1 + "</h3><p>" + tag2 + "</p></div><div><br></div>";
      text1 += dato
    }
    qs.innerHTML = text1
  }