import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { GrLinkNext } from "react-icons/gr";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './products.css';





const products = ({ item, basket, setBasket }) => {

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





    <div>

      <div className="swiper-button-prev"><GrLinkNext /></div>




      <div className='products-section'>
        <div className="products-items">
      

          <SwiperSlide>
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
          </SwiperSlide>
        </div>

      </div>



      {/*
         <SwiperSlide>
              <div className="products-item">
                <div className="products-image">
                  <img src={productImagenumber1} alt="" />
                </div>
                <div className="products-about">
                  <div className="products-category">
                    <span className='category'>Chair</span>
                    <span className="category-name">Sakarias Armchair</span>
                  </div>
                  <div className="products-price">
                    <p className="price">
                      <span>$</span>
                      392
                    </p>
                    <div className="add-button">
                      <FaPlus color='#fff' />
                    </div>
                  </div>
                </div>

              </div>

            </SwiperSlide>

            <SwiperSlide>
              <div className="products-item">
                <div className="products-image">
                  <img src={productImagenumber2} alt="" />
                </div>
                <div className="products-about">
                  <div className="products-category">
                    <span className='category'>Chair</span>
                    <span className="category-name">Sakarias Armchair</span>
                  </div>
                  <div className="products-price">
                    <p className="price">
                      <span>$</span>
                      392
                    </p>
                    <div className="add-button">
                      <FaPlus color='#fff' />
                    </div>
                  </div>
                </div>
              </div>

            </SwiperSlide>

            <SwiperSlide>
              <div className="products-item">
                <div className="products-image">
                  <img src={productImagenumber3} alt="" />
                </div>
                <div className="products-about">
                  <div className="products-category">
                    <span className='category'>Chair</span>
                    <span className="category-name">Sakarias Armchair</span>
                  </div>
                  <div className="products-price">
                    <p className="price">
                      <span>$</span>
                      392
                    </p>
                    <div className="add-button">
                      <FaPlus color='#fff' />
                    </div>
                  </div>
                </div>
              </div>

            </SwiperSlide>

            <SwiperSlide>
              <div className="products-item">
                <div className="products-image">
                  <img src={productImagenumber3} alt="" />
                </div>
                <div className="products-about">
                  <div className="products-category">
                    <span className='category'>Chair</span>
                    <span className="category-name">Sakarias Armchair</span>
                  </div>
                  <div className="products-price">
                    <p className="price">
                      <span>$</span>
                      392
                    </p>
                    <div className="add-button">
                      <FaPlus color='#fff' />
                    </div>
                  </div>
                </div>
              </div>

            </SwiperSlide>

            <SwiperSlide>
              <div className="products-item">
                <div className="products-image">
                  <img src={productImagenumber4} alt="" />
                </div>
                <div className="products-about">
                  <div className="products-category">
                    <span className='category'>Chair</span>
                    <span className="category-name">Sakarias Armchair</span>
                  </div>
                  <div className="products-price">
                    <p className="price">
                      <span>$</span>
                      392
                    </p>
                    <div className="add-button">
                      <FaPlus color='#fff' />
                    </div>
                  </div>
                </div>
              </div>

            </SwiperSlide>

            <SwiperSlide>
              <div className="products-item">
                <div className="products-image">
                  <img src={productImagenumber1} alt="" />
                </div>
                <div className="products-about">
                  <div className="products-category">
                    <span className='category'>Chair</span>
                    <span className="category-name">Sakarias Armchair</span>
                  </div>
                  <div className="products-price">
                    <p className="price">
                      <span>$</span>
                      392
                    </p>
                    <div className="add-button">
                      <FaPlus color='#fff' />
                    </div>
                  </div>
                </div>
              </div>

            </SwiperSlide> */}







    </div >

  )
}

export default products;




