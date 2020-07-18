import React from 'react';
import { connect } from 'react-redux';
import {getArtistsThunk} from './store/artists'


export class Artists extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eventLink: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({...this.state, eventLink: event.target.value})
  }

  handleSubmit(event) {
    this.props.getArtists(this.state.eventLink.toString())
    event.preventDefault();
  }

  render() {
    const artists = this.props.artists
    if(artists.length === 0) {
      return (
        <div classsName='artists-container'>
          <form onSubmit={this.handleSubmit}>
          <label>
          Enter Event URL Here:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
      )
    } else {
      return (
        <div classsName='artists-container'>
          <form onSubmit={this.handleSubmit}>
          <label>
          Enter Event URL Here:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <ul>Artists:
          {artists.map((el) =>
            (<li>{el}</li>)
          )}
        </ul>
        </div>
      )
    }

  }
}

const mapDispatchToProps = dispatch => ({
  getArtists: (url) => {
    dispatch(getArtistsThunk(url))
  }
})

const mapStateToProps = state => ({
  artists: state.artists
})

export default connect(mapStateToProps, mapDispatchToProps)(Artists);
