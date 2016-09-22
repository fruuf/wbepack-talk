import React, { PropTypes } from 'react';
import classnames from 'classnames/bind';
import { players } from '/players';
import Player from 'Player';

import styles from './app-styles.scss';
const classes = classnames.bind(styles);

// className="(.+)"
// className={classes(['$1'])}
const AppComponent = props => (
  <div className="app">
    <div className={classes(['content'])}>
      <div className={classes(['squad'])}>
        { players.map(player => (
          <div
            key={player.id}
            className={classes([
              'squad-player',
              player.id === props.selectedPlayerId && 'highlight',
            ])}
            onClick={() => props.dispatch('selectPlayer', player.id)}
          >
            <div className={classes(['name'])}>{ player.name }</div>
            { props.selectedPlayerId === player.id && (
              <Player playerId={player.id} />
            ) || null}
          </div>
        ))}
      </div>
      <div className={classes(['sidebar'])}>
        <pre>
          { JSON.stringify(styles, null, 2)}
        </pre>
      </div>
    </div>
    <div className={classes(['footer'])}>
      I do footer stuff
    </div>
  </div>
)

AppComponent.propTypes = {
  player: PropTypes.object,
  selectedPlayerId: PropTypes.number,
}

export default AppComponent;
