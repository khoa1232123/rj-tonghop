import React from 'react';
import { addNumber } from '../../redux/actions/postReducer';
import { connect } from 'react-redux';

const AddNumber = ({ addNumber }) => {
  return (
    <div>
      <button onClick={() => addNumber()}>Add</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    // number: state.postData.number,
  };
};

const mapDispatchToProps = {
  addNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNumber);
