let buttons = document.querySelectorAll(".btn");
let carres = document.querySelectorAll(".carre");


buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        carres[index].classList.toggle('is-visible');
    });
});
