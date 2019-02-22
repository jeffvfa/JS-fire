const width = 4;
const height = 10;
const matrix = [];
const matrix_size = width * height;

function start(){
    createMatrix()
    render();
    animateFire();
}


function createMatrix() {


    for (var i = 0; i < matrix_size; i++) {
        matrix[i] = 0;
    }
    initialize_fire();
}

function animateFire() {
    while(1){
        for (var i = 0; i < matrix_size - width; i++) {
            let new_value = (matrix[i + width] -1)
            matrix[i] = (new_value<0)? 0 : new_value;

        }
        render()
    }
}

function render() {
    let html = "<table> ";
    for (var row = 0; row < height; row++) {
        html += "<tr>";
        for (var column = 0; column < width; column++) {
            const pixel_index = column + (row*width);
            const fire_intensity = matrix[pixel_index];

            html += "<td>";
            html += "<div class='pixel_index'>" + pixel_index + " </div>";
            html += fire_intensity
            html += "</td>";
        }
        html += "</tr>";
    }
    html += "</table>";
    document.querySelector('#fire').innerHTML = html;
}

function initialize_fire(){
    index = matrix_size -1;

    for (var i = 0; i < width; i++) {
        matrix[index] = 36;
        index--;
    }
}



start();
