import React from "react";
import { withRouter } from "react-router-dom";
import OutfitContainer from "../outfit/outfit_container";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { translateDelta: 0, delta: 300 };
  }

  handleButton(arg) {
    const { translateDelta, delta } = this.state;

    // TODO:
    // implment some sort of throttling function
    // to prevent bad UX
    // prev <= 0 to prevent over scrolling
    if (arg === "prev" && translateDelta + delta <= 0) {
      this.setState({ translateDelta: translateDelta + delta });
    } else if (arg === "next") {
      this.setState({ translateDelta: translateDelta - delta });
    }
  }

  render() {
    const renderItems = this.props.items.map(item => {
      return (
        <OutfitContainer
          outfit={item}
          translateDelta={this.state.translateDelta}
        />
      );
    });

    return (
      <div className="dashboard">
        <div className="outfit-index">{renderItems}</div>
        <div className="dashboard-buttons">
          <button onClick={() => this.handleButton("prev")}>Left</button>
          <button onClick={() => this.handleButton("next")}>Right</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
