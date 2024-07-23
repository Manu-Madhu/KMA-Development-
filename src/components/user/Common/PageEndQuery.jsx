import Link from 'next/link'
import React from 'react'

function PageEndQuery({ heading, subheading, button }) {
    return (
        <div className="w-full my-5 h-screen relative flex items-center justify-center">
            <div className="w-fit flex flex-col items-center p-3">
                <h1 className="text-[2.4rem] max-md:text-3xl font-bold leading-[3.5rem] max-md:leading-10 text-center">
                    {heading || "Interested to conduct event in KMA?"}
                </h1>
                <p className="text-center">
                    {subheading || "Click the register button below to inquire hall"}
                </p>
                <Link href={button?.path || ""}>
                    <button className="px-6 py-2 mt-8 border border-gray-600 w-fit rounded-full font-semibold text-red-600">
                        {button?.title || "Inquire now"}
                    </button>
                </Link>
            </div>
            <img
                src={"/assets/Register/Pattern 1.png"}
                alt="Pattern 1"
                // width={500}
                // height={500}
                className="absolute top-0 left-0"
            />
            <img
                src={"/assets/Register/Pattern 2.png"}
                alt="Pattern 2"
                // width={500}
                // height={500}
                className="absolute bottom-0 max-md:hidden right-0 "
            />
        </div>
    )
}

export default PageEndQuery
