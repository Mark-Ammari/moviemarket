import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     color: "#F5C518",
//     backgroundColor: "#292929",
//   },
//   nested: {
//     paddingLeft: theme.spacing(4),
//   },
// }));

export default function NavDropdown(props) {
  // const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = (e) => {
    e.stopPropagation()
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          {props.icon}
        </ListItemIcon>
        <ListItemText primary={props.title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.children}
        </List>
      </Collapse>
    </>
  );
}