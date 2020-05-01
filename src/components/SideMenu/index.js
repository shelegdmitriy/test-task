import React from 'react';
import { Icon } from 'semantic-ui-react';

const SideMenu = () => {
  const menuItems = [
    { key: 'home', text: 'Home', icon: 'home' },
    { key: 'dashboard', text: 'Dashboard', icon: 'industry' },
    { key: 'inbox', text: 'Inbox', icon: 'mail outline' },
    { key: 'products', text: 'Products', icon: 'barcode' },
    { key: 'invoices', text: 'Invoices', icon: 'book' },
    { key: 'customers', text: 'Customers', icon: 'user outline' },
    { key: 'chat-room', text: 'Chat Room', icon: 'comments' },
    { key: 'calendar', text: 'Calendar', icon: 'calendar alternate outline' },
    { key: 'help-center', text: 'Help Center', icon: 'life ring outline' },
    { key: 'settings', text: 'Settings', icon: 'setting' },
  ];
  return (
    <div className="side-menu__component">
      <div className="header-item">
        <span>impekable</span>
      </div>
      {menuItems.map(i => (
        <SideMenuItem
          key={`side_menu_item_${i.key}`}
        >
          <Icon name={i.icon} />
          <span>{i.text}</span>
        </SideMenuItem>
      ))}
    </div>
  );

};

const SideMenuItem = ({ children }) => (
  <div className="side-menu-item__component">
    {children}
  </div>
);

export default SideMenu;
