"use client";
import React, { useState } from "react";
import Header from "./Components/Header";
import Title from "./Components/Title";
import Footer from "./Components/Footer";
import GetQuotes from "./Components/GetQuotes";

const page = () => {
  return (
    <>
      <Title />
      <Header />
      <GetQuotes />
      <Footer />
    </>
  );
};

export default page;
