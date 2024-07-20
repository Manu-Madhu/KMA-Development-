import Image from 'next/image'
import React from 'react'
import image from '../../../../public/assets/kma csr awards/award_details.png'
import vector from '../../../../public/assets/kma csr awards/vector.png'
function KMACSRAwards() {
    return (
        <div className='flex mt-16 w-11/12 mx-auto'>
            <div className='w-full'>
                <h1 className='text-[2.8rem] font-bold'>KMA CSR Awards
                    <span className='relative ml-3'>
                        2024
                        <Image src={vector} className='absolute right-0 -bottom-2' alt='Vector' />
                    </span>
                </h1>
                <p className='text-base mt-6 mr-10'>
                    {`  Corporate Social Responsibility (CSR) and Environment, Social, & Governance (ESG) have become pivotal in steering society towards Sustainable Development Goals (SDG), aligning corporate actions with global priorities. Recent challenges, such as pandemics and climate change, have prompted an expansion of CSR initiatives and a reevaluation of corporate performance metrics, emphasising not only financial returns but also environmental and social contributions. To achieve their objectives, the Corporations increasingly rely on nongovernmental organisations for efficient and effective implementation of CSR projects. <br />
                    The Kerala Management Association heralds this paradigm shift by calling on progressive companies to join the KMA CSR Awards 2024. The Awards will honour organizations that are innovatively tackling societal issues, integrating CSR and sustainability into their core values, and making a positive impact that echoes beyond the corporate sphere.
                    Winners selected by our distinguished Jury will be lauded at a grand ceremony on March 7th, 2024, receiving a prestigious trophy and a certificate of excellence. This honour not only elevates your company's reputation but also bolsters staff morale and engagement with CSR. Additionally, it provides a competitive edge and amplifies your success through KMA's publications and press releases.
                `}
                </p>
            </div>
            <Image className='h-[580px]' src={image} alt='KMA CSR Awards' />
        </div>
    )
}

export default KMACSRAwards
