let buttons = document.getElementsByClassName('button');
let popup = document.getElementById('popup');
let close = document.getElementById('close');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        // Adiciona a classe 'show' ao elemento com o ID 'popup'
        popup.classList.toggle('show');
    });
}


close.addEventListener('click', () => {
    popup.classList.toggle('show');
})

let perguntaTitles = document.querySelectorAll('.pergunta_title');

perguntaTitles.forEach((perguntaTitle) => {
    perguntaTitle.addEventListener('click', () => {
        console.log("Lucas")
        // Encontra o próximo elemento irmão ('pergunta_description') do 'pergunta_title' clicado
        let perguntaDescription = perguntaTitle.nextElementSibling;
        console.log(perguntaDescription)

        // Adiciona ou remove a classe 'show' ao 'pergunta_description'
        perguntaDescription.classList.toggle('show');
    });
});