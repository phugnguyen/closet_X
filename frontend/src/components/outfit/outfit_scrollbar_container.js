import { connect } from "react-redux";
import { fetchAllItems } from "../../actions/item_actions";
import OutfitScrollbar from "./outfit_scrollbar";

const mapStateToProps = state => {
  return {
    userId: state.session.user.id,
    items: Object.values(state.entities.items),
    itemLength: Object.values(state.entities.items).length
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllItems: (id) => dispatch(fetchAllItems(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OutfitScrollbar);
