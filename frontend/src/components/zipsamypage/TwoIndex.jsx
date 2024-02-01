import styled from 'styled-components';
import { useState } from 'react';
import TwoIndexRoute from './TwoIndexRoute';

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 377px;
  margin: 5px 0px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const IndexBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  display: flex;
  /* background-color: blue; */
`;

const SelectedIndex = styled.div`
  width: 50%;
  height: 100%;
  padding: 15px 0px 0px;
  display: flex;
  flex-direction: column;
  background-color: white;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  border-radius: 25px;
  > span {
    cursor: pointer;
  }
`;

const UnSelectedIndex = styled.div`
  width: 50%;
  height: 100%;
  padding: 15px 0px 0px;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: #a3a3a3;
  border-radius: 25px;
  > span {
    cursor: pointer;
  }
`;

function TwoIndex({ name, gradeId, gradeName, avgScore }) {
  // 클릭 이벤트 핸들러 함수 정의
  const [index, setIndex] = useState('GRADE');

  return (
    <Wrapper>
      <IndexBox>
        {index === 'GRADE' ? (
          <SelectedIndex>
            <span onClick={() => setIndex('GRADE')}>집사 등급</span>
          </SelectedIndex>
        ) : (
          <UnSelectedIndex>
            <span onClick={() => setIndex('GRADE')}>집사 등급</span>
          </UnSelectedIndex>
        )}
        {index === 'DIA' ? (
          <SelectedIndex>
            <span onClick={() => setIndex('DIA')}>다이아 점수</span>
          </SelectedIndex>
        ) : (
          <UnSelectedIndex>
            <span onClick={() => setIndex('DIA')}>다이아 점수</span>
          </UnSelectedIndex>
        )}
      </IndexBox>

      <TwoIndexRoute
        index={index}
        name={name}
        gradeId={gradeId}
        gradeName={gradeName}
        avgScore={avgScore}
      ></TwoIndexRoute>
    </Wrapper>
  );
}

export default TwoIndex;
