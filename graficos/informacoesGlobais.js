const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/transporte/transporte-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()

    const PessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const PessoasQueTrabalham = (dados.total_trabalhadores_mundo / 1e9)
    const PessoasNecessitamTransporte = (dados.total_pessoas_que_necessitam_transporte_para_trabalho / 1e9)
    const TempoDeDeslocamento = (dados.tempo_medio_deslocamento_para_trabalho)

    const horas = parseInt(dados.tempo_medio_deslocamento_para_trabalho)
    const minutos = Math.round((dados.tempo_medio_deslocamento_para_trabalho - horas) * 60)

    const PorcentagemDeTrabalhadores = ((PessoasQueTrabalham / PessoasNoMundo ) * 100).toFixed(0)
    const PorcentagemTransporteDoMundo = ((PessoasNecessitamTransporte / PessoasNoMundo ) * 100).toFixed(0)
    const PorcentagemTansporteDosTrabalham = ((PessoasNecessitamTransporte / PessoasQueTrabalham ) * 100).toFixed(0)


    console.log(dados)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `No mundo com <span> ${PessoasNoMundo} </span> bilhões de pessoas, cerca de <span>${PessoasQueTrabalham} bilhões </span> fazem parte da força de trabalho global, e <span>${PessoasNecessitamTransporte} bilhões </span> delas dependem de transporte para chegar ao trabalho. Isso significa que, apenas <span> ${PorcentagemDeTrabalhadores} % </span>no mundo tem trabalho. Do total de pessoas no mundo <span> ${PorcentagemTransporteDoMundo} % </span> utilizam transporte e dos que trabalham <span> ${PorcentagemTansporteDosTrabalham} % </span> precisam de transporte. E dos que utilizam transporte, estes gastam <span> ${horas} horas</span> e <span> ${minutos} minutos</span> do tempo do dia para deslocamento. Esse tempo, embora pareça curto, simboliza a resiliência e busca por melhores oportunidades.
`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais()