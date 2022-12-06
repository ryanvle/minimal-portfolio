import React from 'react';

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Ryan Le</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Web Developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">Hey 👋, I'm a student at the University of Washington Information School with a passion for software engineering.
            I strive to create cutting-edge technological solutions that will make a positive difference in a person's life. No matter how small or big.</p>
        </div>
    )
}

export default Intro;