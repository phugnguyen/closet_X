import { connect } from "react-redux";
import { createItem } from "../../actions/item_actions";
import ItemForm from "./item_form";

const mapStateToProps = state => {
  return {
    item: {
      user: state.session.user.id,
      title: "",
      category: "",
      color: "",
      image: null,
      imageUrl: null
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: item => dispatch(createItem(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemForm);
