import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieBackdrop from './MovieBackdropContainer/MovieBackdrop/MovieBackdrop';
import FilmSection from './SectionContainer/FilmSection/FilmSection';
import classes from './Homepage.module.css';
import BackdropCard from '../../components/Cards/BackdropCard/BackdropCard';
import MovieSection from './SectionContainer/MovieSection/MovieSection';

class Homepage extends Component {
    render() {
        
        return (
            <div className={classes.Homepage}>
                {this.props.loadTrending ? null :
                    <MovieBackdrop />
                }
                <MovieSection />
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