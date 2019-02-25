const width = 20;
const height = 36;
const matrix = [];
const matrix_size = width * height;
const debug = false;
const fireColorsPalette = [{"r":7,"g":7,"b":7},{"r":31,"g":7,"b":7},{"r":47,"g":15,"b":7},{"r":71,"g":15,"b":7},{"r":87,"g":23,"b":7},{"r":103,"g":31,"b":7},{"r":119,"g":31,"b":7},{"r":143,"g":39,"b":7},{"r":159,"g":47,"b":7},{"r":175,"g":63,"b":7},{"r":191,"g":71,"b":7},{"r":199,"g":71,"b":7},{"r":223,"g":79,"b":7},{"r":223,"g":87,"b":7},{"r":223,"g":87,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":103,"b":15},{"r":207,"g":111,"b":15},{"r":207,"g":119,"b":15},{"r":207,"g":127,"b":15},{"r":207,"g":135,"b":23},{"r":199,"g":135,"b":23},{"r":199,"g":143,"b":23},{"r":199,"g":151,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":167,"b":39},{"r":191,"g":167,"b":39},{"r":191,"g":175,"b":47},{"r":183,"g":175,"b":47},{"r":183,"g":183,"b":47},{"r":183,"g":183,"b":55},{"r":207,"g":207,"b":111},{"r":223,"g":223,"b":159},{"r":239,"g":239,"b":199},{"r":255,"g":255,"b":255}]


function start(){
    createMatrix()
    render();
    setInterval(animateFire,0.2);
}


function createMatrix() {
    for (var i = 0; i < matrix_size; i++) {
        matrix[i] = 0;
    }
    initialize_fire();
}

function animateFire() {
    for (var i = 0; i < matrix_size - width; i++) {
        let decay = Math.floor(Math.random() * 3)
        let new_value = (matrix[i + width] - decay)
        console.log(new_value);
        matrix[i] = (new_value<0)? 0 : new_value;
    }
    render()
}

function render() {
    let html = "<table> ";
    for (var row = 0; row < height; row++) {
        html += "<tr>";
        for (var column = 0; column < width; column++) {
            const pixel_index = column + (row*width);
            const fire_intensity = matrix[pixel_index];
            if (debug === true) {
                html += "<td>";
                html += "<div class='pixel_index'>" + pixel_index + " </div>";
                html += fire_intensity
                html += "</td>";
            }
            else{
                color = fireColorsPalette[fire_intensity];
                color_rgb = color.r +','+ color.g+','+color.b;
                console.log(color_rgb);
                html += '<td class="pixel"  style="background-color : rgb('+ color_rgb + ');">';
                html += "</td>";
            }
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
