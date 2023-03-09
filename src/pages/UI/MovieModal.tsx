import React from 'react';

import classes from './MovieModal.module.css';

const MovieModal: React.FC<any> = props => {
    return (
        <div>
            <div className={classes.backdrop} />
            <div className={classes.modal}>
                <div className={classes.content}>
                    <header className={classes.header}>
                        <h2>{props.title}</h2>
                    </header>
                    <div>
                        <img src={props.moviePoster} width="300" height="400" alt="Movie image"></img>
                    </div>
                    Released in {props.year}, genre {props.genre}
                    <p>
                        {props.plot}
                    </p>
                    <footer>
                        <button type='button' onClick={props.closeModal} className={classes.button}>
                            Close
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default MovieModal;