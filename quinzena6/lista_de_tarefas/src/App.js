import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 300px;
`

const Tarefa = styled.li`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-start: ${({ completa }) => (completa ? 3 : 1)};
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};

`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {

  state = {
    tarefas: [],
    inputValue: '',
    filtro: '',
    editValue: '',
    filtroEdit: '',
  }

  componentDidUpdate() {
    localStorage.setItem("Tarefas", JSON.stringify(this.state.tarefas));
  };

  componentDidMount() {
    const tarefaString = localStorage.getItem("Tarefas");
    console.log("tarefa string", tarefaString)

    if (tarefaString) {
      const tarefaObjeto = JSON.parse(tarefaString);

      this.setState({
        tarefas: tarefaObjeto,
      });
    };

  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  onChangeEdit = (event) => {
    this.setState({ editValue: event.target.value });
  }

  criaTarefa = () => {
    const tarefaCriada = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    this.setState({
      tarefas: [...this.state.tarefas, tarefaCriada],
      inputValue: "",
    })
  }

  apagarTarefa = (id) => {
    const arrayTarefasFiltradas = this.state.tarefas.filter((tarefa) => {
      return tarefa.id !== id
    })

    this.setState({ tarefas: arrayTarefasFiltradas })
  }

  apagarTodasTarefas = () => {
    this.setState({ tarefas: [] })
  }

  onClickEditarTarefa = () => {
    this.setState({
      filtroEdit: true
    })
  }

  selectTarefa = (id) => {
    const novasTarefas = this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return {
          ...tarefa,
          completa: !tarefa.completa
        }
      } else {
        return tarefa;
      }
    })

    this.setState({ tarefas: novasTarefas });
  };

  onChangeFilter = (event) => {
    console.log(event.target.value)
    this.setState({ filtro: event.target.value })
  }

  render() {

    const tarefasEditadas = () => {
      if (this.state.filtroEdit) {
        return (
          <div>
            <p>Editar Tarefa</p>
            <InputsContainer>
              <input value={this.state.editValue} onChange={this.onChangeEdit}></input>
            </InputsContainer>
            <button onClick={this.onClickOk}>OK</button>
          </div>
        )
      }
    }

    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })



    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
          <button onClick={this.apagarTodasTarefas}>Apagar todas tarefas</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <InputsContainer>
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto}
                </Tarefa>
                <button onClick={() => this.apagarTarefa(tarefa.id)}> Apagar Tarefa </button>
                <button onClick={this.onClickEditarTarefa}> Editar Tarefa </button>
              </InputsContainer>
            )
          })}
        </TarefaList>
        {tarefasEditadas()}
      </div>
    )
  }
}

export default App
