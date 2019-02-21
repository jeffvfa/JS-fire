const width = 4;
const heigth = 8;
const matrix = [];

function start(){
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
    for (var row = 0; row < heigth; row++) {
        html += "<tr>";
        for (var column = 0; column < width; column++) {
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
