import React from 'react';
import { 
    makeStyles,
    Card,
    CardHeader,
    CardMedia,
    // CardContent,
    CardActions,
    // Collapse,
    // Avatar,
    IconButton,
    // Typography,
} from '@material-ui/core';
// import clsx from 'clsx';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OpenInNewRounded from '@material-ui/icons/OpenInNewRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    background: "#151515",
  },
  media: {
    height: 0,
    width: "100%",
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  header: {
    color: "#fff",
    fontSize: "12pt"
  },
  subHeader: {
    color: "#5c5c5c",
    fontSize: "10pt"
  },
  favoriteColor: {
    color: "#f50057"
  },
  iconColor: {
    color: "#F5C519"
  }
}));

export default function FavoritedItem({title, subheader, src, onRemove, to}) {
  const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

  return (
    <Card className={classes.root}>
      <CardHeader
        classes={{
            title: classes.header,
            subheader: classes.subHeader
        }}
        title={title}
        subheader={subheader}
      />
      <CardMedia
        className={classes.media}
        image={src}
        title={title}
      />
      <CardActions disableSpacing>
        <IconButton onClick={onRemove} aria-label="add to favorites">
          <FavoriteIcon className={classes.favoriteColor}/>
        </IconButton>
        <IconButton onClick={to} aria-label="goto content details">
          <OpenInNewRounded className={classes.iconColor}/>
        </IconButton>
        {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon className={classes.iconColor}/>
        </IconButton> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
}