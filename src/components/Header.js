import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="page-header">
        <div className="page-title">{this.props.headercontent.title}</div>
        <div>
          <span className="subheading">
            {this.props.headercontent.subheading1}{" "}
          </span>
          <span className="promo-code">
            {this.props.headercontent.promocode}{" "}
          </span>
          <span className="subheading">
            {this.props.headercontent.subheading2}
          </span>
        </div>
      </div>
    );
  }
}

export default Header;
