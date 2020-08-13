import React from 'react';


class HamburgerElement extends React.Component {
  render() {
    const { hamburgeractive, handleToggleHamburger } = this.props;
    return (
      <div className="hamburger__menu">
        <button className={hamburgeractive ? "hamburger hamburger--collapse" : "hamburger hamburger--collapse is-active"} type="button">
          <span className="hamburger-box" onClick={handleToggleHamburger}>
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
    );
  }
}

export default HamburgerElement;

/*
const HamburgerElement = () => {
  return (
    <div className="hamburger__menu">
      <button className="hamburger hamburger--collapse" type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>

  );

};

export default HamburgerElement;
*/