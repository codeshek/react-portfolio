import React, { Component } from 'react';

const Joke = ({ joke: { setup, punchline } }) => (
    <p style={{ margin: 20 }} >{setup}<em>{punchline}</em></p>
)

class Jokes extends Component {

    state = { joke: {}, jokes: [] };

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(json => {
                console.log('json', json);
                this.setState({ joke: json })
            });
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
            .then(response => response.json())
            .then(json => {
                console.log('json', json);
                this.setState({ jokes: json })
            });
    }

    render() {
        return (
            <div>
                <h2>Highlighted Joke</h2>
                <Joke joke={this.state.joke} />
                <hr />
                <h3>Want 10 new jokes?</h3>
                <button onClick={this.fetchJokes} >Click Me!</button>
                {this.state.jokes.map(joke => (<Joke key={joke.id} joke={joke} />))}
            </div>);
    }
}

export default Jokes;