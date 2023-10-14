import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-subtitle">{props.id}</h2>
                <h2 className="card-title">{props.title}</h2>
                <div className="card-text">
                    <span className="material-symbols-outlined">
                        exclamation
                    </span>
                </div>

                <div className="card-text">
                    <span className="material-symbols-outlined">
                        circle
                    </span>
                    Feature Request
                </div>
            </div>
        </div>
    );
}

export default Card