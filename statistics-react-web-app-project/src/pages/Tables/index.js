import React,{useState,useEffect} from 'react';
import {  Card } from '~/components/Card';
import { Table } from '~/components/Table';

export default function TablesPage() {
const [countries,setCountries] = useState([]);

useEffect(() => {
  const getCountriesData = async () => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json()) // when it comes back with the response get the entire response and just take the json from it.
      .then((data) => {
        const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
            cases: country.cases,
            todayCases: country.todayCases,
            deaths: country.deaths,
            todayDeaths: country.todayDeaths,
            recovered: country.recovered,
            todayRecovered: country.todayRecovered,
            active: country.active,
            critical: country.critical,
            casesPerOneMillion: country.casesPerOneMillion,
            deathsPerOneMillion: country.deathsPerOneMillion,
            tests: country.tests,
            testsPerOneMillion: country.testsPerOneMillion,
            population: country.population,
            continent: country.continent,
            oneCasePerPeople: country.oneCasePerPeople,
            oneDeathPerPeople: country.oneDeathPerPeople,
            oneTestPerPeople: country.oneTestPerPeople,
            activePerOneMillion: country.activePerOneMillion,
            recoveredPerOneMillion: country.recoveredPerOneMillion,
            criticalPerOneMillion: country.criticalPerOneMillion
        }));
        setCountries(countries);
      });
  };

  getCountriesData();
}, []);

    useEffect(() => {
        document.title = 'Covid Stats Table'
    }, []);

    return (
        <>
            <div className="col-12 title">
                <h1>Tables</h1>
            </div>
            <div className="col-12 px-0">
                <Card className="red">
                    <div className="card-title">
                        <h3>Tables</h3>
                    </div>
                    <div className="card-body">
                        <Table>
                            <thead>
                                <tr>
                                    <th className="col-1">Country Code</th>
                                    <th className="col-1">Name</th>
                                    <th className="col-1">Cases</th>
                                    <th className="col-1">Today Cases</th>
                                    <th className="col-1">Deaths</th>
                                    <th className="col-1">Today Deaths</th>
                                    <th className="col-1">Recovered</th>
                                    <th className="col-1">Today recovered</th>
                                    <th className="col-1">Critical</th>
                                    <th className="col-1">Cases per million</th>
                                    <th className="col-1">Deaths per million</th>
                                    <th className="col-1">Tests per million</th>
                                    <th className="col-1">Population</th>
                                    <th className="col-1">Continent</th>
                                    <th className="col-1">One cases per people</th>
                                    <th className="col-1">One death per people</th>
                                    <th className="col-1">One Tests per people</th>
                                    <th className="col-1">Active per million</th>
                                    <th className="col-1">Recovered per million</th>
                                    <th className="col-1">Critical per million</th>

                                </tr>
                            </thead>
                            <tbody>
                                {countries.map(country => (
                                    <tr>
                                        <td style={{ textAlign: 'center' }}>{ country.value }</td>
                                        <td style={{ textAlign: 'center' }}>{ country.name }</td>
                                        <td style={{ textAlign: 'center' }}>{ country.cases }</td>
                                        <td style={{ textAlign: 'center' }}>{country.todayCases}</td>
                                        <td style={{ textAlign: 'center' }}>{ country.deaths }</td>
                                        <td style={{ textAlign: 'center' }}>{ country.todayDeaths }</td>
                                        <td style={{ textAlign: 'center' }}>{ country.recovered }</td>
                                        <td style={{ textAlign: 'center' }}>{ country.todayRecovered }</td>
                                        <td style={{ textAlign: 'center' }}>{ country.critical }</td>
                                        <td style={{ textAlign: 'center' }}>{ country.casesPerOneMillion }</td>
                                        <td style={{ textAlign: 'center' }}>{ country.deathsPerOneMillion }</td>
                                        <td style={{ textAlign: 'center' }}>{ country.testsPerOneMillion }</td>
                                        <td style={{ textAlign: 'center' }}>{ country.population }</td>
                                        <td style={{ textAlign: 'center' }}>{ country.continent }</td>
                                        <td style={{ textAlign: 'center' }}>{ country.oneCasePerPeople }</td>
                                        <td style={{ textAlign: 'center' }}>{ country.oneDeathPerPeople }</td>
                                        <td style={{ textAlign: 'center' }}>{ country.oneTestPerPeople }</td>
                                        <td style={{ textAlign: 'center' }}>{ country.activePerOneMillion }</td>
                                        <td style={{ textAlign: 'center' }}>{ country.recoveredPerOneMillion }</td>
                                        <td style={{ textAlign: 'center' }}>{ country.criticalPerOneMillion }</td>

                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Card>
            </div>
        </>
    );
}
