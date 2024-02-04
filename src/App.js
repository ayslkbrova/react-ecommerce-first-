import React from 'react'
import { Header, Footer, About, Contact, Feedback, Card } from './containers';
import { Navbar, Search, Basket } from './components';
import { product } from './product';
import Productfile from './components/product';
import { useState, useEffect } from 'react';
import "./App.css";
const App = () => {
  const [basket, setBasket] = useState([]);
  const [cost, setCost] = useState("");
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);
  const [value, setValue] = useState("")
  useEffect(() => {
    const totalPrice = basket.reduce((pre, basket) => pre + (basket.amount * basket.price), 0);
    setCost(totalPrice)
  }, [basket]);


  const filterValue = product.filter((data) => {
    console.log(data)
    return data.name.toLowerCase().includes(value.toLowerCase());
  })



  return (
    <div className='App'>
      <div className='bg'>

        <Navbar show={show} setShow={setShow} search={search} setSearch={setSearch} menu={menu} setMenu={setMenu} />
        {
          search ? <Search search={search} setSearch={setSearch} value={value} setValue={setValue} basket={basket} setBasket={setBasket} /> : null
        }
        <Header />
      </div>
      <Card />
      <div className='product-container'>
        <div className='productBox'>
       
          {
            filterValue.map(item => (
              <Productfile key={item.id} basket={basket} setBasket={setBasket} item={item} />
            ))
          }
          {/* {
            product.map(item => (
              <Productfile key={item.id} basket={basket} setBasket={setBasket} item={item} />
            ))
          } */}
        </div>
      </div>

      {
        show ? <Basket basket={basket} cost={cost} show={show} setShow={setShow} /> : null
      }


      <About />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
