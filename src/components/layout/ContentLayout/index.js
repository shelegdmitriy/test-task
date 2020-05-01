import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Image } from 'semantic-ui-react';

const ContentLayout = ({ children }) => (
  <div className="content-layout__component">
    <div className="content-layout-header">
      <div className="search-section">
        <Icon name="search" />
        <span>Search transactions, invoices or help</span>
      </div>

      <div className="user-wrapper">
        <div className="helpers-icon">
          <Icon name="life ring outline" />
          <Icon name="comments" />
          <Icon name="bell" />
        </div>

        <div className="divider" />

        <div className="user-info">
          <span>John Doe</span>
          <Icon name="angle down" />
          <Image avatar src="https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/10-512.png" />
        </div>
        </div>
    </div>

    <h1>Calendar</h1>

    {children}
  </div>
);

ContentLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.object]).isRequired,
};

export default ContentLayout;
