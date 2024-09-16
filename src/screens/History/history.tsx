import React from 'react';
import Header from '../../components/Header/header.component';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHistory} from '@fortawesome/free-solid-svg-icons/faHistory';
import {Container, HistoryText} from './history.styles';

const History = () => {
  return (
    <>
      <Header title="Histórico de Compras" />
      <Container>
        <FontAwesomeIcon size={50} icon={faHistory} color="gray" />
        <HistoryText>Sem compras recentes.</HistoryText>
      </Container>
    </>
  );
};

export default History;
