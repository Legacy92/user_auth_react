import React, { Component } from 'react';
import { getMovieQuote } from '../actions';
import { connect } from 'react-redux';

class MovieQuote extends Component{

    componentDidMount(){
        this.props.getMovieQuote();
    }

    render(){
        return(
            <div>
                <h1 className="center">Movie Quote</h1>
                <h4 className="center">{this.props.quote}</h4>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        quote: state.movie.quote
    }
}

export default connect(mapStateToProps, { getMovieQuote })(MovieQuote);