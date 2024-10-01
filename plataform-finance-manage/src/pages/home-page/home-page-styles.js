import styled from 'styled-components'
import React, { useEffect, useState } from 'react';



export const Container = styled.div`
display: flex; /* Torna o container principal flexível */
height: 100vh; /* Ocupa a altura total da tela */
`;

export const Sidebar = styled.div`
width: 100px; /* Largura da Sidebar */
background: transparent; /* Cor de fundo da sidebar */
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 0px;
`;

export const Content = styled.div`
flex: 1; /* Ocupar o restante do espaço */
background: linear-gradient(to right, #ffffff, #ffffff); /* Background da parte vermelha */
padding: 20px;
`;

export const StyleBalanceVision = styled.div`
display: flex;
width: 30%;
height: 250px;
background: #ffffff;
border: 1px solid #ECECEC;
border-radius: 8px;
`;

export const ContainerSearchInput = styled.div`
width: 100%
background-color: transparent;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 8px;
`

export const SearchInputComponent = styled.input`
width: 400px;
height: 35px;
background-color: #ECECEC;
margin-bottom: 32px;
border: none;
border-radius: 8px;
outline: none;
padding-left:12px;

`




// ########## PARTE CARD SALDO ##############

// DUMMY SERVER SALDO
export const SaldoCard = () => {
    const [saldo, setSaldo] = useState(0);
  
    useEffect(() => {
      // Realiza a requisição ao servidor dummy
      fetch('localhost:7000/api/saldo')
        .then((response) => response.json())
        .then((data) => setSaldo(data.saldo))
        .catch((error) => console.error('Erro ao buscar saldo:', error));
    }, []);
  
    return (
      <div className="saldo-card">
        <h2>Saldo Disponível</h2>
        <p>{`R$ ${saldo.toFixed(2)}`}</p>
      </div>
    );
  };


export const StyleSaldoVision = styled.div`
margin-left: 24px;
`




export const ComponentSaldoVision = () => {
    return (
        <StyleBalanceVision>
            {/* Container principal CARD SALDO */}
            <StyleSaldoVision> 
                <SaldoCard/>
                 
            </StyleSaldoVision>
        </StyleBalanceVision>
    )
}