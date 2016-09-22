import React, { PropTypes } from 'react';
import { players } from '/players';
import classnames from 'classnames/bind';

import styles from './player-styles.scss';
const classes = classnames.bind(styles);

const Player = props => {
  const player = players.find(player => player.id === props.playerId);
  return (
    <div className={classes(['player'])}>
      <div className={classes(['text'])}>
        Name:
      </div>
      <div className={classes(['highlight'])}>
        { player.name }
      </div>
      <div className={classes(['text'])}>
        Position:
      </div>
      <div className={classes(['highlight'])}>
        { player.position }
      </div>
      <div className={classes(['text'])}>
        Number:
      </div>
      <div className={classes(['highlight'])}>
        { player.number }
      </div>
    </div>
  )
}

Player.propTypes = {
  playerId: PropTypes.number,
}

export default Player;
