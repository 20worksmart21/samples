import React, { useState } from "react";
import store from '../Store/Store';

const NavwithChildren = React.memo(({ navName, navigationContent }) => {
    const [showChildren, setShowChildren] = useState(false);
    const showChildrenContent = () => {
        setShowChildren(!showChildren);
    }

    return <li className="childrenList" >
        <a href={navigationContent.url}>{navName}</a>
        <div
            style={
                {
                    display: 'inline-block',
                    position: "absolute",
                    right: '10px',
                    cursor: 'pointer'
                }
            }
            onClick={showChildrenContent}>
            {!showChildren ? '+' : '-'}
        </div>
        {showChildren && <ul>
            {
                Object.keys(navigationContent.children).map(childNav => {
                    return <li key={childNav}>
                        <a href={navigationContent.children[childNav].url}>
                            {childNav}
                        </a>
                    </li>
                })
            }
        </ul>}
    </li>

});
const Navigation = React.memo(() => {
    const intialState = store.getState();
    const navigationList = intialState.Accordion;
    return <ul className="navigationContainer">
        {
            Object.keys(navigationList).map(nav => {
                if (navigationList[nav].children) {
                    return <NavwithChildren navigationContent={navigationList[nav]} navName={nav} key={nav} />
                }
                return <li key={nav}>
                    <a href={navigationList[nav].url}>
                        {nav}
                    </a>
                </li>
            })
        }
    </ul>
});

export default Navigation;