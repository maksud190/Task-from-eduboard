import Image from 'next/image';
import React from 'react';

const Error = () => {
    return (
        <div>
            <Image className='m-auto' src='/error.png' width={1162} height={658} alt=''></Image>
        </div>
    );
};

export default Error;