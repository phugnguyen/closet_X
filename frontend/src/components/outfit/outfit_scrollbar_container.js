import { connect } from "react-redux";
import { fetchAllItems } from "../../actions/item_actions";
import OutfitScrollbar from "./outfit_scrollbar";

const mapStateToProps = state => {
  return {
    items: Object.values(state.entities.items)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllItems: () => dispatch(fetchAllItems())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OutfitScrollbar);
