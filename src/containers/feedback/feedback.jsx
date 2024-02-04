import React from 'react';
import userImage from '../../images/Ellipse 1134.png';
import feedbackImage from '../../images/unsplash_FBXuXp57eM0.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './feedback.css';
import { Navigation } from 'swiper/modules';

const feedback = () => {
    return (
        <div className='feedback-section'>
            <>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>   <div className="feedback-section-items">
                        <div className="feedback-section-left-item">
                            <div className="title">
                                <span>What are they saying ?</span>
                            </div>
                            <div className="feedback-user">
                                <div className="user">
                                    <div className="user-images">
                                        <img src={userImage} alt="" />
                                    </div>
                                    <div className="user-about">
                                        <span className="name">
                                            Jane Lowis
                                        </span>
                                        <span className="work">
                                            Housewife
                                        </span>
                                    </div>

                                </div>
                                <div className="user-content">
                                    <p>
                                        the services and products offered are very good, matched what I was looking for. now my room is more beautiful and aesthetic.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="feedback-section-right-item">
                            <div className="images">
                                <img src={feedbackImage} alt="" />
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide>
                        <div className="feedback-section-items">
                            <div className="feedback-section-left-item">
                                <div className="title">
                                    <span>What are they saying ?</span>
                                </div>
                                <div className="feedback-user">
                                    <div className="user">
                                        <div className="user-images">
                                            <img src={userImage} alt="" />
                                        </div>
                                        <div className="user-about">
                                            <span className="name">
                                                Jane Lowis
                                            </span>
                                            <span className="work">
                                                Housewife
                                            </span>
                                        </div>

                                    </div>
                                    <div className="user-content">
                                        <p>
                                            the services and products offered are very good, matched what I was looking for. now my room is more beautiful and aesthetic.
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className="feedback-section-right-item">
                                <div className="images">
                                    <img src={feedbackImage} alt="" />
                                </div>
                            </div>

                        </div>

                    </SwiperSlide>
                    <SwiperSlide>   <div className="feedback-section-items">
                        <div className="feedback-section-left-item">
                            <div className="title">
                                <span>What are they saying ?</span>
                            </div>
                            <div className="feedback-user">
                                <div className="user">
                                    <div className="user-images">
                                        <img src={userImage} alt="" />
                                    </div>
                                    <div className="user-about">
                                        <span className="name">
                                            Jane Lowis
                                        </span>
                                        <span className="work">
                                            Housewife
                                        </span>
                                    </div>

                                </div>
                                <div className="user-content">
                                    <p>
                                        the services and products offered are very good, matched what I was looking for. now my room is more beautiful and aesthetic.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="feedback-section-right-item">
                            <div className="images">
                                <img src={feedbackImage} alt="" />
                            </div>
                        </div>
                    </div></SwiperSlide>

                </Swiper>
            </>

        </div>
    )
}

export default feedback