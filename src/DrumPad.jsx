import React from "react";

class DrumPad extends React.Component {
  render() {
    return (
      <div className="colmun col-4">
        <button
          className="drum-pad"
          onClick={this.props.click}
          value={this.props.value}
          id={this.props.buttonId}
        >
          {this.props.buttonName}
          <audio
            src={this.props.audio}
            className="clip"
            id={this.props.audioId}
          ></audio>
        </button>
      </div>
    );
  }
}

export default DrumPad;
