import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PhotosIndex from '../../containers/photos/PhotosIndex';
import PhotosShow from '../../containers/photos/PhotosShow';
import AlbumsShow from '../../containers/albums/AlbumsShow';
import NoMatch from '../utility/NoMatch';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={PhotosIndex} />
      <Route path="/photos/:id" component={PhotosShow} />
      <Route path="/albums/:id" component={AlbumsShow} />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default Routes;
