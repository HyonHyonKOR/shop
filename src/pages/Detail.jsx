import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import styled from 'styled-components';

// let YellowBtn = styled.button`
//   background: ${(props) => props.bg};
//   color: ${(props) => (props.bg == 'blue' ? 'white' : 'black')};
//   padding: 10px;
// `;

// let Box = styled.div`
//   background: grey;
//   padding: 20px;
// `;

//let NewBtn = styled.button(YellowBtn);

export default function Detail(props) {
  useEffect(() => {
    let a = setTimeout(() => {
      setYellowDiv(false);
    }, 2000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  let { id } = useParams();
  let findById = props.shoes.find((item) => item.id == id);
  let [yellowDiv, setYellowDiv] = useState(true);
  let [num, setNum] = useState('');

  useEffect(() => {
    isNaN(num) && alert('not a number');
  }, [num]);

  return (
    <div className='container'>
      {yellowDiv && <YellowDiv />}
      {/* <Box>
        <NewBtn>버튼</NewBtn>
        <YellowBtn bg='blue'>버튼</YellowBtn>
        <YellowBtn bg='orange'>버튼</YellowBtn>
      </Box> */}
      <div className='row'>
        <div className='col-md-6'>
          <img src={findById.src} alt='shoes' width='100%' />
        </div>
        <div className='col-md-6'>
          <input
            onChange={(event) => {
              setNum(event.target.value);
            }}
          />
          <h4 className='pt-5'>{findById.title}</h4>
          <p>{findById.content}</p>
          <p>{findById.price}</p>
          <button className='btn btn-danger'>주문하기</button>
        </div>
      </div>
    </div>
  );
}

function YellowDiv() {
  return <div className='alert alert-warning'>2초 이내 구매시 할인</div>;
}
