import { useId, useState } from 'react'

// Formulário de solicitação do piloto (orçamento de evento, convite de visitante,
// indicação de sócio). Não envia nada — apenas confirma visualmente o envio.
export default function RequestForm({ fields, submitLabel, successMessage }) {
  const [sent, setSent] = useState(false)
  const baseId = useId()

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
    >
      <div className="form-grid">
        {fields.map((f) => {
          const id = `${baseId}-${f.name}`
          return (
            <div
              className={'field' + (f.full ? ' full' : '')}
              key={f.name}
            >
              <label htmlFor={id}>{f.label}</label>
              <input
                id={id}
                name={f.name}
                type={f.type || 'text'}
                placeholder={f.placeholder}
                disabled={sent}
              />
            </div>
          )
        })}
      </div>

      {sent ? (
        <p className="form-note" role="status">
          {successMessage}
        </p>
      ) : (
        <div style={{ marginTop: 14 }}>
          <button className="btn" type="submit">
            {submitLabel}
          </button>
        </div>
      )}
    </form>
  )
}
