import React, {Component} from 'react';
import Deal from './Deal';
import styled from 'styled-components';

//2 dollar off edible
//10 dollar private reserve  grams all day
//5 dollar off all wax
//5 dollar off all cartridges
//friday pic any daily deal i.e. all of the above
//5 dollar off wax
//5 dollar off cartridges

const DealObjects = [
    {
        day:'Monday',
        saving:'$2 dollars off edible'
    },
    {
        day:'Tuesday',
        saving:'$10 dollars private reserve grams all day'
    },
    {
        day:'Wednesday',
        saving:'$5 dollars off all wax'
    },
    {
        day:'Thursday',
        saving:'$5 dollars off all cartridges'
    },
    {
        day:'Friday',
        saving:'Pick any daily deal listed here'
    },
    {
        day:'Saturday',
        saving:'$5 dollars off wax'
    },
    {
        day:'Sunday',
        saving:'$5 dollars off all cartridges'
    },

]
const DealWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
flex-wrap:wrap;
`;
export default class Deals extends Component{

    render(){
      const finalDeals=  DealObjects.map((e,idx)=>{
            return <Deal day={e.day} deal={e.saving} key={idx}/>
        })
        return(
            <DealWrapper>
                {finalDeals}
            </DealWrapper>

        );
    }
}