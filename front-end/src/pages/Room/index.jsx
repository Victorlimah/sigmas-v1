/* eslint-disable react-hooks/exhaustive-deps */
import * as S from './styles';

import Header from '../../components/Header';

import { useState, useEffect } from 'react';

import { roomDefault, getRoomDetails } from "../../services/mock/room";
import { getClassesByRoomId } from "../../services/api/classesService";

export default function Room() {
  const [day, setDay] = useState('segunda');
  const blockId = window.location.pathname.split('/')[2];
  const number = window.location.pathname.split('/')[3];
  const days = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'];

  const [room, setRoom] = useState(roomDefault);
  const [tags, setTags] = useState(roomDefault.tags);

  useEffect(() => {
    async function getClasses() {
      const response = await getClassesByRoomId(blockId, number);
      console.log(response);
      setRoom(response);
      setTags(response.tags);
    }
    getClasses();
  }, []);

  const { name, capacity } = room;

  return (
    <>
      <Header />
      <S.Container>
        <S.Header>
          <S.NameRoom>{name}</S.NameRoom>
        </S.Header>
        <S.Tags>
          <S.Tag>CAPACIDADE: {capacity}</S.Tag>
          {tags?.map((tag, index) => (
            <S.Tag key={index}>{tag}</S.Tag>
          ))}
        </S.Tags>
        <S.Day>
          {days.map((today, index) => (
            <S.DayButton
              key={index}
              onSelect={day === today}
              onClick={() => setDay(today)}
            >
              {capitalize(today)}
            </S.DayButton>
          ))}
        </S.Day>

        {room[day]?.map( (disciplina, index) => {

          // se o proximo elemento tiver o disciplina.name igual ao atual, ele não renderiza
          // mas deve alterar o schedule usando a antes do "-" do primeiro elemento e a depois do "-" do segundo elemento

          let schedule = disciplina.schedule;
          const next = room[day][index + 1];
          if (next && next.name === disciplina.name) {
            schedule = `${disciplina?.schedule?.split('-')[0]}-${next?.schedule?.split('-')[1]}`;
          }

          // se o disciplina.name for igual ao anterior, ele não renderiza
          if (room[day][index - 1] && room[day][index - 1].name === disciplina.name) {
            return null;
          }



          return(
          <S.Card>
            <S.CardHeader>
              <S.CardSubtitle>{disciplina.students} alunos | {schedule}</S.CardSubtitle>
              <S.CardTitle>{disciplina.name}</S.CardTitle>
            </S.CardHeader>
            <S.CardBody>
              <S.CardSubtitle>{disciplina.teacher}</S.CardSubtitle>
            </S.CardBody>
          </S.Card>
        )})}

        {room[day]?.length === 0 && (
          <S.Card>
            <S.CardHeader>
              <S.CardTitle>Nenhuma aula cadastrada</S.CardTitle>
            </S.CardHeader>
          </S.Card>
        )}
      </S.Container>
    </>
  );

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
