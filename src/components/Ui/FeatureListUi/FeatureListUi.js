import React from 'react';
import './FeatureListUi.scss';

function FeatureListUi(props) {
  console.log(props)
  let datalist = props.items.map((item, index) => {
    return <li className="grid-item row" key={index}>
            <div className="grid-image col"><img src={item.imgURL} alt={item.title}/></div>
            <div className="col">
              <div className="grid-title">{item.title}</div>
              <div className="grid-desc">{item.description}</div>
            </div>
          </li> 
  })
  return (
    <ul className="grid">
        {datalist}
    </ul>
  );
}

export default FeatureListUi;