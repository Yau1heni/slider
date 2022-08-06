const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')
const slidesCount = mainSlide.querySelectorAll('div').length
const item = document.getElementsByClassName('item')

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

function changeSlide(direction) {
    if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }

    } else if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`

}
