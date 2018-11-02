//functional component, this creates the array of navigation items
import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems =(props)=>(
    <ul className={classes.NavigationItems}>
       <NavigationItem exact link="/" >Account</NavigationItem>
       <NavigationItem link="/menu">Menu</NavigationItem>
       <NavigationItem link="/contact">Contact</NavigationItem>
    </ul>
);

export default navigationItems;