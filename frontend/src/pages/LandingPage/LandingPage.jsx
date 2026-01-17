import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

const LandingPage = () => {
    const location = useLocation();
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
        });

        // Map paths to IDs
        const path = location.pathname;
        let elementId = '';
        if (path === '/tinh-nang') elementId = 'tinh-nang';
        else if (path === '/gioi-thieu') elementId = 'gioi-thieu';
        else if (path === '/san-pham') elementId = 'san-pham';
        else if (path === '/phap-ly') elementId = 'phap-ly';
        else if (path === '/tuyen-dung') elementId = 'tuyen-dung';

        if (elementId) {
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    return (
        <div style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", overflowX: 'hidden' }}>
            <Header onContactClick={() => setIsContactModalOpen(true)} />
            <Body />
            <Footer />
            <ContactModal
                visible={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </div>
    );
};

export default LandingPage;
