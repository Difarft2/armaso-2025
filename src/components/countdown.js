import React, { useState, useEffect, useCallback } from "react";
import { targetDates, messages } from '../setting/cd.setting';
import "../css/countdown.css"

const Countdown = ({ targetDate, onComplete, message }) => {
    const calculateTimeLeft = useCallback(() => {
        const now = new Date();
        const target = new Date(targetDate);
        const difference = +target - +now;

        if (difference <= 0) {
            onComplete();
            return {
                months: 0,
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        let months = (target.getFullYear() - now.getFullYear()) * 12 + (target.getMonth() - now.getMonth());

        if (target.getDate() < now.getDate()) {
            months--;
        }

        const timeRemaining = +target - +now;
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
    }, [targetDate, onComplete]);

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [calculateTimeLeft]);

    return (
        <div className="cd-body">
            <div className="countdown-container">
                <div className="timer">
                    <div className="timer-item">
                        <span>{timeLeft.months}</span>
                        <div>Months</div>
                    </div>

                    <div className="timer-item">
                        <span>{timeLeft.days}</span>
                        <div>Days</div>
                    </div>

                    <div className="timer-item">
                        <span>{timeLeft.hours}</span>
                        <div>Hours</div>
                    </div>

                    <div className="timer-item">
                        <span>{timeLeft.minutes}</span>
                        <div>Minutes</div>
                    </div>

                    <div className="timer-item">
                        <span>{timeLeft.seconds}</span>
                        <div>Seconds</div>
                    </div>
                </div>
                <h2 className="message">{message}</h2>
            </div>
        </div>
    );
};

const CountdownWrapper = () => {
    const [currentTargetIndex, setCurrentTargetIndex] = useState(0);

    const handleComplete = () => {
        if (currentTargetIndex + 1 < targetDates.length) {
            setCurrentTargetIndex((prevIndex) => prevIndex + 1);
        } else {
            alert("See You Again In Armaso 2026");
        }
    };

    return (
        <div>
            <h1>Countdown</h1>
            {currentTargetIndex < targetDates.length ? (
                <Countdown 
                    targetDate={targetDates[currentTargetIndex]} 
                    onComplete={handleComplete} 
                    message={messages[currentTargetIndex]}
                />
            ) : (
                <div className="complete-message">
                    Thank You For Participating In Armaso 2025
                </div>
            )}
        </div>
    );
};

export default CountdownWrapper;
