import React from 'react';
import { BounceLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='flex justify-center items-center'>
            <BounceLoader color="#0cdfec" />
        </div>
    );
};

export default loading;