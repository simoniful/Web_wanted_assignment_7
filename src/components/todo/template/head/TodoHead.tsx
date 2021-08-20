import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  border-bottom: 3px solid #33bb77;
`;

const DateContainer = styled.div``;

const DateText = styled.span`
  font-size: 26px;
  color: #119955;
  padding-left: 10px;
`;

const DayText = styled.span`
  font-size: 22px;
  color: #119955;
  padding-top: 5px;
`;

const TimeText = styled.div`
  font-size: 18px;
  color: #119955;
  padding-top: 5px;
`;

const TodoHead = () => {
  let timer: any = null;
  const [time, setTime] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const [date, setDate] = useState<string>('');

  const getTime = () => {
    const date = new Date();
    const filterTime = date.toLocaleTimeString('en-US');
    const filterDay = date.toLocaleDateString('en-US', { dateStyle: 'full' }).split(',')[0];
    const filterDate = date.toLocaleDateString('en-US', { dateStyle: 'full' }).split(',').slice(1, 3).join(',');
    setTime(filterTime);
    setDay(filterDay);
    setDate(filterDate);
  };

  useEffect(() => {
    timer = setInterval(getTime, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <TodoHeadBlock>
      <DateContainer>
        <DayText>{day}</DayText>
        <DateText>{date}</DateText>
      </DateContainer>
      <TimeText>{time}</TimeText>
    </TodoHeadBlock>
  );
};

export default React.memo(TodoHead);
