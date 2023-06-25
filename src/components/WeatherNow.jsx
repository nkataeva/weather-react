import React from "react";
import styles from '../styles/WeatherNow.module.scss'
// import imgGirl from '../images/girls/windy.png'


const WeatherNow = (props) => {  
    // console.log(props.data);
    const wind = (props.data?.current?.wind_kph / 3.6).toFixed(1);

    return (
        <div className={styles.Wnow}>
            <div className={styles.main}>
                <img src={props.data?.current?.condition?.icon} alt="Location Icon" />
                <p className={styles.status}>{props.data?.current?.condition?.text}</p>

                <p id={styles.tempHeader}>Температура </p>
                <p id={styles.tempValue}>{`${props.data?.current?.temp_c}°C`}</p><br />

                <div className={styles.indicators}>
                    <div className={styles.left}>
                        <p className={styles.header}>Ощущается как </p>
                        <p className={styles.value} id={styles.feels}>{`${props.data?.current?.feelslike_c}°C`}</p><br />

                        <p className={styles.header}>Ветер </p>
                        <p className={styles.value}>{`${wind} м/с`}</p><br /><br/>
                    </div>

                    <div className={styles.right}>
                        <p className={styles.header}>Влажность </p>
                        <p className={styles.value}>{`${props.data?.current?.humidity}%`}</p><br />

                        <p className={styles.header}>Давление </p>
                        <p className={styles.value}>{`${props.data?.current?.pressure_mb * 0.75} мм рт.ст.`}</p><br />
                    </div>
                </div>
            </div>
            {/* <img className={styles.imgGirl} src={imgGirl} alt="imgGirl"></img> */}
        </div>
    )
}


export default WeatherNow