import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Immutable from 'immutable';

import ExampleItems from '../../components/example/ExampleItems';
import {filteredExampleItemsSelector} from '../../selectors/exampleSelector';
import {addExampleItemAction} from '../../reducers/exampleReducer';

// Ideally the container just composes React components and doesn't add any DOM nodes
const ExampleContainer = ({exampleItems, addExampleItem}) => (
  <ExampleItems items={exampleItems} onAddItem={addExampleItem} />
);

ExampleContainer.propTypes = {
  exampleItems: PropTypes.instanceOf(Immutable.List).isRequired,
  addExampleItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  exampleItems: filteredExampleItemsSelector(state),
});

const mapDispatchToProps = {
  addExampleItem: addExampleItemAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExampleContainer);
