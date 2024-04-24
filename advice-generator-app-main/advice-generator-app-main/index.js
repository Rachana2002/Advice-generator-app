const adviceId = document.querySelector('#adviceid');
const advicetext = document.querySelector('#advicetext');
const btn = document.querySelector('#btn');

function getAdvice() {
    fetch('https://api.adviceslip.com/advice').then(response =>
    {
        return response.json();
    }).then(adviceData => {
        const advicenum = adviceData.slip.id;
        const advice = adviceData.slip.advice;

        adviceId.textContent = advicenum;
        advicetext.innerHTML = `<p>${advice}</p>`;

    }).catch(error => {
        console.log(error);
    })
}

btn.addEventListener('click', () => {
    getAdvice();
});

window.onload = () => {
    getAdvice();
}


