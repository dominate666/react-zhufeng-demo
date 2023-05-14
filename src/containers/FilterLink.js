import { connect } from "react-redux";
import { setVisibilityFilter } from "../action";
import Link from "../components/Link";

/* const mapStateToProps = (state, ownProps) => {
  console.log("state", state);
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    },
  };
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink; */

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop,
  };
};

const FilterLink = connect(mapStateToProps);
export default FilterLink;
