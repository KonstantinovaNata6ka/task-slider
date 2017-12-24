$(window).ready(function() {

    setTimeout(function() {
        $('.wrapper').animate({opacity: 1}, 500);
    }, 500);

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: false

    });

});
//
var summa = 0;

for(var i = 1; i <= 10; i++) {
    summa = summa + Math.pow(i, 2);
}
console.log(summa);


//
var result = 0;
summa = 0;

for(var i = 1; i <=10; i++) {

    summa = summa + i;

    result = Math.pow(summa, 2)
}
console.log(result);

