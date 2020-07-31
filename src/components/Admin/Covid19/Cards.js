import React from 'react';
import { getDataCovid } from '../../../redux/actions/covid19Actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import CountUp from 'react-countup';

const Cards = ({
  getDataCovid,
  covidData: {
    data: { confirmed, deaths, recovered, lastUpdate },
  },
}) => {
  useEffect(() => {
    getDataCovid();
  }, [getDataCovid]);

  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className="col-md-12">
      <div className="row">
        <div className="col-md-4 col-12">
          <div className="card infected">
            <h3>Infected</h3>
            <h5>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </h5>
            <h6>{new Date(lastUpdate).toDateString()}</h6>
            <p>number of active cases of covid19</p>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="card recovered">
            <h3>Recovered</h3>
            <h5>
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </h5>
            <h6>{new Date(lastUpdate).toDateString()}</h6>
            <p>number of recovered from covid19</p>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="card deaths">
            <h3>Deaths</h3>
            <h5>
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </h5>
            <h6>{new Date(lastUpdate).toDateString()}</h6>
            <p>number of deaths caused by covid19</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    covidData: state.covidData,
  };
};

const mapDispatchToProps = {
  getDataCovid,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
