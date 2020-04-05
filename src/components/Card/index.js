import React from 'react';

import styles from './card.module.css';

const Card = props => {
    const { title } = props;

    return (
        <div className={styles.container}>{title}</div>
    )
}

export default Card;