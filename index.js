const slider = document.querySelector('.slider')
const pricesYear = document.querySelectorAll('.price_year')
const pricesMonth = document.querySelectorAll('.price_month')
const annually = document.querySelector('.annually')

slider.addEventListener('click',function(e){
pricesYear.forEach(span=> span.classList.toggle('hide'))
pricesMonth.forEach(span=> span.classList.toggle('hide'))
annually.classList.toggle('breathe');
document.querySelector('.save_text').classList.toggle('hide')
})
