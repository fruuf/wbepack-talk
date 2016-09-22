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
            <div className="name">{ player.name }</div>
            { props.selectedPlayerId === player.id && (
              <Player playerId={player.id} />
            ) || null}
          </div>
        ))}
      </div>
      <div className="sidebar">
        I get used for something else now
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
