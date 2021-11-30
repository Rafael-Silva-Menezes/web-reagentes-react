import React from 'react';
import { CadastroContainer,CadastroSpan, CadastroFormGroup, CadastroInput, CadastroButton,CadastroButtonFinalizar } from './styles';

const CadastroReagentes: React.FC = ({ children }) => {
    return (
        <CadastroContainer>
            <CadastroSpan>
                <h2>
                Cadastrar Reagentes
                </h2>
            </CadastroSpan>
            <CadastroFormGroup>
                <CadastroInput type="text" placeholder="Nome do Reagente"/>
                <CadastroInput type="text" placeholder="Código" />
                <CadastroButton type="submit">
                    <CadastroSpan>
                        Adicionar
                    </CadastroSpan>
                </CadastroButton>
            </CadastroFormGroup>
            <CadastroButtonFinalizar>
                Finalizar Cadastro
            </CadastroButtonFinalizar>
            
        </CadastroContainer>
    );
  };

export default CadastroReagentes;