import React from "react";
import Button from "./Button";

class OptionTile extends React.Component {
  render() {
    return (
      <div className="option-tile">
        <img
          className="tile-image"
          src={this.props.image}
          alt={this.props.tilecontent.imagealt}
        />
        <div className="tile-content">
          <div className="tile-header">{this.props.tilecontent.header1} <br /> {this.props.tilecontent.header2}</div>
          <div className="tile-text">{this.props.tilecontent.text}</div>
          <div className="tile-bottom">
            <div className="button">
              <Button text={this.props.tilecontent.buttontext} />
            </div>
            <div className="price">
              {this.props.tilecontent.price.old ? (
                <span className="old">{this.props.tilecontent.price.old}</span>
              ) : null}
              <span className="current">
                {this.props.tilecontent.price.current}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OptionTile;
