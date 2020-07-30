import React, { useEffect } from 'react';
import { getDailyDataCovid } from '../../redux/actions/covid19Actions';
import { Line, Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';

const Chart = ({
  getDailyDataCovid,
  covidData: { dailyData, countryData, country },
}) => {
  useEffect(() => {
    getDailyDataCovid();
  }, [getDailyDataCovid]);

  console.log(country);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart = countryData.confirmed ? (
    <Bar
      data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)',
            ],
            data: [
              countryData.confirmed.value,
              countryData.recovered.value,
              countryData.deaths.value,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  return <div className="col-12">{country ? barChart : lineChart}</div>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    covidData: state.covidData,
  };
};

const mapDispatchToProps = {
  getDailyDataCovid,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
