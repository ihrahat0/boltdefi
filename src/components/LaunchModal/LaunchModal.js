import React, { useEffect, useState } from 'react';

const LaunchModal = ({ isOpen, onClose }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShow(true);
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => setShow(false), 300);
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!show && !isOpen) return null;

    return (
        <div className={`launch_modal_backdrop ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className="launch_modal_content" onClick={e => e.stopPropagation()}>
                <button className="launch_modal_close" onClick={onClose}>
                    <i className="fal fa-times"></i>
                </button>

                <div className="launch_modal_body text-center">
                    <div className="launch_icon_wrapper mb-4">
                        <span className="launch_icon">🚀</span>
                        <div className="launch_pulse"></div>
                    </div>

                    <h2 className="launch_title text-uppercase mb-3">
                        Preparing for <span className="text_gradient">Liftoff</span>
                    </h2>

                    <p className="launch_message mb-4">
                        $BOLT token will be launched soon.<br />
                        Trading will be live shortly.
                    </p>

                    <div className="launch_status_box">
                        <div className="status_indicator">
                            <span className="blink_dot"></span>
                            <span>System Status: <strong className="text-white">Armed & Ready</strong></span>
                        </div>
                    </div>

                    <button className="pepecoin_btn mt-4" onClick={onClose}>
                        <span className="btn_label">Got it!</span>
                        <span className="btn_bg">
                            <svg viewBox="0 0 180 62" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.08526 12.4119C-0.482482 6.10381 4.29004 0 10.79 0H169.211C175.711 0 180.484 6.10384 178.916 12.4119L175.495 26.1761C174.708 29.3439 174.708 32.6561 175.495 35.8239L178.916 49.5881C180.484 55.8962 175.711 62 169.211 62H10.79C4.29004 62 -0.48248 55.8962 1.08526 49.5881L4.50607 35.8238C5.29333 32.6561 5.29333 29.3439 4.50607 26.1762L1.08526 12.4119Z" fill="#FBE354" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LaunchModal;
