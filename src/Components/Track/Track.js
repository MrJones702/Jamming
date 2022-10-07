import React from 'react'
import './Track.css';

export default class Track extends React.Component {
  // constructor(props){
  //   super(props);

  //   renderAction = renderAction.bind(this);
  // }
  
    renderAction() {
        if(this.props.isRemoval) {
            return <button className="Track-action">-</button>;
        } else {
            return <button className="Track-action">+</button>
        }
    }

    render() {
      return (
        <div className="Track">
          <div className="Track-information">
            <h3>track name will go here </h3>
            <p>track artist | track album </p>
          </div>
          {this.renderAction()}
        </div>
      )
    }
}
