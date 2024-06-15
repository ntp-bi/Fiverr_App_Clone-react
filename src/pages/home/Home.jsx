// eslint-disable-next-line no-unused-vars
import React from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";

import { cards } from "../../assets/data/data";

import "./home.scss";

const Home = () => {
    return (
        <div>
            <Featured />
            <TrustedBy />
            <Slide slidesToShow={5} arrowsScroll={2}>
                {cards.map((card) => (
                    <CatCard key={card.id} item={card} />
                ))}
            </Slide>
        </div>
    );
};

export default Home;
