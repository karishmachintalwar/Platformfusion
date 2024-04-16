import React, { useState } from "react";
import './Movies.css';
import { render } from "react-dom";
import { scroll } from 'react-scroll';

const timeArray=[
    '10:30',
    '12:30',
    '14:30',
    '15:00',
    '19:30',
    '21:30',
];

const generateDate = () => {
    const date = new Date();
    let weekday = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    let weekdays= [];
    for(let i=0; i < 7; i++){
        let tempDate = {
            date: new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDate(),
            day: weekday[new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDay()]
        };
        weekdays.push(tempDate);
    }
    return weekdays;
};

const generateSeats = () => {
    let numRow = 8;
    let numColumn = 3;
    let rowArray = [];
    let start = 1;
    let reachnine  = false;

    for (let i=0; i < numRow; i++){
        let columnArray = [];
        for (let j=0; j< numColumn; j++){
            let seatObject = {
                number: start,
                taken: Boolean(Math.round(Math.random())),
                selected: false,
            };
            columnArray.push(seatObject);
            start++;
        }
        if(i==3){
            numColumn +=2;
        }
        if(numColumn <9 && !reachnine){
            numColumn +=2;
        }else{
            reachnine=true;
            numColumn -= 2;
        }
        rowArray.push(columnArray);
    }
    return rowArray;
};

const Seatbooking = () => {
    const [dataArray, setdataArray]= useState(generateDate());
    const [selectedDataIndex, setselectedDataIndex]= useState();
    const [price, setPrice] = useState(0);
    const [twoDSeatArray, settwoDSeatArray]= useState(generateSeats());
    const [selectedSeatArray, setselectedSeatArray]= useState([]);
    const [selectedTimeArray, setselectedTimeArray] = useState();
  return (<scroll 
  style={{styles:'seats'}}
  bounces={false}
  showsVerticalScrollIndicator={false}>
  <statusbar hiddedn />

  <view></view>
  </scroll>);
  
  };


export default Seatbooking;