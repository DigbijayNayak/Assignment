fetch("https://orangevalleycaa.org/api/videos")
  .then((data) => {
    //   console.log(data);
    return data.json(); // converted to object
  })
  .then((objectData) => {
    let tableData = "";
    objectData.map((values) => {
      tableData += `
            <tr>
            <td>${values.id}</td>
            <td>${values.category}</td>
            <td><img src="${values.image}"/></td>
            <td>${values.description}</td>
            </tr>
        `;
    });
    document.getElementById("table").innerHTML = tableData;
  })
  .catch((err) => {
    console.log(err);
  });
