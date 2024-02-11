import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createArticle } from '../../apis/api/board';
import NavigationBar from '../../components/common/NavigationBar';
import Image from '../../components/common/Image';
import Paragraph from '../../components/common/Paragraph';
import Input from '../../components/common/Input';
import LongInputBox from '../../components/common/LongInputBox';
import BoardsTags from '../../components/boards/BoardsTags';

const Wrapper = styled.div`
  width: 320px;
  min-height: 568px;
  margin: 0 auto;
  padding: 0px 16px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 300;
  white-space: pre-wrap;
`;

const ParagraphWrapper = styled.div`
  margin-bottom: 40px;
`;

const SubTitle = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  font-size: 20px;
  font-weight: light;
`;

const TagWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-content: center;
  gap: 8px;
  overflow: scroll;
  /* background: #f0d9ff; */
  overflow: auto;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
`;

// 여기는 '전체' 선택지가 없어용
const allTags = [
  '맛집 추천',
  '동네 소식',
  '집사 후기',
  '동네 모임',
  '생활 꿀팁',
  '일상 공유',
];
const tagLength = allTags.length;

function CreateBoard() {
  // NavigationBAr 사용 위한 변수 선언
  const navigate = useNavigate();
  const onPrevious = () => {
    navigate(-1);
  };
  const onNext = () => {
    navigate(`/boards/`);
    // console.log('새 게시글 생성 완료')
    // console.log(userId)
    // console.log(title)
    // console.log(content)
    // console.log(tagList)
    createArticle(userId, title, content, tagList).then(response => {
      console.log(response);
    });
  };

  // tagCheckList의 상태를 관리할 useState 함수
  const tagCheckList = Array.from({ length: tagLength }, () => false);
  const [isSelected, setIsSelected] = useState(tagCheckList);

  // 누르면 check값이 토글되는 함수
  const toggleSelected = idx => {
    setIsSelected(array => [
      ...array.slice(0, idx),
      !array[idx],
      ...array.slice(idx + 1),
    ]);
  };

  // POST 요청 보낼 data 선언하기
  const userId = 6;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tagList, setTagList] = useState([]);

  // 선택된 태그만 받기
  useEffect(() => {
    const tagIndex = [1, 2, 3, 4, 5, 6];
    const filtered = tagIndex.filter((element, index) => {
      if (isSelected[index]) {
        return element;
      }
    });
    setTagList(filtered);
  }, [isSelected]);
  // console.log(`태그에 변화 발생 : ${tagList}`)

  return (
    <Wrapper>
      <NavigationBar
        leftContent={
          <Image
            src={`${process.env.PUBLIC_URL}/images/keyboard_arrow_left.svg`}
            width={'40px'}
            height={'40px'}
            margin={'0 0 0 -12px'}
          ></Image>
        }
        onPrevious={onPrevious}
        rightContent="등록"
        onNext={onNext}
      ></NavigationBar>

      <ParagraphWrapper>
        <Paragraph
          gap="5px"
          fontSize="35px"
          sentences={['새 게시물 작성하기']}
        ></Paragraph>
      </ParagraphWrapper>

      <div>
        <SubTitle>제목</SubTitle>
        <Input
          type={'text'}
          width={'100%'}
          maxLength={50}
          placeholder={'제목을 입력해 주세요'}
          value={title}
          onChange={event => setTitle(event.target.value)}
        ></Input>
      </div>

      <SubTitle>태그</SubTitle>
      <TagWrapper>
        {allTags.map((tag, idx) => (
          <BoardsTags
            key={idx}
            mode={isSelected[idx] ? 'LARGE_SELECTED' : 'LARGE'}
            tagname={tag}
            onClick={() => toggleSelected(idx)}
            // onChange={()=> addSelectedTags(idx)}
          ></BoardsTags>
        ))}
      </TagWrapper>

      <LongInputBox
        title={'내용'}
        placeholder={'내용을 입력해 주세요'}
        maxLength={300}
        value={content}
        onChange={event => setContent(event.target.value)}
      ></LongInputBox>
    </Wrapper>
  );
}

export default CreateBoard;
