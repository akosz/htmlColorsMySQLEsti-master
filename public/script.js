
document.getElementById("szinek-megjelenitese").onclick = listAndRenderColors;

function listAndRenderColors() {
  fetch("/colors").then(res => { return res.json() }).then((res) => {
    let htmlResult = "<h2>A kedvenc színeim JSON állományból</h2>";
    for (const szin of res) {
      htmlResult += `<div class="card" style="width: 18rem;">
          <div class="card-body" style="background-color:${szin.code}">
            <h5 class="card-title">${szin.name}</h5>
            <h6 class="card-text">${szin.code}</h6>
          </div>
        </div>`;
    }
    document.getElementById('color-list-component').innerHTML = htmlResult;
  })


}

document.getElementById('create-color').onsubmit = event => {
  event.preventDefault();

  const code = event.target.elements.code.value;
  const name = event.target.elements.name.value;

  fetch('/colors', {
    method: "POST",
    header: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code, name }),
  }).then(response => response.json()).then(data => console.log(data)).catch(err => alert("Hiba történt"))

}