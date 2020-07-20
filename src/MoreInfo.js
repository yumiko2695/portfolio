import React from 'react'
import {connect} from 'react-redux'

function IsLoading(props) {
  return <h4>loading...</h4>
}

function Loaded(props) {
  const profile = props.props.state.profile;
  const {name, url, bio, summary} = profile;
  const {content} = bio;
  const releases = props.props.state.releases;
  return (
    <div>
    <h3>{name}</h3>
    <h5>{url}</h5>
    <h6>{content}</h6>
  <h6>{summary}</h6>
  <h4>Releases</h4>
  {releases.map((i, index) => {
      const {title, format, label, thumb} = i;
      let releaseTitle = title;
      return (
        <div key={index}>
        <h5>{releaseTitle}</h5>
        <h5>{format}</h5>
        <h5>{label}</h5>
          <div className="thumbnail">
            <img src={thumb}/>
          </div>
        </div>
      )
})}
  </div>
  )
}

function Handler(props) {
  const isLoadingDiscogs = props.isLoadingDiscogs;
  const isLoadingLastfm = props.isLoadingLastfm
  if(!isLoadingDiscogs && !isLoadingLastfm) {
    return <Loaded props={props}/>
  }
  return <IsLoading />
}

class MoreInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoadingLastfm: true,
      isLoadingDiscogs: true,
      profile: {},
      releases: []
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.lastfmProfiles !== prevProps.lastfmProfiles) {
      this.setState({...this.state, isLoadingLastfm: !this.state.isLoadingLastfm, profile: this.props.lastfmProfiles.data.artist})
    }
    if(this.props.discogsReleases !== prevProps.discogsReleases) {
      this.setState({...this.state, isLoadingDiscogs: !this.state.isLoadingDiscogs, releases: [...this.props.discogsReleases.data.releases]})
    }
  }

  render() {
    console.log('this is state', this.state)
    return (
      <div>
      <button onClick={()=> {this.props.history.goBack()}}>Go Back</button>
      <Handler isLoadingDiscogs={this.state.isLoadingDiscogs} isLoadingLastfm={this.state.isLoadingLastfm} state={this.state}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  lastfmProfiles: state.lastfmProfiles,
  discogsReleases: state.discogsReleases
})

export default connect(mapStateToProps)(MoreInfo)

