const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/trabalho/trabalho-dados-gerais.json'


async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
}
vizualizarInformacoesGlobais()

const nome = "Lucas";
const idade = 16;
const mensagem = `Oi, eu sou <b>${nome}</b> e tenho <b>${idade}</b> anos.`;

const paragrafo = document.createElement("p");
paragrafo.innerHTML = mensagem;
const section = document.getElementById("principal");
section.appendChild(paragrafo);
// console.log(mensagem);
paragrafo.classList.add("texto-formatado");