var right = document.getElementById('right-button');

right.onclick = function () {
    var container = document.getElementById('container');
    var scrollInterval = setInterval(() => {
        container.scrollLeft += 480;
        window.clearInterval(scrollInterval)
    }, 10)
};

var left = document.getElementById('left-button');

left.onclick = function () {
    var container = document.getElementById('container');
    var scrollInterval = setInterval(() => {
        container.scrollLeft -= 480;
        window.clearInterval(scrollInterval)
    }, 10)
};

// function sideScroll(element, direction, speed, distance, step) {
//     scrollAmount = 0;
//     var slideTimer = setInterval(function () {
//         if (direction == 'left') {
//             element.scrollLeft -= step;
//         } else {
//             element.scrollLeft += step;
//         }
//         scrollAmount += step;
//         if (scrollAmount >= distance) {
//             window.clearInterval(slideTimer);
//         }
//     }, speed);
// }

// function horizontalScroll(element, direction, speed, distance) {
//     let slideTimer = setInterval
// }
