// Select color input
let color = document.getElementById('colorPicker');

// Select size input
let height = '';
let width = '';

// When size is submitted by the user, call makeGrid()
const submit = document.getElementById('submit');
submit.addEventListener('click', makeGrid);

function makeGrid(e) {
// Your code goes here!
  e.preventDefault();
  let colorVal = color.value;
  height = document.getElementById('inputHeight').value;
  width = document.getElementById('inputWidth').value;
  const myCustomTable = document.getElementById('pixelCanvas');

  myCustomTable.innerHTML = "";
  for (let i = 1; i <= height; i++) {
      const newRow = document.createElement('tr');
      for (let j = 1; j <= width; j++) {
        const newData = document.createElement('td');
        newRow.appendChild(newData);
      }
  
  myCustomTable.appendChild(newRow);
  }

  document.body.appendChild(myCustomTable);


  function respondToTheChange(e) {
    colorVal = color.value;
  }

  color.addEventListener('change', respondToTheChange);


  function respondToTheClick(e) {
    if (e.target.nodeName === 'TD'){
        e.target.style.backgroundColor = colorVal;
    }
  }
  myCustomTable.addEventListener('click', respondToTheClick);
}
