import React, { createContext, useContext, useState, useRef } from 'react';

const TabContext = createContext({});

export function Tab({ children }) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </TabContext.Provider>
  );
}

Tab.Item = function TabItem({ children, id }) {
  const TabItemRef = useRef();
  const { selectedTab, setSelectedTab } = useContext(TabContext);
  const { childElementCount } = TabItemRef?.current?.parentElement || 0;

  const HandleTabSelect = () => {
    setSelectedTab(id);
  };

  const HandleKeyPress = (event) => {
    const LastElement = childElementCount - 1;

    switch (event?.key) {
      case 'ArrowLeft':
        setSelectedTab(selectedTab === 0 ? LastElement : selectedTab - 1);
        break;
      case 'ArrowRight':
      case 'Tab':
        setSelectedTab(selectedTab === LastElement ? 0 : selectedTab + 1);
        break;
      default:
        break;
    }
  };

  return (
    <li
      className="tab-item"
      ref={TabItemRef}
      onClick={HandleTabSelect}
      onKeyDown={HandleKeyPress}
      role="presentation"
    >
      {/* eslint-disable-next-line jsx-a11y/role-supports-aria-props */}
      <button className="outline-none" aria-selected={id === selectedTab}>
        {children}
      </button>
    </li>
  );
};

Tab.List = function TabList({ children }) {
  const TabListItems = children.map((child, index) =>
    React.cloneElement(child, { key: index, id: index }),
  );

  return (
    <ul role="tab-list" aria-orientation="horizontal" aria-label="List of Tabs">
      {TabListItems}
    </ul>
  );
};

Tab.Panels = function TabPanels({ children }) {
  const { selectedTab } = useContext(TabContext) || {};

  return <div className="pt-4">{children[selectedTab || 0]}</div>;
};

Tab.Panel = function TabPanel({ children }) {
  return <div role="tab-panel">{children}</div>;
};
