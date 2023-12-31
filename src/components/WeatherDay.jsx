import React from "react";
import Slider from "react-slick";
import styles from '../styles/WeatherDay.module.scss';
import { useNavigate } from "react-router-dom";
import { getData } from "../data/getData";

const WeatherDay = (props) => {
    const navigate = useNavigate();

    const handleClick = async () => {
        props.setDataForecast(await getData(props?.data?.location?.name, 3));
        navigate('/forecast');
    }

    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
    return (
        <div>
            <Slider {...settings} className={styles.slider}>
                {props.data?.forecast?.forecastday?.[0]?.hour?.map((el, index) => {
                    return (
                        <div key={index} className={styles.block}>
                            <p>{el?.time.split(' ')[1].slice(0, 5)}</p>
                            <img src={el?.condition?.icon} alt="lala"/>
                            <p>{`${el?.temp_c}°C`}</p>
                        </div>
                    )
                })}
            </Slider>
            <button id={styles.future} onClick={handleClick}>Прогноз на 3 дня</button>
        </div>
    )
}

export default WeatherDay;