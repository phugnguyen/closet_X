import React from "react";
// import ItemIndex from "../items/item_index";
import ItemSliderShow from "./item_slide_show";

class OutfitScrollbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translateDelta: 0,
      delta: 300,
      itemsLeft: 0
    };
  }

  componentDidMount() {
    this.props.fetchAllItems();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemLength !== prevProps.itemLength) {
      this.setState({ itemsLeft: this.props.itemLength - 3 });
    }
  }

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
    const renderItems = this.props.items.map(item => {
      return (
          <ItemSliderShow
            item={item}
            translateDelta={this.state.translateDelta}
          />
      );
    });

    return (
      <div className="outfit-item-slider">
        <div className="item-scroll-header">Items</div>
        <div className="item-slide-index">{renderItems}</div>
        <div className="dashboard-buttons-vert">
          <button onClick={() => this.handleButton("prev")}>&and;</button>
          <button onClick={() => this.handleButton("next")}>&or;</button>
        </div>
      </div>
    );
  }
}

export default OutfitScrollbar;
