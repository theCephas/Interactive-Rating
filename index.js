var num = document.querySelectorAll('.numbers');

var rateDigits = document.getElementById('rates');

num.forEach((rate) => {

    rate.addEventListener('click', function () {
        rateDigits.innerHTML = rate.innerHTML;
    });
});