import React from 'react';
import {connect} from 'react-redux';
import {getLastfmProfileThunk, setLastfmProfileThunk} from './store/getlastfm'


export class ArtistInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
      profile: {}
    }
    this.toggleDiv = this.toggleDiv.bind(this);
  }

  toggleDiv(event) {
    this.props.setLastfmProfile(this.props.id);
    this.setState({...this.state, clicked: !this.state.clicked})
    event.preventDefault()
  }
  componentDidMount() {
    this.props.getLastfmProfile(this.props.id);
    this.setState(this.setState({clicked: !this.state.clicked, profile: this.props.lastfmProfiles.current})
    )
  }

render() {
   console.log('this is the state profile', this.state.profile);
  return (
    <div>
      <button name={this.props.el} onClick={this.toggleDiv}>
        Click for more
      </button>
      {this.state.clicked
        ? <div key={this.props.el}>
          {/* <p>{this.props.profile.data.artist.name}</p>
          <p>{this.state.profile.data.artist.url}</p> */}
        </div>
      : <div>not clicked</div>}
    </div>
 )}
}

const mapState = state => ({
  lastfmProfiles: state.lastfmProfiles
});

const mapDispatchToProps = dispatch => ({
  getLastfmProfile: (artist) => {
    dispatch(getLastfmProfileThunk(artist))
  },
  setLastfmProfile: (artist) => {
    dispatch(setLastfmProfileThunk(artist))
  }
});

export default connect(mapState, mapDispatchToProps)(ArtistInfo)

