import React from 'react';
import { connect } from 'react-redux';
import {getLastfmProfileThunk} from './store/lastfm'

export class ArtistInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: `${this.props.key}`
    }
  }
  componentDidMount() {
    this.props.getLastfmProfile(this.props.id);
  }

  render() {
    const {key, id} = this.props;
    console.log('this is key', key, 'this is id', id)
    const arr = this.props.lastfmProfiles;
    console.log(arr);
    let i=0;
    for(let i=0; i<arr.length; i++) {
      if(arr[i][key]=== key) {
        i=i;
        break;
      }
    }
    let obj = arr[i];
    return (
      <div>
        <p>{arr.name}</p>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getLastfmProfile: (artist) => {
    dispatch(getLastfmProfileThunk(artist))
  }
})

const mapStateToProps = state => ({
  lastfmProfiles: state.lastfmProfiles
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistInfo);
