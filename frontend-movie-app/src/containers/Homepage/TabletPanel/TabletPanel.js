import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function TabPanel(props) {
    const { children, value, index, style, ...other } = props;
    return (
        <div
            component="div"
            role="tabpanel"
            style={{ background: "black" }}
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <div style={{ padding: "16px 0" }} p={2}>{children}</div>}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        maxWidth: 1366,
        margin: "10px  auto",
        background: "#000",
    },
    appbar: {
        background: "#121212",
        color: "#FFF",
        flexGrow: 1,
    },
    indicator: {
        background: "#F5C518",
        color: "#F5C518"
    },
    defaultColor: {
        color: "#FFF"
    },
    activeColor: {
        color: "#F5C518"
    },
    transparent: {
        background: "transparent"
    }
}));

export default function TabletPanel(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    classes={{
                        indicator: classes.indicator,
                    }}
                    aria-label="full width tabs example"
                >
                    <Tab
                        classes={{
                            textColorInherit: classes.defaultColor,
                            selected: classes.activeColor
                        }}
                        label="Movies" {...a11yProps(0)} />
                    <Tab
                        classes={{
                            textColorInherit: classes.defaultColor,
                            selected: classes.activeColor
                        }}
                        label="TV Shows" {...a11yProps(1)} />
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>
                {props.movieSection}
            </TabPanel>

            <TabPanel value={value} index={1}>
                {props.showSection}
           </TabPanel>
        </div>
    );
};