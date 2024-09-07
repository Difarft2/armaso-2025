import React, { useState, useEffect } from "react";
import "../css/countdown.css"

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
        <h2 className="judul-cd">COUNTDOWN</h2>

        <div className="countdown-container">
            <div className="countdown-item">
                {timeLeft.months}
                <span>Bulan</span>
            </div>

            <div className="countdown-item">
                {timeLeft.days}
                <span>Hari</span>
            </div>

            <div className="countdown-item">
                {timeLeft.hours}
                <span>Jam</span>
           </div>

            <div className="countdown-item">
                {timeLeft.minutes}
                <span>Menit</span>
            </div>

            {/* <div className="countdown-item">
                {timeLeft.seconds}
                <span>Detik</span>
            </div> */}
        </div>
    </div>
    );
};


export default Countdownt;