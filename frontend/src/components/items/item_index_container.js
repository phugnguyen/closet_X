import { connect } from "react-redux";
import { fetchAllItems } from "../../actions/item_actions";
import ItemIndex from "./item_index";

const mapStateToProps = (state, ownProps) => {
  return {
    items: Object.values(state.entities.items)
  };
};

const mapDispatchToProps = dipatch => ({
  fetchAllItems: () => dipatch(fetchAllItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemIndex);
