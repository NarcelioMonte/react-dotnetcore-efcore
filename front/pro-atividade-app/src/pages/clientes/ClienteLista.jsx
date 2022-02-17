import {useState} from 'react'
import TitlePage from './../../components/TitlePage';
import {InputGroup, FormControl, Button, Modal, ModalFooter} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const clientes = [
    {
      id: 1,
      nome: 'Microsoft',
      responsavel: 'Bill',
      contato: '12345678',
      situacao: 'Ativo'
    },
    {
      id: 2,
      nome: 'Google',
      responsavel: 'Sundar',
      contato: '23456789',
      situacao: 'Ativo'
    },
    {
      id: 3,
      nome: 'Amazon',
      responsavel: 'Andy',
      contato: '87654321',
      situacao: 'Ativo'
    },
    {
      id: 4,
      nome: 'Meta',
      responsavel: 'Mark',
      contato: '98765432',
      situacao: 'Desativado'
    },
    {
      id: 5,
      nome: 'Twitter',
      responsavel: 'Parag',
      contato: '2345678',
      situacao: 'Em Análise'
    }
]

export default function ClienteLista() {
    const [termoBusca, setTermoBusca] = useState('');
    const navigate = useNavigate();
    //const [cliente, setCliente] = useState({id: 0});

    const novoCliente = () => {
      navigate('/cliente/detalhe');
      console.log('Aqui');
        //setCliente({id: 0});
        //handleClienteModal();
    }

    const handleInputChange = (e) => {
        setTermoBusca(e.target.value);
    }

    const clientesFiltrados = clientes.filter((cliente) => {
        return (
            Object.values(cliente).join(' ').toLowerCase().includes(termoBusca.toLowerCase())
        );
    });

    return (
          <>
              <TitlePage title={'Lista de Clientes'}>
                  <Button variant="outline-secondary" onClick={novoCliente}>
                        <i className='fas fa-plus me-2'></i>
                        Novo Cliente
                  </Button>
              </TitlePage>
                  <InputGroup className="mb-3 mt-3">
                      <InputGroup.Text>Buscar: </InputGroup.Text>
                      <FormControl
                        placeholder="Buscar na Tabela"
                        onChange={handleInputChange}
                    />
                  </InputGroup>
                <table className="table table-striped table-hover">
                    <thead className="table-dark mt-3">
                          <tr>
                            {/*<th scope="col">#</th>*/}
                            <th scope="col">Nome</th>
                            <th scope="col">Responsável</th>
                            <th scope="col">Contato</th>
                            <th scope="col">Situação</th>
                            <th scope="col">Opções</th>
                          </tr>
                    </thead>
                    <tbody>
                        {clientesFiltrados.map((cliente) => (
                          <tr key={cliente.id}>
                              <td>{cliente.nome}</td>
                              <td>{cliente.responsavel}</td>
                              <td>{cliente.contato}</td>
                              <td>{cliente.situacao}</td>
                              <td>
                                  <div>
                                      <button
                                          className="btn btn-sm btn-outline-info me-2"
                                          onClick={() => navigate(`/cliente/detalhe/${cliente.id}`)}>
                                              <i className='fas fa-user-edit me-2'></i>
                                              Editar
                                      </button>
                                      <button className="btn btn-sm btn-outline-danger me-2">
                                          <i className='fas fa-user-times me-2'></i>
                                          Desativar
                                      </button>
                                  </div>
                              </td>
                          </tr>
                        ))}
                    </tbody>
                </table>
          </>
    )
}
