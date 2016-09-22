import React, { PropTypes } from 'react';
import { players } from '/players';
import './player-styles.scss';

const Player = props => {
  const player = players.find(player => player.id === props.playerId);
  return (
    <div className="player">
      <div className="text">
        Name:
      </div>
      <div className="highlight">
        { player.name }
      </div>
      <div className="text">
        Position:
      </div>
      <div className="highlight">
        { player.position }
      </div>
      <div className="text">
        Number:
      </div>
      <div className="highlight">
        { player.number }
      </div>
    </div>
  )
}

Player.propTypes = {
  playerId: PropTypes.number,
}

export default Player;
