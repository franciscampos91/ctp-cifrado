console.log('Carrega Hinos...')



async function carregarHino() {
  const resp = await fetch("../data/hinario-ctp.json");
  const hinos = await resp.json();
  const hino = hinos[0]; // pega o primeiro (id 136)
  
  const container = document.getElementById("hino");
  container.innerHTML = `<h2>${hino.id} - ${hino.titulo}</h2>`;
  
hino.partes.forEach(parte => {
  container.innerHTML += `<h3>${parte.numero}.</h3>`;
  parte.linhas.forEach(linha => {
    container.innerHTML += `<p>${formatarCifras(linha)}</p>`;
  });
});
}

function formatarCifras(texto) {
  const partes = texto.split(/(\[[^\]]+\])/g); // Separa os acordes
  let resultado = '';
  let acordeAtual = null;

  for (const parte of partes) {
    if (parte.startsWith('[') && parte.endsWith(']')) {
      // Parte é um acorde: salva o acorde atual (sem os colchetes)
      acordeAtual = parte.slice(1, -1);
    } else if (parte.length > 0) {
      if (acordeAtual) {
        // Se temos acorde pendente, aplica-o à próxima palavra
        resultado += `<span class="cifra"><span class="acorde">${acordeAtual}</span><span class="letra">${parte}</span></span>`;
        acordeAtual = null; // Limpa acorde
      } else {
        // Palavra sem acorde
        resultado += `<span class="cifra"><span class="acorde">&nbsp;</span><span class="letra">${parte}</span></span>`;
      }
    }
  }

  return resultado;
}


carregarHino();
