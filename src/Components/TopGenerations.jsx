import React from 'react';
import TopCard from './TopCard';

const TopGenerations = async() => {

const res= await fetch('https://pixgen-beryl.vercel.app/data.json');
const photos= await res.json();

    return (
      <div>
        <h1 className='font-bold text-2xl py-3'>Top Generations</h1>
          <div className='grid grid-cols-4 gap-5'>
            {
              photos.slice(0, 8).map(photo=>
                <TopCard key={photo.id} photo={photo}></TopCard>
              )
            }
        </div>
      </div>
    );
};

export default TopGenerations;