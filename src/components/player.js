import React, {PropTypes} from 'react';

/**
 *  Player Component - it renders player details in row base
 * @param position
 * @param team
 * @param player
 * @param detailedRatings
 * @constructor
 */
const Player = ({position, team, player, detailedRatings}) => (
    <div className="table-row">
        <div className="row-item"><span className="ranking-background">{detailedRatings[0].ranking}</span></div>
        <div className="row-item blue-font">{player.playerName.givenName + " " + player.playerName.surname}</div>
        <div className="row-item blue-font">{team.teamName}</div>
        <div className="row-item">{position}</div>
    </div>
);

/**
 * Attributes for player component
 *
 * @type {{position: *, team: *, player: *, detailedRatings: *}}
 */
Player.propTypes = {
    position: PropTypes.string.isRequired,
    team: PropTypes.object.isRequired,
    player: PropTypes.object.isRequired,
    detailedRatings: PropTypes.array.isRequired
};

export default Player;
