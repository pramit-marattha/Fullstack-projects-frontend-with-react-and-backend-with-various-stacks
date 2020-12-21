import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api/API";
import { Pie } from 'react-chartjs-2';
import styles from "./Charts.css";


const Piechart = ({ data: { confirmed, recovered, deaths }, country }) => {
	const [dailyData, setDailyData] = useState([]);

	useEffect(() => {
		const fetchAPI = async () => {
			setDailyData(await fetchDailyData());
		};

		fetchAPI();
    }, []);
    

const PieChart = dailyData.length ? (
        <Pie
        data={{
				labels: ["Infected", "Recovered", "Deaths"],
				datasets: [
					{
						label: "People",
						backgroundColor: [
							"rgba(0, 0, 255, 0.5)",
							"rgba(0, 255, 0, 0.5)",
							"rgba(255, 0, 0, 0.5)",
						],
						
						data: [confirmed.value, recovered.value, deaths.value],
					},
				],
			}}
			options={{
				legend: { display: false },
				title: { display: true, text: `Live Stat` },
			}}
/>
) : null;

	return (
		<div className={styles.container}>{PieChart}</div>
	);
};

export default Piechart;
