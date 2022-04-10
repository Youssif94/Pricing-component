const slider = document.querySelector('.slider')
const pricesYear = document.querySelectorAll('.price_year')
const pricesMonth = document.querySelectorAll('.price_month')

slider.addEventListener('click',function(e){
pricesYear.forEach(span=> span.classList.toggle('hide'))
pricesMonth.forEach(span=> span.classList.toggle('hide'))
})
