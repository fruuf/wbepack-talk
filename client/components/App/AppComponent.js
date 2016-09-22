import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { players } from '/players';
import Player from 'Player';

import './app-styles.scss';

const AppComponent = props => (
  <div className="app">
    <div className="content">
      <div className="squad">
        { players.map(player => (
          <div
            key={player.id}
            className={classnames([
              'squad-player',
              player.id === props.selectedPlayerId && 'highlight',
            ])}
            onClick={() => props.dispatch('selectPlayer', player.id)}
          >
            { player.name }
          </div>
        ))}
      </div>
      <div className="sidebar">
        { props.selectedPlayerId && (
          <Player playerId={props.selectedPlayerId} />
        ) || null}
      </div>
    </div>
    <div className="footer">
      I do footer stuff
    </div>
  </div>
)

AppComponent.propTypes = {
  player: PropTypes.object,
  selectedPlayerId: PropTypes.number,
}

export default AppComponent;
