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
        </main> 
    )
}

export default Hotelview