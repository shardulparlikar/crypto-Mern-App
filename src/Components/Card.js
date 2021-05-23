import React from "react"
import '../css/card.css'

  
  class Card extends React.Component {
    constructor (props) {
      super(props);
    }
    
    render () {
      return (
        <div className="card">
          <div className="card-header">
            <h3>{this.props.title}</h3>
            <img className="logo" src={this.props.url}/>
          </div>
          <div className="card-body">
            <p>{this.props.body}</p>
          </div>
        </div>
      );
    }
  }
 export default Card