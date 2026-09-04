import { useState } from 'react'
import Tag from './Tag.jsx'

export default function MembersTable({ members }) {
  const [paid, setPaid] = useState(() => new Set())

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Categoria</th>
            <th scope="col">Vencimento</th>
            <th scope="col">Status</th>
            <th scope="col" aria-label="Cobrança" />
          </tr>
        </thead>
        <tbody>
          {members.length === 0 && (
            <tr>
              <td className="table-empty" colSpan={5}>
                Nenhum sócio encontrado com esse nome.
              </td>
            </tr>
          )}
          {members.map((m) => {
            const isOk = m.status === 'ok'
            const pixSent = paid.has(m.nome)
            return (
              <tr key={m.nome}>
                <td>{m.nome}</td>
                <td>{m.categoria}</td>
                <td>{m.venc}</td>
                <td>
                  <Tag variant={isOk ? 'ok' : 'late'}>
                    {isOk ? 'Em dia' : 'Atrasado'}
                  </Tag>
                </td>
                <td>
                  {isOk ? (
                    <button className="btn ghost" disabled>
                      Em dia
                    </button>
                  ) : pixSent ? (
                    <span className="pix-done">PIX enviado ✓</span>
                  ) : (
                    <button
                      className="btn pix"
                      onClick={() =>
                        setPaid((prev) => new Set(prev).add(m.nome))
                      }
                    >
                      Gerar PIX
                    </button>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
