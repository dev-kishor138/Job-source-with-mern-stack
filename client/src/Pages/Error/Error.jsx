import React from "react";
import Image from "../../assets/images/not-found.svg";
import Wrapper from "../../assets/wrappers/ErrorPage";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <div>
        <img src={Image} alt="Not-Found" />
        <h3>Oh! Page not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">Back To Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
