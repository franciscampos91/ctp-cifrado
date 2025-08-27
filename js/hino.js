const params = new URLSearchParams(window.location.search);

if (params.has("num")) {
  const numero = params.get("num");

  carregarHino(numero);
}

function carregarHino(numero) {
  const hino = hinos.find(h => h.numero == numero);
  if (!hino) return;

  const container = document.getElementById("hino");

  let html = `
    <h2>${hino.numero} - ${hino.titulo}</h2>
    <p><b>Nome original:</b> ${hino.original}</p>
    <p><b>Autor:</b> ${hino.autor}</p>
    <p><b>Arranjo:</b> ${hino.arranjo ?? ""}</p>
    <p><b>Assunto(s):</b> ${hino.assunto.join(", ")}</p>
    <p><b>Tom:</b> ${hino.tom}</p>
  `;

  // Estrofes
  hino.estrofes.forEach((parte) => {
    html += `<h3>Parte ${parte.numero}</h3>`;
    parte.linhas.forEach((linha) => {
      html += `<p>${formatarCifras(linha)}</p>`;
    });

    if (hino.coro != "") {
      html += `<h3>Coro</h3>`;
      hino.coro.forEach((linha) => {
        html += `<p>${formatarCifras(linha)}</p>`;
      });
    }

  });


  container.innerHTML = html;
}


function formatarCifras(texto) {
  const partes = texto.split(/(\[[^\]]+\])/g);
  let resultado = "";
  let acordeAtual = null;

  for (const parte of partes) {
    if (parte.startsWith("[") && parte.endsWith("]")) {
      // Guardar acorde para próxima letra OU exibir sozinho
      if (acordeAtual) {
        // se já tinha acorde pendente sem letra, mostra ele sozinho
        resultado += `<span class="cifra"><span class="acorde">${acordeAtual}</span><span class="letra">&nbsp;</span></span>`;
      }
      acordeAtual = parte.slice(1, -1);
    } else if (parte.length > 0) {
      // Tem letra junto do acorde
      if (acordeAtual) {
        resultado += `<span class="cifra"><span class="acorde">${acordeAtual}</span><span class="letra">${parte}</span></span>`;
        acordeAtual = null;
      } else {
        resultado += `<span class="cifra"><span class="acorde">&nbsp;</span><span class="letra">${parte}</span></span>`;
      }
    }
  }

  // Se sobrar acorde no final da linha, imprime ele sozinho
  if (acordeAtual) {
    resultado += `<span class="cifra"><span class="acorde">${acordeAtual}</span><span class="letra">&nbsp;</span></span>`;
  }

  return resultado;
}
