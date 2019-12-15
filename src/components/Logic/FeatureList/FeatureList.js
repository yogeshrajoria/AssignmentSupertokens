import React, { Component } from "react";
import FeatureListUi from '../../Ui/FeatureListUi/FeatureListUi';
import {FeatureListData} from '../../../constants/FeatureListData';

export default class FeatureList extends Component {  
  render() {
    return (
      <div id="grid">
            <FeatureListUi items={FeatureListData}/>
      </div>
    );
  }
}