import React from 'react';
import { connect } from 'react-redux';
import {getArtistsThunk} from './store/artists'
import ArtistInfo from './ArtistInfo'
import {getLastfmProfileThunk} from './store/getlastfm'



class Artists extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eventLink: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({...this.state, eventLink: event.target.value})
  };

  handleSubmit(event) {
    this.props.getArtists(this.state.eventLink.toString());
    event.preventDefault();
  };
  handleClick(event) {
    this.getLastfmProfile(event.target.name);
  }

  render() {
    const artist = this.props.artists;
      return (
        <div>
          <div classsName='artists-container'>
            <form onSubmit={this.handleSubmit}>
              <label>Enter Event URL Here:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
            {(artist.length === 0) ? (<div></div>) :
            (<div>
              <h3>Artists:</h3>
                {artist.map(el => (
                  <div>
                    <h4>{el}</h4>
                    <button name={el} onClick={this.handleClick}></button>
                    <ArtistInfo id={el} key={el} name={el}/>
                  </div>
                ))}
            </div>)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  artists: state.artists
});

const mapDispatchToProps = dispatch => ({
  getArtists: (url) => {
    dispatch(getArtistsThunk(url))
  },
  getLastfmProfile: (artist) => {
    dispatch(getLastfmProfileThunk(artist))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Artists);
