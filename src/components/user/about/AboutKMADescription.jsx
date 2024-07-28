import React from 'react'
import UnderlinedHeading from '@/components/user/Common/UnderlinedHeading'

function AboutKMADescription() {
    return (
        <div className='max-w-screen-xl p-3 mx-auto'>
            <UnderlinedHeading heading='About' text='KMA' />
            <p className='mt-10 max-md:text-sm'>
                {`Cochin was a sleepy little town in the 1950’s. The State of Kerala had just been formed in November 1956 and the Communist Government 
                headed by E.M.S.Namboodiripad was yet to become a reality. P.S.Rao, formerly of the Indian Civil Service, was the Governor who administered
                 over the State with the help of his advisers. Cochin City had not come into existence and the three Municipalities of Ernakulam, Mattanchery
                  and Fort Cochin were functioning separately. This was the backdrop against which the Kerala Institute of Management, as it was called then,
                  came into existence with the initiative of a few Entrepreneurs, Managers and Civil Servants who visualized the necessity of a forum to discuss
                   and debate issues of mutual interest and concern, and find relevant solutions via peer feedback. The institute was founded with Mr.M.S.Venkitaraman,
                    Administrative Officer of Cochin Port (Cochin Port Trust had not been formed yet) as the President, Mr.S.Nallaperumal, Dy. General Superintendent of FACT
                    as the Secretary and Mr.Paul Pothen, again of FACT, as the Joint Secretary. The membership consisted of 5 Corporate Members, 11 Associate Corporate Members,
                     7 Individual Members and 1 Life Member.`}
                <br />
                <br />
                {
                    `
The Institute was registered in March 1957 and the inaugural meeting held on 10th September of the same year at TDM Hall, Ernakulam. Dr.John Mathai, Vice Chancellor of Kerala University and Chairman of the Governing Body of the Administrative Staff College, Hyderabad presided over the function and Mr.J.N.Sri Nagesh, Chairman, Hindustan Aeronautics Ltd delivered the inaugural address. A large number of representatives from the Government sector, industrial & commercial organizations and trade unions attended the prestigious function, which was to set the pace for all its activities ahead.
`}
                <br />
                <br />
                {
                    `Lectures and Seminars were started right during the first year. The 1st Seminar was held from 12th to 14thNovember 1957 in the Board Room at the Administrative Block of Cochin Port. Mr.K.P.Gopalan, Hon’ble Minister for Industries addressed the seminar and Mr.James B.Shearer of ILO was the leading faculty. During the 2nd Seminar (15th to 17th February 1958), Mr.E.M.S.Namboodiripad, Chief Minister of Kerala was also present to grace the occasion.`
                }
            </p>
        </div>
    )
}

export default AboutKMADescription
