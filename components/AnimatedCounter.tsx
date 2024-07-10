"use client";
import React from "react";
import CountUp from "react-countup";
const AnimatedCounter = ({ amount }: { amount: number }) => {
  return <CountUp end={amount} decimal="," redraw={true} duration={2} />;
};

export default AnimatedCounter;
