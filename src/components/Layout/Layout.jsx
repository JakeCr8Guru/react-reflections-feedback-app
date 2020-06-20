import React from 'react';

// Component imports:
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout;