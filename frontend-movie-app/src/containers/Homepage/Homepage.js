import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieBackdrop from './MovieBackdropContainer/MovieBackdrop/MovieBackdrop';
import classes from './Homepage.module.css';
import MovieSection from './SectionContainer/MovieSection/MovieSection';
import TabletPanel from './TabletPanel/TabletPanel';
import TVSection from './SectionContainer/TVSection/TVSection';

class Homepage extends Component {
    render() {
        return (
            <div className={classes.Homepage}>
                {this.props.loadTrending ? null :
                    <MovieBackdrop />
                }
                <TabletPanel
                    movieSection={
                        <MovieSection />
                    }
                    showSection={
                        <TVSection />
                    }
                />
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        loadTrending: state.trending.loading,
    };
};

export default connect(mapStateToProps)(Homepage);