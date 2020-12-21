import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api/API";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Charts.css";

const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {
	const [dailyData, setDailyData] = useState([]);

	useEffect(() => {
		const fetchAPI = async () => {
			setDailyData(await fetchDailyData());
		};

		fetchAPI();
	}, []);

	const lineChart = dailyData.length ? (
		<Line
			data={{
				labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString("en-US", { month: 'long', day: 'numeric' })),
				datasets: [
					{
						data: dailyData.map(({ confirmed }) => confirmed),
						label: "Cases",
						borderColor: "#33daff",
						fill: false,
					},
					{
						data: dailyData.map(({ deaths }) => deaths),
						label: "Deaths",
						borderColor: "red",
						backgroundColor: "rgba(255, 0, 0, 0.5)",
						fill: false,
					},
				],
			}}
		/>
	) : null;

	const barChart = confirmed ? (
		<Bar
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
				title: { display: true, text: `Current state in ${country}` },
			}}
		/>
	) : null;

	return (
		<div className={styles.container}>{country ? barChart : lineChart}</div>
	);
};

export default Charts;
