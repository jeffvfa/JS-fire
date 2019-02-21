const width = 2;
const heigth = 3;
const matrix = [];

function start(){
    alert('test');
    render();
}


function createMatrix() {
    const matrix_size = width * heigth;

    for (var i = 0; i < matrix_size; i++) {
        matrix[i] = 0;
    }
}

function animateFire() {

}

function render() {
    let html = "<table> ";
    for (var row = 0; row < width; row++) {
        html += "<tr>";
        for (var column = 0; column < heigth; column++) {
            pixel_index = column + (row*width);

            html += "<td>";
            html += pixel_index;
            html += "</td>";
        }
        html += "</tr>";
    }
    html += "</table>";
    document.querySelector('#fire').innerHTML = html;
}


start();
