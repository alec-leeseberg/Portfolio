import React from 'react';

class Home extends React.Component {
  render() {
    const { theme } = this.props;
    return (
      <div>
        <div className="hero">
          <img src={theme == "Dark" ? "/images/heroimage1.svg" : "/images/heroimage1light.svg"} className="heroimage" align="top"></img>
          <button className={theme == "Dark" ? "viewwork" : "viewworklight"}>View My Work</button>
        </div>
        <div className="homecontainer">
          <h1 className="homeh1">Lorem Ipsum</h1>
          <p className="homep">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet metus enim, varius rutrum est suscipit in. Etiam sed risus in dolor suscipit tempus cursus eget velit. Vivamus lobortis enim id turpis blandit tempus. Nulla in risus sit amet est vehicula sodales. Maecenas finibus purus mi, nec feugiat nisi mollis sed. Suspendisse vitae ultricies ligula. Donec sagittis nisi sit amet velit suscipit, at efficitur nisi placerat. Curabitur tincidunt lacus enim, dapibus ultrices tellus tincidunt in. Nulla ut lacinia risus. Vivamus dolor ex, imperdiet ac nunc vel, vehicula varius elit. Morbi non tincidunt orci. Maecenas eu magna eget enim fermentum sagittis. Pellentesque pellentesque pretium convallis.</p>
        </div>
      </div>
    );
  }
}
export default Home;

/*
const Home = () => (
  <div>
    <div className="hero">
      <img src="/images/heroimage1.svg" className="heroimage" align="top"></img>
      <button className="viewwork">View My Work</button>
    </div>
    <div className="homecontainer">
      <h1 className="homeh1">Lorem Ipsum</h1>
      <p className="homep">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet metus enim, varius rutrum est suscipit in. Etiam sed risus in dolor suscipit tempus cursus eget velit. Vivamus lobortis enim id turpis blandit tempus. Nulla in risus sit amet est vehicula sodales. Maecenas finibus purus mi, nec feugiat nisi mollis sed. Suspendisse vitae ultricies ligula. Donec sagittis nisi sit amet velit suscipit, at efficitur nisi placerat. Curabitur tincidunt lacus enim, dapibus ultrices tellus tincidunt in. Nulla ut lacinia risus. Vivamus dolor ex, imperdiet ac nunc vel, vehicula varius elit. Morbi non tincidunt orci. Maecenas eu magna eget enim fermentum sagittis. Pellentesque pellentesque pretium convallis.</p>
    </div>
  </div>
);

export default Home;
*/