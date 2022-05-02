$(document).keydown(function (touche) {
    let appui = touche.which || touche.keyCode;
    console.log(appui);
    switch (appui) {
        case 65: $('body').css('background-color', 'red');
            console.log('appui sur le A');
            break;
        case 38:
            $("div.hidden").slideUp(600);
            $("img").slideDown(600);
            break;
        case 40:
            $("div.hidden").slideDown(600);
            $("img").slideUp(600);
            break;
        default: $('body').css('background-color', 'antiquewhite');
    }
});
$(document).keyup(function () {
    $('body').css('background-color', 'antiquewhite')
});
$(document).ready(function () {
    $('img').hide();
});
$(document).click(function (e) {
    e.preventDefault();
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    console.log(`${r}-${g}-${b}`);
    $('body').css('background-color', `rgb(${r},${g},${b})`);

});