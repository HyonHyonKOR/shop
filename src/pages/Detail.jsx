import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
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
  let { id } = useParams();
  let findById = props.shoes.find((item) => item.id == id);
  let [yellowDiv, setYellowDiv] = useState(true);
  let [탭, 탭변경] = useState(0);
  let [dC, setDc] = useState('');

  useEffect(() => {
    let b = setTimeout(() => {
      setDc('end');
    }, 1000);

    return () => {
      setDc('');
    };
  }, []);

  useEffect(() => {
    let a = setTimeout(() => {
      setYellowDiv(false);
    }, 3000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  //let [num, setNum] = useState('');

  // useEffect(() => {
  //   isNaN(num) && alert('not a number');
  // }, [num]);

  return (
    <div className={`container start ${dC}`}>
      {yellowDiv && <YellowDiv />}
      {/* <Box>
        <NewBtn>버튼</NewBtn>
        <YellowBtn bg='blue'>버튼</YellowBtn>
        <YellowBtn bg='orange'>버튼</YellowBtn>
      </Box> */}
      <div className='row'>
        <div className='col-md-6'>
          <img src={`https://codingapple1.github.io/shop/shoes${findById.id + 1}.jpg`} alt='shoes' width='100%' />
        </div>
        <div className='col-md-6'>
          {/* <input
            onChange={(event) => {
              setNum(event.target.value);
            }}
          /> */}
          <h4 className='pt-5'>{findById.title}</h4>
          <p>{findById.content}</p>
          <p>{findById.price}</p>
          <button className='btn btn-danger'>주문하기</button>
        </div>
      </div>
      <Nav variant='tabs' defaultActiveKey='link0'>
        <Nav.Item>
          <Nav.Link onClick={() => 탭변경(0)} eventKey='link0'>
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => 탭변경(1)} eventKey='link1'>
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => 탭변경(2)} eventKey='link2'>
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭} findById={findById} />
    </div>
  );
}

function TabContent({ 탭 }) {
  let [fade, setFade] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setFade('end');
    }, 100);
    return () => {
      setFade('');
    };
  }, [탭]);

  return <div className={`start ${fade}`}>{[<div>wow</div>, <div>내용1</div>, <div>내용2</div>][탭]}</div>;
}

function YellowDiv() {
  return <div className='alert alert-warning'>after 3 seconds! disappear!</div>;
}
