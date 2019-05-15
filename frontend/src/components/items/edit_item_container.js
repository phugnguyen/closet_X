import { connect } from "react-redux";
import { updateItem, fetchItem } from "../../actions/item_actions";
import { withRouter } from "react-router-dom";
import ItemForm from "./item_form";

const mapStateToProps = (state, ownProps) => {
  let item = state.entities.items[ownProps.match.params.itemId];
  if (!item) {
    item = {
      user: state.session.user.id,
      title: "",
      category: "",
      color: "",
      imageURL: ""
    };
  } else {
    item = state.entities.items[ownProps.match.params.itemId];
  }

  return {
    item: item,
    formType: "Update Item"
  };
};

const mapDispatchProps = dispatch => {
  return {
    fetchItem: id => dispatch(fetchItem(id)),
    action: (item, id) => dispatch(updateItem(item, id))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchProps
  )(ItemForm)
);
