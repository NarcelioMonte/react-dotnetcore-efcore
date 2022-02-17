import React from 'react'
import { Button } from 'react-bootstrap';
import TitlePage from './../../components/TitlePage';
import { useNavigate, useParams } from 'react-router-dom';

export default function ClienteForm() {
    const navigate = useNavigate();
    const {id} = useParams();

    const novoCliente = () => {
        navigate('/cliente/lista');
    }

    return (
      <>
              <TitlePage
                  title={'Detalhes do Cliente ' + (id !== undefined ? id : '')}>
                  <Button variant="outline-secondary" onClick={() => navigate('/cliente/lista')}>
                          <i className='fas fa-arrow-left me-2'></i>
                          Voltar
                  </Button>
              </TitlePage>
              <div></div>
          </>
    )
}
