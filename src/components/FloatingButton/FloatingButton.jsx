import { useState } from 'react';
import './FloatingButton.css';

const FloatingButton = ({ text, clickedText, pos, onClick }) => {

    const [isClicked, setClicked] = useState(false);

    const onButtonClicked = () => {
        setClicked(!isClicked);
        onClick();
    }

    const currentText = (isClicked) ? clickedText : text;

    return <div className="floating-button" style={pos} onClick={onButtonClicked}>
        <p className="text">{currentText}</p>
    </div>;
};

export default FloatingButton;