//this is a functional component, creates side Drawer menu for mobile screens

//this component outputs to Layout,
import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

import Aux from '../../hoc/Aux/Aux';
const sideDrawer=(props)=>{
    //default CSS class given is classes.close
    let attachedClasses=[classes.SideDrawer,classes.Close];
    //what CSS classes do we pass on to the JSX div below?
    if(props.open){
        attachedClasses=[classes.SideDrawer,classes.Open];
    }
    return(
        <Aux>

            <div className={attachedClasses.join(' ')}>
                
                   
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
         
        </Aux>
    );
};

export default sideDrawer;