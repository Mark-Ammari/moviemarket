import React from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  Drawer,
  List,
  IconButton,
  AppBar,
  ListItem,
  ListItemText
} from '@material-ui/core/';

import { MenuRounded, CloseRounded, MovieRounded, TvRounded } from '@material-ui/icons';
import Logo from '../Logo/Logo';
import NavDropdown from '../NavDropdown/NavDropdown';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
    maxWidth: 360,
    color: "#F5C518",
    backgroundColor: "#292929",
  },
  fullList: {
    width: 'auto',
  },
  root: {
    color: "#FFFFFF",
    textTransform: "unset",
    fontFamily: "Montserrat, sans-serif",
    marginLeft: "10px",
    '&:hover': {
      backgroundColor: "#2E2E2E",
    },
  },
  drawer: {
    background: "#121212"
  },
  appbar: {
    background: "transparent",
    height: 60,
    width: 250,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

export default function NavDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });
  const history = useHistory()
  const tvGenreList = useSelector(state => state.tvGenreList.genreList)
  const loadTVGenreList = useSelector(state => state.tvGenreList.loading)
  const movieGenreList = useSelector(state => state.movieGenreList.genreList)
  const loadMovieGenreList = useSelector(state => state.movieGenreList.loading)

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const goToGenrePage = (type, name, id) => {
    history.push({
      pathname: `/${type}/genre/${name}/${id}/1`,
    })
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <AppBar position="static" className={classes.appbar}>
        <Logo />
        <IconButton onClick={toggleDrawer('left', false)} style={{ marginRight: "10px" }} className={classes.root}>
          <CloseRounded />
        </IconButton>
      </AppBar>
      <List>
        <NavDropdown
          title="Movies"
          icon={<MovieRounded />}
        >
          {loadMovieGenreList ? null :
            movieGenreList.map((genre, key) => {
              return <ListItem key={key} button onClick={goToGenrePage.bind(this, "movies", genre.name.split(" ").join("-").toLowerCase(), genre.id)}>
                <ListItemText primary={genre.name} />
              </ListItem>
            })
          }
        </NavDropdown>
        <NavDropdown
          title="Shows"
          icon={<TvRounded />}
        >
          {loadTVGenreList ? null :
            tvGenreList.map((genre, key) => {
              return <ListItem key={key} button onClick={goToGenrePage.bind(this, "shows", genre.name.split(" ").join("-").toLowerCase(), genre.id)}>
                <ListItemText primary={genre.name} />
              </ListItem>
            })
          }
        </NavDropdown>
      </List>

    </div>
  );

  return (
    <div>
      <IconButton className={classes.root} onClick={toggleDrawer('left', true)}><MenuRounded /></IconButton>
      <Drawer classes={{
        paper: classes.drawer
      }} anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
        {list('left')}
      </Drawer>
    </div>
  );
}