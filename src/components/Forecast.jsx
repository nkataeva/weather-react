import React from "react";
import styles from '../styles/Forecast.module.scss';
import icon from '../images/icons/location.png'
import { formatDate } from './Calendar'

const Forecast = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    console.log(props?.data)

    return (
        <>
            <div className={styles.location}>
                <img id={styles.icon} src={icon} alt="location"/>
                <p id={styles.city}>{`${props?.data?.location?.name}, ${props?.data?.location?.country}`}</p>
            </div>
            <div className={styles.forecast}>
                <div className={styles.top} onClick={handleOpen}>
                    <p className={styles.date}>{formatDate(props?.data?.location?.localtime)}</p>
                    
                </div>

                {isOpen && <div className={styles.bottom}>
                    <p>bottom</p>
                </div>}

            </div>
        </>
    )
}

export default Forecast;