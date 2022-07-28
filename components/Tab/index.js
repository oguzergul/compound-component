import React, { createContext, useState, useContext, useRef } from 'react';

const TabContext = createContext();

export function Tab({ children,id }) {
    const TabItemRef = useRef();
    const { selectedTab, setSelectedTab, tabCount } = useContext(TabContext);

    const HandleTabSelect = () => {
        const SelectedTab = Array.from(TabItemRef?.current?.parentElement?.children).indexOf(TabItemRef.current)
        setSelectedTab(SelectedTab);
    }

    const HandleKeyPress = (event) => {
        const { key } = event;
        const LastElement = tabCount - 1;

        switch (key){
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
    }

    return (
        <li
            autoFocus={true}
            ref={TabItemRef}
            role="presentation"
            onKeyDown={HandleKeyPress}
            onClick={HandleTabSelect}>
            <button className="outline-none" aria-selected={id === selectedTab}>
                {children}
            </button>
        </li>
    );
}

Tab.Group = function TabGroup({ children }) {
    const [selectedTab, setSelectedTab] = useState(0);
    const [tabCount, setTabCount] = useState(0);

    return (
        <TabContext.Provider value={{selectedTab,setSelectedTab, tabCount, setTabCount}}>
            {children}
        </TabContext.Provider>
    )
};

Tab.List = function TabList({ children}) {
    const { setTabCount } = useContext(TabContext) || {};

    React.useEffect(() => {
        setTabCount(Array.from(children).length);
    }, [children]);

    const TabListItems = children.map((child, index) => React.cloneElement(child, { key: index, 'id': index }));

    return (
        <ul role="tablist" aria-orientation="horizontal" aria-label="List of Tabs">{TabListItems}</ul>
    );
};

Tab.Panels = function TabPanels({ children }) {
    const { selectedTab } = useContext(TabContext) || {};

    return <div className="pt-4" >{children[selectedTab]}</div>;
};

Tab.Panel = function TabPanel({ children }) {
    return <div role="tabpanel" >{children}</div>;
};
