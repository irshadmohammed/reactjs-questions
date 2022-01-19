import React, { Component } from 'react';
import './Questions.css';
import QnList from './constants'

class Questions extends Component {
  render() {
    return (
      <div className='questions__wrapper'>
        <div className='questions__container'>
          <div className='questions__qn'>
            {QnList.map((item) => (
              <>
                <h3>{item.qn}</h3>
                <hr />
                <h4>{item.ans}</h4>
              </>
            ))}
          </div>
        </div>

      </div >


    )
  }
}

export default Questions;