import Footer from '@/components/footer/Footer'
import Nav from '@/components/nav/Nav'
import React from 'react'

const layout = ({ children }) => {
    return (
        <main>
            <nav className="w-full">
                <Nav />
            </nav>
            <section className='mt-14'>{children}</section>
            {/* Footer Part */}
            <footer>
                <Footer />
            </footer>
        </main>
    )
}

export default layout