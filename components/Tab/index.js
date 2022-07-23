import React, {createContext, useState, useContext, useRef} from 'react';

const TabContext = createContext();

const TabContextProvider = ({children}) => {
    const [selectedTab,setSelectedTab] = useState(0);
    const [tabCount, setTabCount] = useState([]);

    return (
        <TabContext.Provider value={{selectedTab,setSelectedTab, tabCount, setTabCount}}>
            {children}
        </TabContext.Provider>
    )
}

export function Tab({ children }) {
    const TabItemRef = useRef();
    const { selectedTab, setSelectedTab } = useContext(TabContext);

    const TabCount = TabItemRef?.current?.parentElement?.childElementCount || 0;

    const handleActiveTabClass = () => {
        TabItemRef.current.classList.add('active-tab');
        Array.from(TabItemRef?.current?.parentElement?.children).filter((item,index) => index !== selectedTab).forEach(item => item.classList.remove('active-tab'))
    }

    const HandleTabSelect = () => {
        const SelectedTab = Array.from(TabItemRef?.current?.parentElement?.children).indexOf(TabItemRef.current)

        setSelectedTab(SelectedTab);
    }

    const HandleKeyPress = (event) => {
        if (event.key === "ArrowLeft") {
            setSelectedTab(selectedTab === 0 ? TabCount - 1 : selectedTab - 1);
        } else if(event.key === "ArrowRight" || event.key === "Tab") {
            setSelectedTab(selectedTab === TabCount - 1 ? 0 : selectedTab + 1);
        }
    }

    React.useEffect(() => {
        handleActiveTabClass();
    }, [selectedTab]);

    return (
        <li
            className="outline-0 flex font-normal text-sm tracking-wide font-sf-pro leading-6 cursor-pointer pt-3 pb-2.5 border-b-2 text-gray-500 border-transparent "
            autoFocus={true}
            ref={TabItemRef}
            role="presentation"
            onKeyDown={HandleKeyPress}
            onClick={HandleTabSelect}>
            <button className="outline-none" aria-selected={true}>
                {children}
            </button>
        </li>
    );
}

Tab.Group = function TabGroup({ children }) {
    return (
        <TabContextProvider>
            {children}
        </TabContextProvider>
    );
};

Tab.List = function TabList({ children}) {
    return (
        <ul role="tablist" aria-orientation="horizontal" aria-label="List of Tabs" className="border-b border-slate-200 space-x-6 flex">{children}</ul>
    );
};

Tab.Panels = function TabPanels({ children }) {
    const { selectedTab } = useContext(TabContext) || {};

    return <section className="pt-4">{children[selectedTab]}</section>;
};

Tab.Panel = function TabPanel({ children }) {
    return <div>{children}</div>;
};
