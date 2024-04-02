"use client";

import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookiesC = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const hasAcceptedCookies = Cookies.get('acceptedCookies');
        const hasDeclinedCookies = Cookies.get('declinedCookies');

        if (!hasAcceptedCookies && !hasDeclinedCookies) {
            setShowPopup(true);
        }
    }, []);

    const handleAccept = () => {
        Cookies.set('acceptedCookies', 'true', { expires: 365 }); // Set cookies for 1 year
        setShowPopup(false);
    };

    const handleDecline = () => {
        Cookies.set('declinedCookies', 'true', { expires: 365 }); // Set cookies for 1 year
        setShowPopup(false);
    };

    return (
        <>
            {showPopup && (
                <div className='bg-gray-100 shadow-lg rounded-lg fixed bottom-[5%] left-5 md:left-[21%] z-50 w-[90%]  md:w-[60%]  m-auto flex flex-col gap-4  md:flex-row  items-center justify-evenly p-[2%] md:p-[1%] ' >
                    <div>
                        <p>This website uses cookies to ensure you get the best experience on your website. <span className='text-blue-500 hover:underline'><Link href={"/cookies"}>Learn More</Link></span></p>
                    </div>
                    <div className='flex flex-row gap-3' >
                        <Button variant='light' color='primary' onClick={handleDecline}>Decline</Button>
                        <Button color='primary' onClick={handleAccept}>Accept</Button>
                    </div>
                </div>
            )}
        </>
    );
}

export default CookiesC;
