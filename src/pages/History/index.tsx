import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>25 minutos</td>
              <td>Há 1 mês</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Tarefa 2</td>
              <td>60 minutos</td>
              <td>Há 2 mês</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>10 minutos</td>
              <td>Há 3 mês</td>
              <td>Concluído</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
