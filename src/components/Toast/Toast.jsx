import { useState } from 'react';
import './Toast.css';

const Toast = ({ title, description, isAlert, ...props }) => {
    const [visibility, setVisibility] = useState(true);
    const [opacity, setOpacity] = useState(1);

    const style = {
        display: visibility ? 'block' : 'none',
        opacity
    }

    const headerColor = isAlert ? 'red' : '';

    const onClose = (e) => {
        e.preventDefault();
        setOpacity(0);
        setTimeout(() => {
            setVisibility(false);
        }, 600);
    };

    return <div className="alert" style={style} {...props}>
        <div className="header" style={{ backgroundColor: headerColor }}>
            <div className="title">
                <p>{title}</p>
            </div>
            <div className="options">
                <button onClick={onClose}>&times;</button>
            </div>
        </div>
        <div className="description">
            {description}
        </div>
    </div>;
};

export default Toast;