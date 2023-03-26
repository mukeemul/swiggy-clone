import React, { useState } from 'react'
import RepData from '../../config/data';
import { CiStar } from 'react-icons/ci';

const Card = (props) => {
  return (
    <div className="banner">
      <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${props?.Data?.image}`} alt="Swiggy" />
      <h3>{props?.Data?.name}</h3>
      <p>{props?.Data?.cuisines.join(", ")}</p>
      <div className="rating">
        <div className="rate"><CiStar />{props?.Data?.rating}</div>
        <div className="time">{props?.Data?.time}</div>
        <div className="price">{props?.Data?.cost}</div>
      </div>
    </div>
  );
}

const BodyApp = () => {
  return (
    <>
      <Card Data={RepData[0]} />
      <Card Data={RepData[1]} />
      <Card Data={RepData[2]} />
      <Card Data={RepData[3]} />
      <Card Data={RepData[4]} />
      <Card Data={RepData[5]} />
      <Card Data={RepData[6]} />
      <Card Data={RepData[7]} />
      <Card Data={RepData[8]} />
      <Card Data={RepData[9]} />
      <Card Data={RepData[10]} />
      <Card Data={RepData[11]} />
      <Card Data={RepData[12]} />
      <Card Data={RepData[13]} />
      <Card Data={RepData[14]} />
      <Card Data={RepData[15]} />
      <Card Data={RepData[16]} />
      <Card Data={RepData[17]} />
      <Card Data={RepData[18]} />
      <Card Data={RepData[19]} />
      <Card Data={RepData[20]} />
      <Card Data={RepData[21]} />
      <Card Data={RepData[22]} />
      <Card Data={RepData[23]} />
      <Card Data={RepData[24]} />
      <Card Data={RepData[25]} />
      <Card Data={RepData[26]} />
      <Card Data={RepData[27]} />
      <Card Data={RepData[28]} />
      <Card Data={RepData[29]} />
      <Card Data={RepData[30]} />
      <Card Data={RepData[31]} />
    </>
  )
}

export default BodyApp;
