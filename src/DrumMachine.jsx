import React from "react";
import DrumPad from "./DrumPad";
// Q, W, E, A, S, D, Z, X, C

const drumPadsCollections = [
  {
    keyName: "Q",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    displayName: "Heater 1"
  },
  {
    keyName: "W",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    displayName: "Heater 2"
  },
  {
    keyName: "E",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    displayName: "Heater 3"
  },
  {
    keyName: "A",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    displayName: "Heater 4"
  },
  {
    keyName: "S",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    displayName: "Heater 6"
  },
  {
    keyName: "D",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    displayName: "Dsc Oh"
  },
  {
    keyName: "Z",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    displayName: "Kick'n Hat"
  },
  {
    keyName: "X",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    displayName: "RP4 KICK 1"
  },
  {
    keyName: "C",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    displayName: "Cev H2"
  }
];

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.createButton = this.createButton.bind(this);
    this.keyPress = this.keyPress.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick(event) {
    let audio = document.getElementById(event.target.value);
    audio.play();
    this.setState({
      display: event.target.id
    });
  }

  keyPress(event) {
    let pressed = String.fromCharCode(event.keyCode);

    const find = (ele) => ele.keyName === pressed;

    if (drumPadsCollections.some(find)) {
      let audio = document.getElementById(pressed);
      audio.play();

      this.setState({
        display: document.getElementById(pressed).parentElement.id
      });
    }
  }

  reset() {
    this.setState({
      display: ""
    });
  }

  createButton(button, index) {
    return (
      <DrumPad
        key={button.keyName}
        audio={button.audio}
        audioId={button.keyName}
        buttonName={button.keyName}
        buttonId={button.displayName}
        value={button.keyName}
        click={this.handleClick}
      />
    );
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPress);
  }

  render() {
    return (
      <div>
        <div className="container" id="drum-machine">
          <div>
            <h1 className="title"> Drum Machine </h1>
            <p>Click the button or press your keyboard to make sound!</p>
          </div>

          {/* this below is display part */}

          <div id="display" className="display">
            <h1>{this.state.display} </h1>
          </div>

          {/* {this beloew is drum keyboard } */}

          <div id="drum-pads" className="row keyboard">
            {drumPadsCollections.map(this.createButton)}
          </div>
        </div>
      </div>
    );
  }
}

export default DrumMachine;
