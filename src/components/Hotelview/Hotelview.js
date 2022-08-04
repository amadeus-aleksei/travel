import React from "react";
import './Hotelview.scss'

const Hotelview = () => {
    return (
        <main className='hotelview'>
            <div className="gallery">
                <figure className="gallery__item">
                    <img src={require('../../img/hotel-1.jpg')} alt='Hotel 1 photo' className="gallery__photo"/>
                </figure>

                <figure className="gallery__item">
                    <img src={require('../../img/hotel-2.jpg')} alt='Hotel 2 photo' className="gallery__photo"/>
                </figure>

                <figure className="gallery__item">
                    <img src={require('../../img/hotel-3.jpg')} alt='Hotel 3 photo' className="gallery__photo"/>
                </figure>
            </div>
            
            <div className="overview">
                <h1 className="overview__heading">
                    Hotel Marcus Aurelius
                </h1>
                <div className="overview__stars">
                    <svg className="overview__icon-star" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
                    </svg>
                    <svg className="overview__icon-star" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
                    </svg>
                    <svg className="overview__icon-star" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
                    </svg>
                    <svg className="overview__icon-star" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
                    </svg>
                    <svg className="overview__icon-star" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
                    </svg>
                </div>

                <div className="overview__location">
                    <svg className="overview__icon-location" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <path d="M10 2.009c-2.762 0-5 2.229-5 4.99 0 4.774 5 11 5 11s5-6.227 5-11c0-2.76-2.238-4.99-5-4.99zM10 9.76c-1.492 0-2.7-1.209-2.7-2.7s1.208-2.7 2.7-2.7c1.49 0 2.699 1.209 2.699 2.7s-1.209 2.7-2.699 2.7z"></path>
                    </svg>
                    <button className="btn-inline">Boulder, Colorado</button>
                </div>

                <div className="overview__rating">
                    <div className="overview__rating-avg">8.6</div>
                    <div className="overview__rating-count">420 votes</div>
                </div>
            </div>

            <div className="detail">
                <div className="description">
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                    </p>
                    <p className="paragraph">
                        Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
                    </p>
                    <ul className="list">
                        <li className="list__item">Close to the beach</li>
                        <li className="list__item">Breakfast included</li>
                        <li className="list__item">Free airport shuttle</li>
                        <li className="list__item">WiFi in all rooms</li>
                        <li className="list__item">AC and heating available</li>
                        <li className="list__item">Pets allowed</li>
                        <li className="list__item">All languages spoken</li>
                        <li className="list__item">Perfect for families</li>
                    </ul>
                    <div className="recommend">
                        <p className="recommend__count">
                            Marcus and 2 other friends recommend this hotel.
                        </p>
                        <div className="recommend__friends">
                            <img src={require("../../img/user-1.jpg")} alt="Friend 1" className="recommend__photo"/>
                            <img src={require("../../img/user-2.jpg")} alt="Friend 2" className="recommend__photo"/>
                            <img src={require("../../img/user-3.jpg")} alt="Friend 3" className="recommend__photo"/>
                            <img src={require("../../img/user-4.jpg")} alt="Friend 4" className="recommend__photo"/>
                        </div>
                    </div>
                </div> 

                <div className="user-reviews">
                    <figure className="review">
                        <blockquote className="review__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                        </blockquote>
                        <figcaption className="review__user">
                            <img src={require("../../img/user-3.jpg")} alt="User 1" className="review__photo"/>
                            <div className="review__user-box">
                                <p className="review__username">Nick Smith</p>
                                <p className="review__user-date">23 Feb 2022</p>
                            </div>
                            <div className="review__rating">7.8</div>
                        </figcaption>
                    </figure>

                    <figure className="review">
                        <blockquote className="review__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
                        </blockquote>
                        <figcaption className="review__user">
                            <img src={require("../../img/user-2.jpg")} alt="User 1" className="review__photo"/>
                            <div className="review__user-box">
                                <p className="review__username">Mary Thomas</p>
                                <p className="review__user-date">28 Jul 2022</p>
                            </div>
                            <div className="review__rating">9.3</div>
                        </figcaption>
                    </figure>

                    <button className="btn-inline">Show all<span>&rarr;</span></button>
                </div>                
            </div>

            <div className="cta">
                <h2 className="cta__book-now">
                    Good news! We have 4 discounted rooms for your selected dates!
                </h2>
                <button className="btn">
                    <span className="btn__visible">Book now</span>
                    <span className="btn__invisible">Only 4 rooms left</span>
                </button>
            </div>
        </main> 
    )
}

export default Hotelview