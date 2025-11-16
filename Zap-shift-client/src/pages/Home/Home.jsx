import React, { Suspense } from 'react';
import Banner from './Banner';
import Brands from './Brands';
import Reviwes from './Reviwes';
import axios from 'axios';

const Home = () => {

      const reviwes =axios("/reviews.json").then((data) => data.data);

  /*   console.log(reviwes) */
    return (
      <div>
        <Banner />
        <Brands />
        <Suspense fallback="loading...">
          <Reviwes reviwes={reviwes} />
        </Suspense>
      </div>
    );
};

export default Home;