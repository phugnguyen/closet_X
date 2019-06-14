import { connect } from "react-redux";
import { fetchItem } from "../../actions/item_actions";
import ItemShow from "./item_show";

const mapStateToProps = (state, ownProps) => {
  if (!ownProps.itemId) {
    return {};
  }
  return {
    item: state.entities.items[ownProps.itemId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchItem: id => dispatch(fetchItem(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemShow);
