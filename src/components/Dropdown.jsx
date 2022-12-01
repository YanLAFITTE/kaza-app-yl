import classes from './Dropdown.module.css';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { useState } from 'react';

const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={classes.dropdown}>
            <button className={classes.btn} onClick={handleOpen}>
                {props.title}
                {!isOpen && <IoChevronDown className={classes.icon} />}
                {isOpen && <IoChevronUp className={classes.icon} />}
            </button>
            {isOpen && props.text && <p className={classes.p}>{props.text}</p>}
            {isOpen && props.equipements && (
                <ul className={classes.p}>
                    {props.equipements.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
