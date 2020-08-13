import React from 'react';


class Toggle extends React.Component {
    render() {
       const { theme, handleToggleTheme } = this.props;
       return (
            <div className="toggle-container">
                <input type="checkbox" id="switch" name="theme" onClick={handleToggleTheme}/> <label htmlFor="switch">Toggle</label>
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