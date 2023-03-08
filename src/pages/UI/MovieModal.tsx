import React from 'react';

import classes from './MovieModal.module.css';

const MovieModal: React.FC<any> = props => {
    return (
        <div>
            <div className={classes.backdrop} />
            <div className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <div>
                        <img src={props.moviePoster} width="300" height="400" alt="Movie image"></img>
                    </div>
                    <div>
                        {props.year}, {props.genre_id}
                    </div>
                    <div>
                        <p>
                            {props.plot}
                        </p>
                    </div>
                </div>
                <footer>
                    <div onClick={props.closeModal}>
                        Close
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default MovieModal;