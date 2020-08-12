import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleTheme = this.handleToggleTheme.bind(this);
        this.state = {
          theme: "Dark"
        };
      }

    handleToggleTheme() {
        this.setState((prevState) => {
            console.log(prevState.theme);
            if(prevState.theme == "Dark")
            return {
                theme: "Light"
              };
            else if (prevState.theme == "Light")
            return {
                theme: "Dark"
            };
        });
    }

    render() {
        return (
            <div className="toggle-container">
                <input type="checkbox" id="switch" name="theme" onClick={this.handleToggleTheme}/> <label htmlFor="switch">Toggle</label>
            </div>
        );
    }
}

export default Toggle;


/*
    handleToggleTheme() {
        this.setState((prevState) => {
            if (prevState.theme == "Dark") {
                this.state.theme == "Light";
                console.log(this.state.theme);
            } else if (prevState.theme == "Light") {
                this.state.theme == "Dark";
                console.log(this.state.theme);
            };
        });
    }


                    <button onClick={this.handleToggleTheme}>Toggle</button>
*/