import React from 'react'
import {connect} from 'react-redux'

function IsLoading(props) {
  return <h4>loading...</h4>
}

function Loaded(props) {
  const profile = props.props.state.profile;
  console.log('this is props in loaded', props)
  const {name, url, bio, summary} = profile;
  const {content} = bio;
  return (
    <div>
    <h3>{name}</h3>
    <h5>{url}</h5>
    <h6>{content}</h6>
  <h6>{summary}</h6>
  </div>
  )
}

function Handler(props) {
  const isLoading = props.isLoading;
  if(isLoading) {
    return <IsLoading />
  }
  return <Loaded props={props}/>
}

class MoreInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      profile: {}
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.lastfmProfiles !== prevProps.lastfmProfiles)
    this.setState({isLoading: !this.state.isLoading, profile:this.props.lastfmProfiles.data.artist})
  }

  render() {
    return (
      <div>
      <button onClick={()=> {this.props.history.goBack()}}>Go Back</button>
      <Handler isLoading={this.state.isLoading} state={this.state}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  lastfmProfiles: state.lastfmProfiles
})

export default connect(mapStateToProps)(MoreInfo)

