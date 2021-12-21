var nombreCompleto = prompt("Escriba su nombre")
var nombreCarrera = prompt("Nombre carrera", "desarrollo web")
var htmlNota1 = prompt("HTML primera nota", "-")
var htmlNota2 = prompt("HTML segunda nota", "-")
var htmlNota3 = prompt("HTML tercera nota", "-")
var htmlPromedio =((parseFloat(htmlNota1)+parseFloat(htmlNota2)+parseFloat(htmlNota3))/3);

var cssNota1 = prompt("CSS primera nota", "-")
var cssNota2 = prompt("CSS segunda nota", "-")
var cssNota3 = prompt("CSS tercera nota", "-")
var cssPromedio =((parseFloat(cssNota1)+parseFloat(cssNota2)+parseFloat(cssNota3))/3);

var jsNota1 = prompt("JS primera nota", "-")
var jsNota2 = prompt("JS segunda nota", "-")
var jsNota3 = prompt("JS tercera nota", "-")
var jsPromedio =((parseFloat(jsNota1)+parseFloat(jsNota2)+parseFloat(jsNota3))/3);



document.write(`
<div class="container mt-5">
 <h1>Notas finales</h1>
  <p><strong>Nombre:</strong>  ${nombreCompleto}</p>
  <p><strong>Carrera:</strong> ${nombreCarrera}</p>

  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th>Ramo</th>
        <th>Nota 1</th>
        <th>Nota 2</th>
        <th>Nota 3</th>
        <th>Promedio</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>HTML</td>
        <td>${htmlNota1}</td>
        <td>${htmlNota2}</td>
        <td>${htmlNota3}</td>
        <td>${htmlPromedio}</td>
      </tr>
      <tr>
        <td>CSS</td>
        <td>${cssNota1}</td>
        <td>${cssNota2}</td>
        <td>${cssNota3}</td>
        <td>${cssPromedio}</td>
      </tr>
      <tr>
        <td>JS</td>
        <td>${jsNota1}</td>
        <td>${jsNota2}</td>
        <td>${jsNota3}</td>
        <td>${jsPromedio}</td>
      </tr>
    </tbody>
  </table>
  </div>
`);