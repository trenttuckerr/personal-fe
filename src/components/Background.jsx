import React from "react";
import sunset from "../assets/sunset.jpg"

const Background = () => {
        return (
            <div
                style={{
                        backgroundImage: `url(${sunset})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '100vh',
                        position: 'fixed',
                        width: '100%',
                        zIndex: '-1',
                }}
            />
        );
    };

export default Background;