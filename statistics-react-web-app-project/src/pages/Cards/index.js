import React, {useState, useEffect } from 'react';
import Charts from "~/components/Charts";
import Piechart from "~/components/Charts/Piechart";
import Country from "~/components/Country";
import { fetchData } from "~/api/API";
import { Card } from '~/components/Card';


export default function CardsPage() {
const [data,setData] = useState({});
const [countryPick,setCountryPick] = useState("");

    useEffect(() => {
        document.title = 'Charts'
    }, []);

    useEffect(()=>{
        (async () => {
        const fetchedData = await fetchData();
        setData(fetchedData);
    })()
    },[]);

   const handleCountryChange = async (countryPick) => {
        const fetchedData = await fetchData(countryPick);
        setData(fetchedData);
        setCountryPick(countryPick);
      };

    return (
        <>
            <div className="col-12 title">
                <h1>Charts Cards</h1>
                <Country handleCountryChange={handleCountryChange} />
            </div>
            <div className="col-6 px-0">
                <Card>
                    <div className="card-title">
                        <h3>Line Chart</h3>
                    </div>
                    <div className="card-body light-text">
                         <Charts data={data} country={countryPick} />
                    </div>
                </Card>
            </div>
            <div className="col-6 px-0">
                <Card>
                    <div className="card-title">
                        <h3>Pie Chart</h3>
                    </div>
                    <div className="card-body light-text">
                    <Piechart data={data} />
                    </div>
                </Card>
            </div>    
        </>
    );
}
