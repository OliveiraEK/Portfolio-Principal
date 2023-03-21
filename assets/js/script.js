// seleciona todas as imagens dos projetos
const imagens = document.querySelectorAll('.projeto-imagem');

// adiciona um evento de clique a cada imagem
imagens.forEach(imagem => {
  imagem.addEventListener('click', () => {
    // cria a modal
    const modal = document.createElement('div');
    modal.classList.add('modal');

    // cria a imagem na modal
    const imagemModal = document.createElement('img');
    imagemModal.src = imagem.src;
    imagemModal.alt = imagem.alt;
    modal.appendChild(imagemModal);

    // adiciona a modal ao corpo do documento
    document.body.appendChild(modal);

    // fecha a modal quando clicar fora da imagem
    modal.addEventListener('click', () => {
      modal.remove();
    });
  });
});


// typed js

const typed = new Typed('.multiple-text',{
    strings: ['Desenvolvedor Front-End'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
            });
        };
    });

    // sticky navbar

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// scroll reveal

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration:  2000,
    delay: 200
});

ScrollReveal().reveal('.conteudo-home, .titulo',{ origin: 'top' });
ScrollReveal().reveal('.home-img, .habilidades-box, .projetos-box, .contato form',{ origin: 'bottom' });
ScrollReveal().reveal('.conteudo-home h1, .sobre-img',{ origin: 'left' });
ScrollReveal().reveal('.conteudo-home p, .sobre p, .conteudo-sobre',{ origin: 'right' });


