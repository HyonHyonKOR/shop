import './App.css';
import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail.jsx';
import axios from 'axios';

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className='App'>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand href='/'>ShoeShop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/detail');
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <div className='main-bg'></div>
              <div className='container'>
                <div className='row'>
                  {shoes.map((shoe, i) => (
                    <Card shoes={shoes[i]} i={i} />
                  ))}
                </div>
              </div>
              <button
                onClick={async () => {
                  try {
                    const result = await axios.get('https://codingapple1.github.io/shop/data2.json');
                    let newShoes = [...shoes, ...result.data];
                    setShoes(newShoes);
                  } catch (error) {
                    console.log(error);
                  }
                }}
              >
                버튼
              </button>
            </>
          }
        />

        <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
        <Route path='*' element={<div>없는 페이지</div>} />

        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>멤버임</div>} />
          <Route path='location' element={<div>위치정보임</div>} />
        </Route>
      </Routes>
    </div>
  );
}

const About = () => {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
};

const Card = (props) => {
  return (
    <div className='col-md-4'>
      <img alt='shoes' src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width='80%' />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
};

export default App;
