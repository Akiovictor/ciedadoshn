const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/transporte/transporte-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `No mundo com <span>${dados.total_trabalhadores_mundo} </span> bilhões de pessoas, cerca de <span>${dados.total_pessoas_que_necessitam_transporte_para_trabalho} </span> fazem parte da força de trabalho global, e <span>${dados.tempo_medio_deslocamento_para_trabalho} </span> delas dependem de transporte para chegar ao trabalho. Isso significa que, apenas <pan>38% (=3/7,888) </span>no mundo tem trabalho. Do total de pessoas no mundo <span>25% </span>utilizam transporte e dos que trabalham 67% precisam de transporte. E dos que utilizam transporte, estes gastam <span>3,75% (0,9/24) </span> do tempo do dia para deslocamento. Esse tempo, embora pareça curto, simboliza a resiliência e busca por melhores oportunidades.
`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais()