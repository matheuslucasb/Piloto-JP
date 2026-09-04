# Sociedade Esportiva João Pessoa — Piloto

Piloto do app de gestão do clube, recriado a partir do protótipo
`clube-piloto-v3.html` como projeto **React + Vite**.

O piloto simula um **login único com três tipos de acesso** (tela inicial `/`).
No sistema real seria um só login; aqui cada card leva direto para a área
correspondente. A barra superior mostra o acesso ativo e o botão
**Trocar de acesso** volta para a tela de login.

- **Visitante** (`/visitante`) — vê a grade de quadras e pede orçamento do salão
  de eventos informando nome e telefone.
- **Área do sócio** (`/socio`) — Reservar, Meus horários, Agenda do clube,
  Financeiro, Consumo no quiosque, Perfil / Carteirinha, Comunicados,
  Documentos e indicações.
- **Painel administrativo** (`/admin`) — Visão geral, Financeiro (entradas ×
  saídas com gráfico), Quadras, Sócios, Eventos, Agenda geral, Estoque.

## Rodando

```bash
npm install
npm run dev
```

- `npm run dev` — servidor de desenvolvimento (Vite)
- `npm run build` — build de produção em `dist/`
- `npm run preview` — serve o build gerado

## Estrutura

```
src/
  main.jsx                 entrada — monta o React Router
  App.jsx                  rotas: /, /visitante, /socio/*, /admin/*
  navigation.js            itens de menu das áreas do sócio e do admin
  index.css                estilos globais (tokens de tema claro/escuro)
  data/
    clubData.js            todos os dados fictícios do piloto
  components/
    TopBar.jsx             barra superior — acesso ativo + "Trocar de acesso"
    SideNav.jsx            sidebar com menu (variante 'light' sócio / 'dark' admin)
    Brand.jsx              monograma "SE" + nome do clube
    PageHeader.jsx         título + subtítulo de cada página
    Card.jsx               container branco (título + subtítulo opcionais)
    KpiCard.jsx            indicador com variação (visão geral)
    Tag.jsx                etiqueta de status (ok / late / soon / info)
    Timeline.jsx           linha do tempo de compromissos (agenda)
    IdCard.jsx             carteirinha digital do sócio
    Announcement.jsx       comunicado da diretoria
    RequestForm.jsx        formulário de solicitação (confirma o envio na tela)
    CourtSchedule.jsx      toggle de quadra + grade + legenda
    WeekGrid.jsx           grade semanal (modo 'member' / 'admin' / 'guest')
    MonthGrid.jsx          calendário do mês (eventos)
    MembersTable.jsx       tabela de sócios + ação "Gerar PIX"
    guest/
      GuestLayout.jsx      barra superior + conteúdo centralizado (visitante)
    member/
      MemberLayout.jsx     barra superior + sidebar clara + conteúdo
    admin/
      AdminLayout.jsx      barra superior + sidebar escura + conteúdo
    charts/
      useChartColors.js    lê as cores dos tokens CSS (acompanha o tema)
      EntriesExpensesChart.jsx   barras entradas × saídas (visão geral)
      FinanceChart.jsx           linhas entradas × saídas (financeiro)
  pages/
    Login.jsx              /                 escolha do tipo de acesso
    guest/
      GuestHome.jsx        /visitante        quadras + orçamento de evento
    member/
      Book.jsx             /socio            Reservar quadra
      MySlots.jsx          /socio/horarios   Meus horários
      MemberAgenda.jsx     /socio/agenda     Agenda do clube
      MemberFinance.jsx    /socio/financeiro Financeiro do sócio
      Consumo.jsx          /socio/consumo    Consumo no quiosque
      Perfil.jsx           /socio/perfil     Perfil / Carteirinha
      Comunicados.jsx      /socio/comunicados Comunicados da diretoria
      Documentos.jsx       /socio/documentos Documentos, convite e indicação
    admin/
      Overview.jsx         /admin            Visão geral
      Finance.jsx          /admin/financeiro Financeiro (gráfico + lançamentos)
      Courts.jsx           /admin/quadras    Quadras
      Members.jsx          /admin/socios     Sócios
      Events.jsx           /admin/eventos    Salão de eventos
      Calendar.jsx         /admin/agenda     Agenda geral do clube
      Stock.jsx            /admin/estoque    Estoque (bar + material esportivo)
```

## Gráficos

Usam [Recharts](https://recharts.org). A série de entradas × saídas fica em
`financeSeries` dentro de [`src/data/clubData.js`](src/data/clubData.js); as cores
acompanham o tema via `useChartColors`.

## Trocar os dados fictícios

Tudo que é "mock" está em [`src/data/clubData.js`](src/data/clubData.js).
Para ligar a uma API real, substitua os exports desse arquivo (ou troque por
chamadas `fetch` dentro de cada página) sem mexer nos componentes.
