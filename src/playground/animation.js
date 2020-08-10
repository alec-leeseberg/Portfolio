import React from 'react';
import initialSetup from '../components/SqThree.js';
console.log('animation running');

export default class Animation extends React.Component {
  render() {
    return (
      <div>
        <div className="sqone"></div>
        <div className="sqtwo"></div>
        <div className="sqthree"></div>
        <div className='Header'></div>
        <img src="images/allogosolidblack.svg" className="logo"></img>
      </div>
    );
  }
}

//old Code

//<div class="imageone"></div>
//<img src="/images/whitebar.svg" alt="" className="imagetwo" />