import React from 'react';

const BenefitCard = ({ bgcolor , index, icon, title, content }) => {

    return (
        <div  data-aos="flip-left" data-aos-duration="1500" className={`w-[300px] h-[300px] p-8 rounded-2xl 
        bg-[${bgcolor}]
        flex flex-col gap-3 text-white `}>
            {icon}
            <h2 className='text-xl'>{title}</h2>
            <p className='w-64'>
               {content}
            </p>
        </div>
    )
}

export default BenefitCard