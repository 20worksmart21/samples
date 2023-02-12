import React, { useState } from "react"

const navigationList = {
    home: {
        url: '/home',
    },
    tab1: {
        url: '/tab1',
        children: {
            children1: {
                url: '/tab1/children1',
            },
            children2: {
                url: '/tab1/children2',
            }
        }
    },
    tab2: {
        url: '/tab2',
        children: {
            children1: {
                url: '/tab2/children1',
            },
            children2: {
                url: '/tab2/children2',
            },
            children3: {
                url: '/tab2/children2',
            }
        }
    }
}

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