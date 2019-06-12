import React from "react";
import { withRouter } from "react-router-dom";
import OutfitContainer from "../outfit/outfit_container";

class SliderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translateDelta: 0,
      delta: 300,
      itemsLeft: props.items.length
    };
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.items.length !== prevProps.items.length) {
  //     this.setState({ itemsLeft: this.props.items.length - 3 });
  //   }
  //   console.log(this.state);
  // }

  handleButton(arg) {
    const { translateDelta, delta, itemsLeft } = this.state;

    // TODO:
    // implment some sort of throttling function
    // to prevent bad UX
    // prev <= 0 to prevent over scrolling
    if (arg === "prev" && translateDelta + delta <= 0) {
      this.setState({
        translateDelta: translateDelta + delta,
        itemsLeft: itemsLeft + 3
      });
    } else if (arg === "next" && itemsLeft >= 0) {
      this.setState({
        translateDelta: translateDelta - delta,
        itemsLeft: itemsLeft - 3
      });
    }
  }

  render() {
    console.log(this.state.itemsLeft);
    console.log(this.props.alength);
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

export default withRouter(SliderComponent);
