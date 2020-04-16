import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';

const useStyles = makeStyles({
  root: {
    Width: 300,
    borderRadius: 5,
    zIndex: 1,
    margin: "auto"
  },
  stepper: {
    paddingTop: 10,
    margin: "auto",
  },
  dotActive: {
    background: "#F5C518"
  },
  dot: {
    width: 10,
    height: 10
  }
});

export default function MiniStepper(props) {
  const classes = useStyles();

  return (
    <div className={classes.stepper}>
      <MobileStepper
        variant="dots"
        steps={props.steps}
        position="static"
        activeStep={props.pointer}
        classes={{
          root: classes.root,
          dotActive: classes.dotActive,
          dots: classes.dots,
          dot: classes.dot
        }}
      />
    </div>
  );
}