import React, { Component } from 'react';
import classes from './MovieBackdrop.module.css';
import { connect } from 'react-redux';

class MovieBackdrop extends Component {
    state = {
        pointer: 0
    }

    pointerHandler = () => {
        if (this.state.pointer <= 0) {
            this.setState({ pointer: this.props.trending.results - 1 })
        } else if (this.state.pointer >= this.props.trending.results - 1) {
            this.setState({ pointer: 0 })
        }
    }

    render() {
        console.log(this.props.trending.results)
        return (
            <div className={classes.MovieBackdrop}>
                <div
                    style={{
                        backgroundImage: `url("https://image.tmdb.org/t/p/original${this.props.trending.results[this.state.pointer].backdrop_path}")`
                    }}
                    className={classes.MovieBackdropImage}
                >
                </div>
                <div className={classes.Filter}></div>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        trending: state.trending.trending
    }
}

export default connect(mapStateToProps)(MovieBackdrop);