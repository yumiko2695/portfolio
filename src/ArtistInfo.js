import React from 'react';
import {connect} from 'react-redux';
import {getLastfmProfileThunk} from './store/getlastfm'


export class ArtistInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
    }
    this.toggleDiv = this.toggleDiv.bind(this);
  }

  toggleDiv(event) {
    this.setState({clicked: !this.state.clicked})
    this.props.getLastfmProfile(event.target.name)
    event.preventDefault()
  }

render() {
   console.log(this.props);
  return (
    <div>
      <button name={this.props.el} onClick={this.toggleDiv}>
        Click for more
      </button>
      {this.state.clicked
        ? <div key={this.props.el}>
          <p>hello</p>
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
  }
});

export default connect(mapState, mapDispatchToProps)(ArtistInfo)


      {/* <button name={this.props.id} onClick={this.handleClick}>Click for more info</button>
      {this.state.clicked ? <ArtistMoreInfo id={this.state.id}/> : <div></div>} */}
