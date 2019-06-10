import React from "react";
import { withRouter } from "react-router-dom";

class OutfitShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const dictionary = {
      outer: 0,
      top: 1,
      bottom: 2,
      shoes: 3,
      accessories: 4
    };

    // https://www.w3schools.com/js/js_array_sort.asp
    // sort by dictionary[category]
    // sort before displaying

    let items = [
      {
        category: "bottom",
        id: 2,
        title: "Pacsun Distressed Jeans",
        imageURL:
          "https://www.pacsun.com/dw/image/v2/AAJE_PRD/on/demandware.static/-/Sites-pacsun_storefront_catalog/default/dw8830fda9/product_images/0132454210128NEW_00_510.jpg?sw=690&sh=1070&sm=fit"
      },
      {
        category: "top",
        id: 1,
        title: "Supreme Classic Logo",
        imageURL: "https://i.ebayimg.com/images/i/142282115467-0-1/s-l1000.jpg"
      },
      {
        category: "shoes",
        id: 3,
        title: "Supreme Classic Logo",
        imageURL:
          "https://image.goat.com/attachments/product_template_pictures/images/008/654/801/original/258638_00.png.png"
      }
    ];

    items = items.sort(function(a, b) {
      return dictionary[a.category] - dictionary[b.category];
    });

    const outfit = { id: 5, title: "Streetwear", items: [1, 2, 3] };

    const images = items.map(item => {
      return (
        <div>
          <img src={item.imageURL} className="item-img" alt="" />
        </div>
      );
    });

    const itemTitles = items.map(item => {
      return <div>Item Title: {item.title}</div>;
    });

    return (
      <div className="outfit-show">
        <div>{outfit.title}</div>
        <div className="item-description-div">
          <div>{images}</div>
          <div>
            {/* Map through item titles and make them into links */}
            {itemTitles}
            <div>Tags: {/* item/outfit tags*/}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(OutfitShow);
