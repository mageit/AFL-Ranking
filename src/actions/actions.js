const fetchRatings = function() {
    return fetch('./ratings.json');
};

/**
 * Send the action to players reducer to indicate the state needs to be updated.
 * @param players
 * @returns {{type: string, players: *}}
 */
export function initialAllRatings(players){
    return {
        type: "SET_INITIAL_RATINGS",
        players: players
    }
};

/**
 * Load json object from node server and dispatch an action to reducer
 * when finish.
 *
 * @param n
 * @returns {Function}
 */
export function loadPlayersFromJson(n){
    return function(dispatch){
        return fetchRatings()
            .then(response => response.json())
            .then(players => {
                dispatch(initialAllRatings(players.playerRatings));
            });
    }
};