import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Marc Munene",
        bio: "A passionate MERN stack developer.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Web Developer",
      },
      shows: false,
      timeSinceMounted: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMounted: prevState.timeSinceMounted + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, timeSinceMounted } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>React Class-Based Component</h1>
        <button onClick={this.toggleProfile}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div style={{ marginTop: "20px", border: "1px solid #ddd", padding: "20px", display: "inline-block" }}>
            <img src={person.imgSrc} alt="Profile" style={{ width: "150px", borderRadius: "50%" }} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h3>{person.profession}</h3>
          </div>
        )}

        <p>Time since mounted: {timeSinceMounted} seconds</p>
      </div>
    );
  }
}

export default App;
