import React from 'react';
import renderer from 'react-test-renderer';

import {SortForm} from './sort-form.jsx';

it(`Correctly rendered`, () => {
  const mockFunc = jest.fn();
  const tree = renderer.create(<SortForm
    cssClass={`TEST`}
    onClick={mockFunc}
    onForm={mockFunc}
    isActive={true}
    currentSortType={`Sort Type`}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
