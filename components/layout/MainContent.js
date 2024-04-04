// MainContent.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const MainContent = ({ children }) => {
    return (
        <>
            {/*             <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#111',
                    },
                }}
            >
 */}

            <Header />
            <div style={{ minHeight: '70vh' }}>
                {children}
            </div>
            <Footer />



            {/* 

            </ConfigProvider> */}

        </>
    );
};

export default MainContent;
