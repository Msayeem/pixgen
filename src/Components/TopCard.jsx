import { Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TopCard = ({photo}) => {
    return (
        <Card className='border'>
            <Image src={photo.imageUrl} height={200} width={200} alt='image'></Image>
            <h1>{photo.title}</h1>

            <div className='flex justify-around items-center'>
                <p>{photo.likes}</p>
                <p>{photo.downloads}</p>
            </div>
            <Link></Link>
        </Card>
    );
};

export default TopCard;