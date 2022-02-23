const btnPrev = document.querySelector('#slider__prev');
const btnNext = document.querySelector('#slider__next');
const sliderBody = document.querySelector('#slider__body');

btnNext.addEventListener('click', () => {
    sliderBody.scrollLeft += 320;
})


btnPrev.addEventListener('click', () => {
    sliderBody.scrollLeft -= 320;
})


document.addEventListener('DOMContentLoaded', () => {
    const btnModalOpen = document.querySelector('#my-modal__open');
    const btnModalClose = document.querySelector('#my-modal__close');
    const form = document.querySelector('#form');
    const modalWindow = document.querySelector('#my-modal');
    
    btnModalOpen.addEventListener('click', () => {
        modalWindow.style.visibility = 'visible';
        modalWindow.style.opacity = '100';
        document.body.style.overflow = 'hidden';
    })
    
    btnModalClose.addEventListener('click', () => {
        modalWindow.style.visibility = 'hidden';
        modalWindow.style.opacity = '0';
        document.body.style.overflow = 'auto';
    })
    
    document.addEventListener('click', (event) => {
        if(event.target.id === 'my-modal__area') {
            modalWindow.style.visibility = 'hidden';
            modalWindow.style.opacity = '0';
            document.body.style.overflow = 'auto';
        }
    })
    
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log("Hello, world");


        const name = document.querySelector('#form__name').value;
        const phone = document.querySelector('#form__phone').value;
        const formInfo = document.querySelector('#form__info')

        if(phone && name) {
            createThankYou(formInfo);
        } else {
            createError(formInfo);
        }
    })

    function createThankYou(formInfo) {
        formInfo.style.color = '#3A4574';
        formInfo.innerHTML = "Отправка...";

        setTimeout(() => {
            formInfo.innerHTML = "Отправка завершена. Спасибо!";
            form.reset();

            setTimeout(() => {
                formInfo.innerHTML = "";
            }, 2000);
        }, 2000);
    }


    function createError(formInfo) {
        formInfo.style.color = 'red';
        formInfo.innerHTML = "Все поля должны быть заполнены! (Но 'Hello, world' в консоле есть :)";
    }
})