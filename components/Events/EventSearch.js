import styles from "../../styles/Event.module.css";
import { useRef } from "react";


export default function EventSearch(props){

    const yearInputRef = useRef();
    const monthInputRef = useRef();

    function handleSubmit(e){
        e.preventDefault();

        const year = yearInputRef.current.value;
        const month = monthInputRef.current.value;
        props.onFilterSearch(year, month);
    }

    return (
        <>
            <div className={styles.eventFormContainer}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="year">Year</label>
                        <select id="year" ref={yearInputRef}>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="month">Month</label>
                        <select id="month" ref={monthInputRef}>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                        <button className={styles.button2}>Find Events</button>
                    </div>
                </form>
            </div>
        </>
    );
}