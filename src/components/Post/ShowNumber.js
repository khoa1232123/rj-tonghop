import React from 'react'
import { connect } from 'react-redux';

const ShowNumber = ({number}) => {
  return (
    <div>
      <h2>{number}</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    number: state.postData.number,
  };
};

const mapDispatchToProps = {
  // getNumber,
  // addNumber
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowNumber);
