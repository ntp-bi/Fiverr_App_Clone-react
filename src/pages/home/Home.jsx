// eslint-disable-next-line no-unused-vars
import React from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./home.scss";

const Home = () => {
    return (
        <div>
            <Featured />
            <TrustedBy />
        </div>
    );
};

export default Home;
