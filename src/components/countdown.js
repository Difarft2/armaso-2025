import React, { useState, useEffect } from "react";

const Countdownt =({targetDate})=>{
    const calculateTimeLeft = () => {
        const now = new Date();
        const target = new Date(targetDate);
        const difference = +target - +now;

        if (difference <= 0) {
            return {
                months: 0,
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        // Calculate months remaining
        let months = (target.getFullYear() - now.getFullYear()) * 12 + (target.getMonth() - now.getMonth());

        // Adjust if target date's day of the month is earlier in the month
        if (target.getDate() < now.getDate()) {
            months--;
        }

        // Calculate remaining days, hours, minutes, and seconds
        const timeRemaining = +new Date(targetDate) - +new Date();
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24) % 30);
        const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
        const seconds = Math.floor((timeRemaining / 1000) % 60);

        return {
            months,
            days,
            hours,
            minutes,
            seconds,
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Clear the interval when the component is unmounted
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div>
            <h1>Countdown Timer</h1>
            <div>
                {timeLeft.months} months {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes{" "}
                {timeLeft.seconds} seconds
            </div>
        </div>
    );
};


export default Countdownt;