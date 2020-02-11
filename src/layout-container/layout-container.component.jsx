import React from 'react';
import classes from './layout-container.styles.scss';

export const LayoutContainer = props => {
    return (
        <div>
            <LayoutTopBar></LayoutTopBar>
            <LayoutBottomBar></LayoutBottomBar>
            <LayoutContent></LayoutContent>
            <LayoutSideBar></LayoutSideBar>
        </div>
    );
};

const LayoutBottomBar = props => {
    return <div className={classes.myClass}>Fixed Bottom</div>;
};

const LayoutTopBar = props => {
    return <div>Fixed TopBar</div>;
};

const LayoutContent = props => {
    return <div>ScrollContent</div>;
};

const LayoutSideBar = props => {
    return <div>Sidebar</div>;
};
