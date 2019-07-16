import { connect } from "react-redux";
import { fetchAllItems } from "../../actions/item_actions";
import ItemIndex from "./item_index";

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.session.user.id,
    items: Object.values(state.entities.items)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllItems: (id) => dispatch(fetchAllItems(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemIndex);
