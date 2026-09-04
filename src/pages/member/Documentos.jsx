import { useState } from 'react'
import PageHeader from '../../components/PageHeader.jsx'
import Card from '../../components/Card.jsx'
import RequestForm from '../../components/RequestForm.jsx'
import { clubDocuments } from '../../data/clubData.js'

function DocRow({ titulo }) {
  const [asked, setAsked] = useState(false)
  return (
    <div className="doc-row">
      <span>{titulo}</span>
      {asked ? (
        <span className="pix-done">Enviado por e-mail ✓</span>
      ) : (
        <button className="btn ghost" type="button" onClick={() => setAsked(true)}>
          Baixar PDF
        </button>
      )}
    </div>
  )
}

export default function Documentos() {
  return (
    <section className="panel">
      <PageHeader
        title="Documentos e indicações"
        subtitle="Regulamento do clube, e formas de trazer mais gente pra perto."
      />

      <h2 className="section-title" style={{ marginTop: 0 }}>
        Documentos
      </h2>
      {clubDocuments.map((doc) => (
        <DocRow key={doc.titulo} titulo={doc.titulo} />
      ))}

      <h2 className="section-title">Convidar um visitante</h2>
      <Card>
        <RequestForm
          fields={[
            { name: 'convidado', label: 'Nome do convidado', placeholder: 'Nome completo' },
            { name: 'data', label: 'Data da visita', placeholder: 'dd/mm/aaaa' },
          ]}
          submitLabel="Registrar convidado"
          successMessage="Convidado registrado. Ele será liberado na portaria na data informada."
        />
      </Card>

      <h2 className="section-title">Indicar um novo sócio</h2>
      <Card sub="Indique um amigo e, quando ele se associar, você ganha um mês de desconto na mensalidade.">
        <RequestForm
          fields={[
            {
              name: 'indicado',
              label: 'Nome e telefone do indicado',
              placeholder: 'Ex: Ana Souza — (83) 99999-0000',
              full: true,
            },
          ]}
          submitLabel="Enviar indicação"
          successMessage="Indicação enviada. A secretaria entra em contato com a pessoa indicada."
        />
      </Card>
    </section>
  )
}
