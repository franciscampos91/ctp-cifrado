// hinos esta sendo importado no index
const indiceHinos = document.getElementById('indiceHinos');

function carregaListaHinos() {

    console.table(hinos)

    hinos.forEach(hino => {
        
        indiceHinos.innerHTML += `<a href="pages/hino.html?num=${hino.numero}">
                                    <li class="indice__hino">
                                        <div class="indice__num"><div>${hino.numero}</div></div>
                                        <div class="indice__nome">${hino.titulo}</div>
                                        <div class="indice__primeira">${hino.primeira}</div>
                                        <div class="indice__assunto">
                                            <span>assunto...</span>
                                        </div>
                                        <div class="indice__tom">${hino.tom}</div>
                                        <div class="indice__coracao">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                                        </div>
                                    </li>
                                </a>`;


    });
    







}


carregaListaHinos();