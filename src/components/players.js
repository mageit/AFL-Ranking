import React from 'react';
import { connect } from 'react-redux';
import Player from './player';
import Header from './header';

/**
 * Players component
 *
 * @param players
 * @returns {boolean}
 * @constructor
 */
function Players({ players }) {
    return (
        <div className="match-table">
            <Header />

            <div className="table-body">
            {players.map((player, index) => (
                <Player key={index}
                        {...player} />
            ))}
            </div>
        </div>
    );
}

export default connect(
    state => ({ players: state.players })
)(Players)
