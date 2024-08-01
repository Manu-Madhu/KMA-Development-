import Footer from '@/components/footer/Footer'
import Nav from '@/components/nav/Nav'
import React from 'react'

const layout = ({ children }) => {
    return (
        <>
            <nav className="w-full">
                <Nav />
            </nav>
            <section>{children}</section>
            {/* Footer Part */}
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default layout