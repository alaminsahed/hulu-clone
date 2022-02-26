import React from 'react';

const HeaderItem = ({ title, Icon }) => {
    return (
        <div className='group flex flex-col items-center group-w-12 cursor-pointer sm:w-20 hover:text-white'>
            <Icon className="h-8 mb-1 group-hover:animate-bounce" />
            <p className='tracking-widest opacity-100 group-hover:opacity-100'>{title}</p>
        </div>
    );
};

export default HeaderItem;