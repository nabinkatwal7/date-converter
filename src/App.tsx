import "./App.css";
import { useState } from "react";
import moment from 'moment';

function App() {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const calculateAge = () => {
        const currentDate = moment();
        const selectedDate = moment(`${year}-${month}-${day}`, "YYYY-MM-DD");

        const years = currentDate.diff(selectedDate, 'years');
        selectedDate.add(years, 'years'); // Add years to get accurate month and day calculation
        const months = currentDate.diff(selectedDate, 'months');
        selectedDate.add(months, 'months'); // Add months to get accurate day calculation
        const days = currentDate.diff(selectedDate, 'days');

        return { years, months, days };
    };

    const { years, months, days } = calculateAge();

    return (
        <div className={"min-w-screen min-h-screen flex items-center justify-center bg-[#F0F0F0]"}>
            <div className={"bg-white box p-10 flex flex-col gap-4"}>
                <form className={"flex flex-col lg:flex-row gap-4 text-[#888888]"}>
                    <div className={"flex flex-col"}>
                        <label className={"input-label"}>DAY</label>
                        <input onChange={(e) => setDay(e.target.value)} name="day" value={day} className="input-box w-fit border p-2" type="number"
                               placeholder="DD" />
                    </div>
                    <div className={"flex flex-col"}>
                        <label>MONTH</label>
                        <input onChange={(e) => setMonth(e.target.value)} name="month" value={month} className="input-box w-fit border p-2" type="number"
                               placeholder="MM" />
                    </div>
                    <div className={"flex flex-col"}>
                        <label>YEAR</label>
                        <input onChange={(e) => setYear(e.target.value)} name="year" value={year} className="input-box w-fit border p-2" type="number"
                               placeholder="YYYY" />
                    </div>
                    <div className={"relative"}>
                        <button className={"bg-[#864CFF] rounded-full p-2 absolute w-[60px] -right-5 top-20"}>
                            <img src="/assets/images/icon-arrow.svg" alt="btn" />
                        </button>
                    </div>
                </form>
                <hr />
                <div className={"flex flex-col gap-5"}>
                    <div className={"flex flex-row gap-2 text-4xl lg:text-8xl"}>
                        <p className={"text-[#864cff]"}>{years}</p>
                        <p className={"italic"} >years</p>
                    </div>
                    <div className={"flex flex-row gap-2 text-4xl lg:text-8xl"}>
                        <p className={"text-[#864cff]"}>{months}</p>
                        <p className={"italic"} >months</p>
                    </div>
                    <div className={"flex flex-row gap-2 text-4xl lg:text-8xl"}>
                        <p className={"text-[#864cff]"}>{days}</p>
                        <p className={"italic"} >days</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
