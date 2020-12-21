import React, { memo,useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHospitalAlt } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import { AiFillAlert } from 'react-icons/ai';
import { Side } from '../styles/SidebarStyles';
import { CardDashboard } from '~/components/Card';
import Logo from '~/assets/covid.png';
import { connect } from 'react-redux';

function Sidebar({ drag, activeMenu, itensMenu, dispatch }) {

    function toggleMenu(menu) {
        return {
            type: 'SET_MENU_ACTIVE',
            menu
        };
    }

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
          console.log("cccccunnttt",countries.map(bill => bill.population).reduce((acc, bill) => bill + acc))
  
        });
    };
  
    getCountriesData(); 
  
  }, []);


    return (
        <>
         <Side drag={drag}>
            <div className="logo">
                <img src={Logo} alt=""/>
            </div>
            
            <ul>
                {itensMenu.map(item => (
                    <li key={ item.name } className={item.name === activeMenu.name ? 'active' : ''}>
                        <Link to={ item.path } onClick={() => dispatch(toggleMenu(item)) }>
                            <span className="icon">
                                { item.icon }
                            </span>
                            <span className="item">
                                { item.name }
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="col-12 px-0">
                <CardDashboard className="red">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <div className="title">Total World Population</div>
                                <div className="number pulsate">{countries.map(country => country.population).reduce((acc, country) => country + acc,0)}</div>
                            </div>
                            <div className="col-auto">
                                <BsPeopleFill size="4em" />
                            </div>
                        </div>
                    </div>
                </CardDashboard>
            </div>
            <div className="col-12 px-0">
                <CardDashboard className="green">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <div className="title">Total Cases</div>
                                {
                                <div className="number pulsate">{countries.map(country => country.cases).reduce((acc, country) => country + acc,0)}</div>
                                }
                            </div>
                            <div className="col-auto">
                                <AiFillAlert size="4em" />
                            </div>
                        </div>
                    </div>
                </CardDashboard>
            </div>
            <div className="col-12 px-0">
                <CardDashboard className="orange">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <div className="title">Total Recovered</div>
                                <div className="number pulsate">{countries.map(country => country.recovered).reduce((acc, country) => country + acc,0)}</div>
                            </div>
                            <div className="col-auto">
                                <FaHospitalAlt size="4em" />
                            </div>
                        </div>
                    </div>
                </CardDashboard>
            </div>
        </Side>
        
       
        </>
    );
}

export default memo(
    connect(state  => ({
        activeMenu: state.menu.activeMenu,
        itensMenu: state.menu.itens
    }))(Sidebar)
);
