document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.btn');

    let userRate = 0;

    function chooseRate (rate, elements) {
        if (rate.classList.contains('rating__btn--active')) {
            rate.classList.remove('rating__btn--active');
            rate.classList.add('rating__btn--inactive');
            userRate = 0;
        } else {
            elements.forEach(e => {
                e.classList.remove('rating__btn--active');
                e.classList.add('rating__btn--inactive');
            })
    
            userRate = parseInt(rate.textContent);
            rate.classList.remove('rating__btn--inactive');
            rate.classList.add('rating__btn--active');
        }
    }

    btns.forEach(element => {
        element.addEventListener('click', (e) => {
            chooseRate(e.target, btns);

            console.log(userRate);
        })
    })
})