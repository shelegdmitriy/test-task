import React from 'react';

const SideMenu = () => {
  const menuItems = [
    { key: 'home', text: 'Home', icon: 'home' },
    { key: 'dashboard', text: 'Dashboard', icon: '' },
    { key: 'inbox', text: 'Inbox', icon: '' },
    { key: 'products', text: 'Products', icon: '' },
    { key: 'invoices', text: 'Invoices', icon: '' },
    { key: 'customers', text: 'Customers', icon: '' },
    { key: 'chat-room', text: 'Chat Room', icon: '' },
    { key: 'calendar', text: 'Calendar', icon: '' },
    { key: 'help-center', text: 'Help Center', icon: '' },
    { key: 'settings', text: 'Settings', icon: '' },
  ];
  return (
    <div className="side-menu__component" style={{ width: "250px", height: "100%", padding: "20px" }}>
      <div className="header-item">
        <span style={{ textTransform: "uppercase",  }}>impekable</span>
      </div>
      {menuItems.map(i => (
        <SideMenuItem
          key={`side_menu_item_${i.key}`}
        >
          <span>{i.text}</span>
        </SideMenuItem>
      ))}
    </div>
  );

};

const SideMenuItem = ({ children }) => (
  <div className="side-menu-item__component" style={{ margin: "20px 0" }}>
    {children}
  </div>
);

export default SideMenu;
