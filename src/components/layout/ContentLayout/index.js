import React from 'react';
import PropTypes from 'prop-types';

const ContentLayout = ({ children }) => (
  <div className="content-layout__component">
    {children}
  </div>
);

ContentLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.object]).isRequired,
};

export default ContentLayout;
