function updateDot(index) {
    const dots = document.querySelector('.dot');

    dots.forEach(dot => {
        dot.classList.remove('active');
        dot.classList.add('unactive');
    });

    dots[index].classList.add('active');
    dots[index].classList.remove('unactive');

}