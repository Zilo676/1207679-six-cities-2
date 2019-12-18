import React from 'react';

const emptyHoc = (Component) => {
  const EmptyHocComponent = () => <Component />;

  return EmptyHocComponent;
};

export default emptyHoc;
