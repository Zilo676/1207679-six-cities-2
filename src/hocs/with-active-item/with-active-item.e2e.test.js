import React from 'react';
import PropTypes from 'prop-types';

import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withActiveItem from './with-active-item';

Enzyme.configure({adapter: new Adapter()});

it.skip(`Return correct value`, () => {
  let testObject = {
    foo: `foo`,
    baz: 100
  };
  const MockComponent = (props) => {
    const {onActiveItem} = props;
    return <div onClick={onActiveItem(testObject)} />;
  };

  MockComponent.propTypes = {
    onActiveItem: PropTypes.func.isRequired,
  };

  const MockComponentWrapped = withActiveItem(MockComponent);
  const wrapper = mount(<MockComponentWrapped />);
  const div = wrapper.find(`div`);

  div.simulate(`click`);

  expect(wrapper.state().item).toEqual(testObject);
});
