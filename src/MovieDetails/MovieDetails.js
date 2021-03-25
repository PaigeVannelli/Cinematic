import React, { Component } from 'react'
import './MovieDetails.css'

class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            backdrop_path: '',
            averageRating: 0,
            budget: 0,
            genres: [],
            overview: '',
            posterPath: '',
            releaseDate: '',
            revenue: 0,
            runtime: 0,
            tagline: '',
            title: '',
        }
    }

    componentDidMount() {
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.id}`)
        .then(response => response.json())
        .then(data => this.setState(data.movie))
    }

    getGenres() {
        return this.state.genres.join(', ')
        //Would we need to update state with this new info?
    }

    formatAmounts(amount) {
        return amount.toLocaleString()
    }

    render() {
        return (
            <section style={{background:
            `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${this.state.backdrop_path}) no-repeat center center fixed`
            }}>
                <div className='main-info'>
                    <h1>{this.state.title}</h1>
                    <div className='movie-details'>
                        <p className='details'>{this.state.release_date}</p>
                        <p>{this.getGenres()}</p>
                    </div>
                    <div className='movie-details'>
                        <p className='details'>Budget: ${this.formatAmounts(this.state.budget)}</p>
                        <p className='details'>Revenue: ${this.state.revenue.toLocaleString()}</p>
                        <p>Runtime: {this.state.runtime}</p>
                    </div>
                </div>
                <p className='summary'>
                    {this.state.overview} 
                </p>
            </section>
        )
    }
}

export default MovieDetails;