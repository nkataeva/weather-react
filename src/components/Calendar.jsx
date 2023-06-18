import React from "react";
import styles from '../styles/Calendar.module.scss';
import calendarImage from '../images/icons/calendar.png'

function formatDate(dateString) {
    const options = { weekday: 'short', day: 'numeric', month: 'long' };
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', options);
}

const Calendar = (props) => {
    return (
        <div className={styles.cal}>
            <img className={styles.icon} src={calendarImage} alt="calendar" />
            <p className={styles.date}>{formatDate(props?.data?.location?.localtime)}</p>
        </div>
    )
}

export default Calendar;