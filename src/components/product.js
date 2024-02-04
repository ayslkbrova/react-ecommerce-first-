import React from 'react';
import '../containers/products/products.css';
import { FaPlus } from "react-icons/fa6";


const product = ({ item, basket, setBasket }) => {

  function addBasket() {
    const addFind = basket.find(elementItem => elementItem.id === item.id);
    if (addFind) {
      addFind.amount += 1;
      setBasket([...basket.filter(elementItem => elementItem.id !== item.id), {
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.productImage,
        amount: addFind.amount,   
        category:item.category
      }])
    } 
    else {
      setBasket([...basket, {
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.productImage,
        category:item.category,
        amount: 1
      }])
    }
  }
  return (




    <div className='grid'>
      <div className='products-section'>

        <div className="products-items ">

          <div className="products-item">
            <div className="products-image">
              <img src={item.productImage} />
            </div>
            <div className="products-about">
              <div className="products-category">
                <span className='category'>Chair</span>
                <span className="category-name">{item.name}</span>
              </div>
              <div className="products-price">
                <p className="price">
                  <span>$</span>
                  {item.price}
                </p>
                <div className="add-button" onClick={addBasket}>
                  <FaPlus color='#fff' />
                </div>
              </div>
            </div>

          </div>


        </div>

      </div>

    </div>
  )
}

export default product