import React, { useState, useEffect, useCallback } from "react";
import { targetDate, message, selesai } from '../setting/cd.setting'; 
import "../css/countdown.css";

const Countdown = ({ targetDate, onComplete, message }) => {
    const [completed, setCompleted] = useState(false);
    const [timeLeft, setTimeLeft] = useState({});
    const [displayMessage, setDisplayMessage] = useState(message); 
    const calculateTimeLeft = useCallback(() => {
        const now = new Date();
        const target = new Date(targetDate);
        const difference = +target - +now;

        if (difference <= 0) {
            setCompleted(true);
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

    useEffect(() => {
        const timer = setInterval(() => {
            const newTimeLeft = calculateTimeLeft();
            setTimeLeft(newTimeLeft);
            if (!completed) {
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [calculateTimeLeft, completed]);

    useEffect(() => {
        if (completed) {
            setDisplayMessage(selesai); 
        }
    }, [completed]);

    return (
        <div className="cd-body">
            <div className="countdown-container">
                {!completed ? (
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
                ) : (
                <div className="complete-message">
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
                </div>
                )}
                <h2 className="message">{displayMessage}</h2>  
            </div>
        </div>
    );
};

const CountdownWrapper = () => {
    const handleComplete = () => {

    };

    return (
        <div>
            <h1>Countdown Armaso 2025</h1>
            <Countdown 
                targetDate={targetDate} 
                onComplete={handleComplete} 
                message={message}
            />
        </div>
    );
};

export default CountdownWrapper;
