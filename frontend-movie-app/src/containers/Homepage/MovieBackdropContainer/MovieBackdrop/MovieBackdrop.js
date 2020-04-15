import React, { Component } from 'react';
import classes from './MovieBackdrop.module.css';
import CarouselPointers from '../CarouselPointers/CarouselPointers';
import { connect } from 'react-redux';
import MovieBackdropOverlay from '../MovieBackdropOverlay/MovieBackdropOverlay';
import MiniStepper from '../MiniStepper/MiniStepper';

class MovieBackdrop extends Component {
    state = {
        pointer: 0,
        fade: false
    }

    addPointerHandler = () => {
        if (this.state.pointer >= this.props.trending.results.length - 1) {
            this.setState({ pointer: 0 })
        } else {
            this.setState({ pointer: this.state.pointer + 1 })
        }
    }

    subPointerHandler = () => {
        if (this.state.pointer <= 0) {
            this.setState({ pointer: this.props.trending.results.length - 1 })
        } else {
            this.setState({ pointer: this.state.pointer - 1 })
        }
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.pointer >= this.props.trending.results.length - 1) {
                this.setState({ pointer: 0 })
            } else {
                this.setState({ pointer: this.state.pointer + 1 })
            }
        }, 7500)
    }

    render() {
        console.log(this.props.trending.results)
        return (
            <div className={classes.MovieBackdrop}>
                <div className={classes.ImagesContainer}>
                    <div id="fadeMovieBackdrop" className={classes.MoviePosterImage}>
                        <img src={`https://image.tmdb.org/t/p/original${this.props.trending.results[this.state.pointer].poster_path}`} alt="poster" />
                    </div>
                    <div id="fadeMovieBackdrop" className={classes.MovieBackdropImage}>
                        <img src={`https://image.tmdb.org/t/p/original${this.props.trending.results[this.state.pointer].backdrop_path}`} alt="backdrop" />
                        <div className={classes.Filter}></div>
                        <MovieBackdropOverlay
                            name={this.props.trending.results[this.state.pointer].name || this.props.trending.results[this.state.pointer].title}
                            rating={this.props.trending.results[this.state.pointer].vote_average}
                            description={this.props.trending.results[this.state.pointer].overview}
                        />
                    </div>
                    <CarouselPointers rightClick={this.addPointerHandler} leftClick={this.subPointerHandler} />
                </div>
                <MiniStepper pointer={this.state.pointer} steps={this.props.trending.results.length}/>
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