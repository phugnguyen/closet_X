import React from "react";
import { withRouter } from "react-router-dom";

class ItemForm extends React.Component {
  componentDidMount() {
    if (this.props.formType === "Update Item") {
      this.props
        .fetchItem(this.props.match.params.itemId)
        .then(() => this.setState(this.props.item));
    }
  }

  constructor(props) {
    super(props);
    this.state = this.props.item;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageFile = this.handleImageFile.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user", this.state.user);
    formData.append("title", this.state.title);
    if (this.state.image) {
      formData.append("image", this.state.image);
    }
    if (this.state.imageURL) {
      formData.append("imageURL", this.state.imageURL);
    }
    formData.append("category", this.state.category);
    formData.append("color", this.state.color);
    this.props
      .action(formData, this.props.item._id)
      .then(res => this.props.history.push("/closet"));
  }

  handleImageFile(e) {
    const image = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        image: image,
        prevImgURL: fileReader.result
      });
    };
    if (image) {
      fileReader.readAsDataURL(image);
    }
  }

  render() {
    const showHideClassName = this.props.show
      ? "new-item-modal-background display-block"
      : "new-item-modal-background display-none";

    return (
      <div className={showHideClassName}>
        <div className="modal-subcontainer">
          <div className="new-form-container">
            <form onSubmit={this.handleSubmit}>
              <div className="form-image">
                <img className="track-img-preview" src={this.state.prevImgURL} />
                <input type="file" onChange={this.handleImageFile} />
              </div>
              <div className="form-fields">
                <label>Item Name: <br/>
                  <input
                    type="text"
                    value={this.state.title}
                    onChange={this.update("title")}
                  />
                </label>
                <select
                  onChange={this.update("category")}
                  value={this.state.category}
                >
                  <option>category</option>
                  <option value="coat">coat</option>
                  <option value="jacket">jacket</option>
                  <option value="blazer">blazer</option>
                  <option value="vest">vest</option>
                  <option value="dress">dress</option>
                  <option value="jumpsuit">jumpsuit</option>
                  <option value="shirt/blouse">shirt/blouse</option>
                  <option value="t-shirt">t-shirt</option>
                  <option value="tank top">tank top</option>
                  <option value="bodysuit">bodysuit</option>
                  <option value="sweatshirt">sweatshirt</option>
                  <option value="sweater">sweater</option>
                  <option value="cardigan">cardigan</option>
                  <option value="pants">pants</option>
                  <option value="jeans">jeans</option>
                  <option value="leggings">leggings</option>
                  <option value="shorts">shorts</option>
                  <option value="skirt">skirt</option>
                  <option value="shoes">shoes</option>
                  <option value="bag">bag</option>
                  <option value="accessory">accessory</option>
                  <option value="etc">etc</option>
                </select>

                <select onChange={this.update("color")} value={this.state.color}>
                  <option>color</option>
                  <option value="black">black</option>
                  <option value="grey">grey</option>
                  <option value="white">white</option>
                  <option value="beige">beige</option>
                  <option value="brown">brown</option>
                  <option value="metallic">metallic</option>
                  <option value="purple">purple</option>
                  <option value="blue">blue</option>
                  <option value="green">green</option>
                  <option value="yellow">yellow</option>
                  <option value="orange">orange</option>
                  <option value="pink">pink</option>
                  <option value="off-white">off-white</option>
                  <option value="red">red</option>
                  <option value="neon">neon</option>
                  <option value="etc">etc</option>
                </select>

                <input type="submit" value={this.props.formType} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ItemForm);
