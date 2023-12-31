import React from "react"
import styles from "../styles/Search.module.scss"
import { getData } from "../data/getData";
import locationImage from '../images/icons/location.png';


function Search(props) {
    const changeValue = async (e) => {
        props.setCity(e.target.value);
    }

    const searchHandler = async (e) => {
        const data = await getData(props.city, 1);
        props.dataSet(data);
        console.log(data)
    }

    const enterHandler = async (e) => {
        if (e.key === 'Enter') {
            await searchHandler();
        }
    }

    return (
        <>
            <div className={styles.search}>
                <img className={styles.icon} src={locationImage} alt="location" />
                <input
                    className={styles.inputSearch}
                    placeholder="Укажите город"
                    value={props.city}
                    onChange={changeValue}
                    onKeyDown={enterHandler}>
                </input>
                <button
                    className={styles.buttonSearch}
                    onClick={searchHandler}>
                    Показать погоду
                </button>
                <div className={styles.cal}>{props.children}</div>
            </div>

        </>
    )
}

export default Search;