import React from 'react';

export const Homepage = React.lazy(() => 
import (
    '../containers/Homepage/Homepage'
))

export const Moviepage = React.lazy(() => 
import (
    '../containers/Moviepage/Moviepage'
))

export const AboutMoviepage = React.lazy(() => 
import (
    '../containers/AboutMoviePage/AboutMoviepage'
))

export const Errorpage = React.lazy(() => 
import (
    '../containers/Errorpage/Errorpage'
))

export const Searchpage = React.lazy(() => 
    import (
    '../containers/Searchpage/Searchpage'
))

export const Authenticate = React.lazy(() => 
    import (
    '../containers/Authenticate/Authenticate'
));

export const Favoritespage = React.lazy(() => 
import (
    '../containers/Favoritespage/Favoritespage'
))