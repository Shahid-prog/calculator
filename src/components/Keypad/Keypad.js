import React from 'react';
import styles from './Keypad.module.css';


const Keypad = (props) => {
    return(
        <div>
            <div className={styles.row}>
                <button onClick={props.handleClick} className={`${styles.key} ${styles.operand}`}>C</button>
                <button onClick={props.handleClick} className={`${styles.key} ${styles.operand}`}>(</button>
                <button onClick={props.handleClick} className={`${styles.key} ${styles.operand}`}>)</button>
                <button onClick={props.handleClick} className={`${styles.key} ${styles.operator}`}>/</button>
            </div>
            <div className={styles.row}>
                <button onClick={props.handleClick} className={`${styles.key} ${styles.operand}`}>7</button>
                <button onClick={props.handleClick} className={`${styles.key} ${styles.operand}`}>8</button>
                <button onClick={props.handleClick} className={`${styles.key} ${styles.operand}`}>9</button>
                <button onClick={props.handleClick} className={`${styles.key} ${styles.operator}`}>*</button>
            </div>
            <div className={styles.row}>
                <button onClick={props.handleClick} className={`${styles.key} ${styles.operand}`}>4</button>
                <button onClick={props.handleClick} className={`${styles.key} ${styles.operand}`}>5</button>
                <button onClick={props.handleClick} className={`${styles.key} ${styles.operand}`}>6</button>
                <button onClick={props.handleClick} className={`${styles.key} ${styles.operator}`}>-</button>
            </div>
            <div className={styles.row}>
                <button onClick={props.handleClick} className={`${styles.key} ${styles.operand}`}>1</button>
                <button onClick={props.handleClick} className={`${styles.key} ${styles.operand}`}>2</button>
                <button onClick={props.handleClick} className={`${styles.key} ${styles.operand}`}>3</button>
                <button onClick={props.handleClick} className={`${styles.key} ${styles.operator}`}>+</button>
            </div>
            <div className={styles.row}>
                <button onClick={props.handleClick} className={`${styles.key} ${styles.operand}`}>0</button>
                <button onClick={props.handleClick} className={`${styles.key} ${styles.operand}`}>.</button>
                <button onClick={props.handleClick} className={`${styles.key} ${styles.operand}`}>del</button>
                <button onClick={props.handleClick} className={`${styles.key} ${styles.equals}`}>=</button>
            </div>
        </div>
    )
}

export default Keypad;