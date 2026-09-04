// Fotos reais do clube usadas nas galerias do site público.
// As legendas são um ponto de partida — a secretaria ajusta os anos e os nomes
// exatos dos títulos depois. Cada item: { src, year?, caption, alt }.

import elencoArquibancada from '../assets/time-2025-arquibancada.jpg'
import campoJp from '../assets/campojp.jpeg'
import campoNovo from '../assets/camponovoJP.png'
import campoFundo from '../assets/campo-fundo.jpg'
import timeGol from '../assets/time-comemorando-gol.jpg'
import jogadorAcao from '../assets/jogador-em-acao-1.jpg'
import tetra2025 from '../assets/tetra-invicto-2025-oficial.jpg'
import tri2022a2024 from '../assets/tricampeao-invicto-2022-2024.jpg'
import tacaJaragua2021 from '../assets/titulo-taca-jaragua-2021.jpg'
import titulo2022Amarelo from '../assets/titulo-2022-uniforme-amarelo.jpg'
import tituloInterligas from '../assets/titulo-interligas-comemoracao.jpg'
import tituloBandeira from '../assets/titulo-bandeira-clube.jpg'
import tituloComemoracao from '../assets/titulo-comemoracao-1.jpg'

/* Galeria de Conquistas — abre com o elenco campeão em pé, depois os títulos. */
export const conquests = [
  {
    src: elencoArquibancada,
    year: null,
    caption: 'Elenco campeão de 2025',
    alt: 'Elenco da Sociedade Esportiva João Pessoa reunido na arquibancada, campeão de 2025',
  },
  {
    src: tetra2025,
    year: '2025',
    caption: 'Tetracampeão Invicto',
    alt: 'Time da S.E. João Pessoa comemorando o título de Tetracampeão Invicto de 2025',
  },
  {
    src: tri2022a2024,
    year: '2022–2024',
    caption: 'Tricampeão Invicto',
    alt: 'Comemoração do tricampeonato invicto conquistado entre 2022 e 2024',
  },
  {
    src: tacaJaragua2021,
    year: '2021',
    caption: 'Taça Jaraguá',
    alt: 'Jogadores da S.E. João Pessoa com o troféu da Taça Jaraguá de 2021',
  },
  {
    src: titulo2022Amarelo,
    year: '2022',
    caption: 'Campanha vitoriosa',
    alt: 'Jogadores da S.E. João Pessoa com o uniforme amarelo comemorando um título',
  },
  {
    src: tituloInterligas,
    year: null,
    caption: 'Título da Interligas',
    alt: 'Comemoração do título da Interligas pela S.E. João Pessoa',
  },
  {
    src: tituloBandeira,
    year: null,
    caption: 'Campeões com a bandeira do clube',
    alt: 'Jogadores erguendo a bandeira da Sociedade Esportiva João Pessoa após a conquista',
  },
  {
    src: tituloComemoracao,
    year: null,
    caption: 'A festa da conquista',
    alt: 'Comemoração de um título da Sociedade Esportiva João Pessoa',
  },
]

/* Acervo em imagens — galeria da página /historia (tratamento P&B + zoom no hover). */
export const historyGallery = [
  { src: campoFundo, alt: 'O muro do campo com a inscrição "Somos João Pessoa"' },
  { src: campoJp, alt: 'O campo da Sociedade Esportiva João Pessoa em dia de jogo' },
  { src: tri2022a2024, alt: 'Comemoração do tricampeonato invicto conquistado entre 2022 e 2024' },
  { src: tituloComemoracao, alt: 'A festa da conquista de um título da Sociedade Esportiva João Pessoa' },
  { src: jogadorAcao, alt: 'Jogador da Sociedade Esportiva João Pessoa em ação no campo' },
  { src: timeGol, alt: 'O time da Sociedade Esportiva João Pessoa comemorando um gol' },
]

/* Patrimônio / campo — grid de fotos marcantes no hub /o-clube. */
export const clubPatrimonio = [
  { src: campoJp, alt: 'O campo da Sociedade Esportiva João Pessoa em dia de jogo' },
  { src: campoNovo, alt: 'Vista ampla do gramado do clube' },
  { src: elencoArquibancada, alt: 'Elenco da Sociedade Esportiva João Pessoa reunido na arquibancada' },
  { src: tituloBandeira, alt: 'Jogadores erguendo a bandeira da Sociedade Esportiva João Pessoa' },
]
