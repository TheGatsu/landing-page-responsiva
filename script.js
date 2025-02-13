document.addEventListener("DOMContentLoaded", function() {
    const testimonials = [
        { 
            text: "Na busca por um amor verdadeiro, eu encontrei você! Um amor sincero, paciente, que ama ao proximo e principalmente tem amor a Cristo.\n\nEu lembro muito bem do sentimento de te conhecer pela primeira vez, quando comecei a sentir algo que não sabia explicar, isso quando nem tinhamos muito contato já, e sempre fui me atentando com o que sentia para não acabar cometendo vacilo e estragar algo que não imaginaria ser tão especial.\n\nE assim os dias foram se passando e eu pedindo a orientação de Deus sobre o sentimento que estava-se criando por você, e até que chegou o dia de ir na reunião da mocidade, onde se confirmou tudo que estava sentindo por ti, Emilli, uma felicidade que não conseguiria explicar em palavras ou sequer comentar com você ainda, mas desde ali já tinha confirmação do quão especial você era pra minha vida.", 
            name: "O amor de Cristo",
            image: "arwen.jpg" 
        },
        { 
            text: "Quem encontra uma esposa\nencontra algo excelente;\nrecebeu uma bênção do Senhor.\nProvérbios 18:22\n\nUm homem sozinho pode ser vencido,\nmas dois conseguem defender-se.\nUm cordão de três dobras não se rompe com facilidade.\nEclesiastes 4:12\n\nMaridos, ame cada um a sua mulher,\nassim como Cristo amou a igreja e entregou-se por ela.\nEfésios 5:25\n\nAssim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus uniu, ninguém separe.\nMateus 19:6\n\nQue o amor e a fidelidade jamais o abandonem;\nprenda-os ao redor do seu pescoço,\nescreva-os na tábua do seu coração.\nProvérbios 3:3", 
            name: "",
            image: "evenstar.jpg" 
        },
        { 
            text: "Te conhecer foi uma grande obra que Deus preparou na minha vida, o proposito que tanto pedia orações a ele no meu quarto, e me sinto muito feliz em estar vivendo esse proposito ao seu lado.\n\nÉ bom sempre me pegar as vezes pensando em momentos que imagino estando juntinho com você, e na mais simples ocasião, seja em estarmos juntos conversando na nossa casa, fazendo tarefas juntos, indo ao mercado, fazendo nossas compra, viajando muito juntos, planejando nossas metas juntos, orando e fazendo devocinais juntos todos os dias, cuidando e educando nossos filhos, cada momento é tão especial pra mim que em palavras não consigo descrever o sentimento.\n\nE me faz ficar bobo pensando que um dia viverei todos esses momentos com você com a graça de Deus, alguns momentos vivendo agora como namorados e outros posteriomente como casados, anseio em ter nossa vida de muito amor e paz no nosso cantinho, sendo sempre gratos e bobos de felicidade por cada dia estarmos cumprindo o proposito que nos foi dado.", 
            name: "",
            image: "aragorn.jpg" 
        },
        {
            text: "E nessas palavras de amor e sinceridade firmo mais e mais ainda meu compromisso e proposito com você, buscar a Deus como centro de nossas vidas e o pilar mais importante para nos edificarmos e sermos de exemplo em um casal temente a Ele.\n\nQuero viver nossa vida de casados eternamente, poder me emocionar no altar com você, te admirar com seu vestido branco e poder olhar nos seus olhos e dizer 'Conseguimos meu amor, conseguimos!'. Não vejo a hora de vivermos esse momento especial em nossa vida e o que vem depois dele, termos nossa lua de mel, nosso canto pra vivermos com paz e prosperidade, nossa familia para nos alegrar e deixar a casa mais viva ainda. Cada momento imagino com clareza e tendo sempre você nesses pensamentos, e me dedicarei bastante para se tornar o homem segundo o coração de Deus, e o homem cuidadoso e amoroso ainda mais aos seus olhos meu amor.\n\n Eu te amo mais doque posso expressar em palavras, Emilli. E quero viver o meu felizes para sempre juntamente a você, te dando amor e cuidado a cada dia, sendo seu homem e podendo contar comigo pro que der e vier na nossa vida, seja bom ou ruim prometo estar ao seu lado sempre como seu marido, seu escudo, suas pernas quando não puder andar, seu porto seguro.", 
            name: "Eu te amo Emilli SZ",
            image: "estel.jpg" 
        }
    ];

    let index = 0;

    function updateTestimonial() {
        document.getElementById("testimonial-text").innerHTML = testimonials[index].text.replace(/\n/g, "<br>");
        document.getElementById("client-name").textContent = testimonials[index].name;
        document.getElementById("testimonial-image").src = testimonials[index].image;
    }

    window.nextTestimonial = function() {
        index = (index + 1);

        if (index === testimonials.length) {
            // Redireciona para a galeria se todas as páginas foram vistas
            window.location.href = "galeria.html";
        } else {
            updateTestimonial();
        }
    }

    window.prevTestimonial = function() {
        index = (index - 1 + testimonials.length) % testimonials.length;
        updateTestimonial();
    }

    updateTestimonial();
});

