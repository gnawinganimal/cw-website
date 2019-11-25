import React from 'react';
import Changes from '../projects/Changes';
import Depression from '../projects/Depression';
import Excitement from '../projects/Excitement';
import InfiniteLoop from '../projects/InfiniteLoop';
import Smash from '../projects/Smash';
import Jammin from '../projects/Jammin';
import IWannaGoBack from '../projects/IWannaGoBack';
import NotQuiteRight from '../projects/NotQuiteRight';
import WhenTheSunGoesDown from '../projects/WhenTheSunGoesDown';

const Poetry = () => (
    <div>
      <h1>Poetry</h1>
      <p className="paragraph">
        I like poetry because it rhymes! I will write poetry... a lot of times?
      </p>
      <WhenTheSunGoesDown />
      <Changes />
      <Depression />
      <Excitement />
      <InfiniteLoop />
      <Smash />
      <Jammin />
      <IWannaGoBack />
      <NotQuiteRight />
    </div>
);

export default Poetry;
