import React from "react";
import { withRouter } from "react-router-dom";
import OutfitContainer from "../outfit/outfit_container";
// import SearchBar

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { translateDelta: 0 };
  }

  // componentDidMount(){
  //   this.props.fetchOutfits()
  //   .then(fetchItems?)
  // }

  handleButton(arg) {
    const { translateDelta } = this.state;
    if (arg === "next") {
      this.setState({ translateDelta: translateDelta + 500 });
    } else if (arg === "prev") {
      this.setState({ translateDelta: translateDelta - 500 });
    }
  }

  render() {
    // const outfits = this.props.outfits.map(outfit => {
    //   return <OutfitContainer outfit={outfit} />;
    // });

    const sampleItems = [
      {
        title: "JK and IU",
        username: "DeezCups420",
        imgURL: "https://pbs.twimg.com/media/C7MqraEXkAExdXg.jpg"
      },
      {
        title: "JK and IU",
        username: "DeezCups420",
        imgURL: "https://pbs.twimg.com/media/C7MqraEXkAExdXg.jpg"
      },
      {
        title: "JK and IU",
        username: "DeezCups420",
        imgURL: "https://pbs.twimg.com/media/C7MqraEXkAExdXg.jpg"
      },
      {
        title: "JK and IU",
        username: "DeezCups420",
        imgURL: "https://pbs.twimg.com/media/C7MqraEXkAExdXg.jpg"
      },
      {
        title: "JK and IU",
        username: "DeezCups420",
        imgURL: "https://pbs.twimg.com/media/C7MqraEXkAExdXg.jpg"
      },
      {
        title: "JK and IU",
        username: "DeezCups420",
        imgURL: "https://pbs.twimg.com/media/C7MqraEXkAExdXg.jpg"
      },
      {
        title: "JK and IU",
        username: "DeezCups420",
        imgURL: "https://pbs.twimg.com/media/C7MqraEXkAExdXg.jpg"
      },
      {
        title: "JK and IU",
        username: "DeezCups420",
        imgURL: "https://pbs.twimg.com/media/C7MqraEXkAExdXg.jpg"
      }
    ];

    const items = sampleItems.map(item => {
      return (
        <OutfitContainer
          outfit={item}
          translateDelta={this.state.translateDelta}
        />
      );
    });

    return (
      <div className="dashboard">
        <div className="outfit-index">{items}</div>
        <div className="dashboard-buttons">
          <button onClick={() => this.handleButton("prev")}>Left</button>
          <button onClick={() => this.handleButton("next")}>Right</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
