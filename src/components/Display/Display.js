import React from 'react';
import styles from './Display.module.css';

const Display = (props) => {
    return(
        <div className={styles.display}>
            <div className= {styles.expression}>{props.expression}</div>
            <div className = {styles.result}>{props.result}</div>
        </div>
    )
}

export default Display;