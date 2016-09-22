import { connectComponent, defineEvent } from '/util/rx-react';
import 'rxjs';
import AppComponent from './AppComponent';

const createState = (propsStream, actionStream, listen) => {
  const onSelectPlayerStream = defineEvent(actionStream, 'selectPlayer');

  const selectedPlayerIdStream = onSelectPlayerStream
    .startWith(0);

  listen('selectedPlayerId', selectedPlayerIdStream);
};

export default connectComponent(AppComponent, createState);
