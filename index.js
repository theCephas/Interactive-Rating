var num = document.querySelectorAll('.numbers');

var rateDigits = document.getElementById('rates');

num.forEach((rate) => {

    rate.addEventListener('click', () => {
        rateDigits.innerHTML = rate.innerHTML;
    });
});