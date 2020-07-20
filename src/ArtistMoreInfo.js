import React from 'react'
import {connect} from 'react-redux'
import {getLastfmProfileThunk} from './store/getlastfm'


 class ArtistMoreInfo extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
       profile: {}
     }
   }

   componentDidMount() {
     this.props.getLastfmProfile(this.props.id);
     this.setState({
       profile: this.props.lastfmProfiles
     })
   }



     render() {
       console.log(this.state)
       return (
         <div></div>
       )
//       if(this.props.lastfmProfiles.data.artist.name !==undefined) {
//         //console.log('this is this.props', this.props.lastfmProfiles)
//         const artist = this.props.lastfmProfiles.data;
//         const name = artist.name;
//         const url = artist.url;
//         return (
//           <div>
//             <p>
//               {name}
//             </p>
//             <p>
//               {url}
//             </p>
//           </div>
//         )
//       }
//     else {
//       return (
//         <div>
//         <p>hello</p>
//         {/* <p>{lastfmProfiles.artist.name}</p>
//         <p>{lastfmProfiles.artist.url}</p> */}
//       </div>
//     )

//     }
//     // if(this.state.profile !== {}) {
//     //    return (
//     //       <div>
//     //        <p>{this.state.profile.artist.name}</p>
//     //        <p>{this.state.profile.artist.url}</p>
//     //      </div>
//     //    )
//     // } else {
//   // return (
//   //   <div></div>

//   // )
}
}




const mapStateToProps = state => ({
  lastfmProfiles: state.lastfmProfiles
})
const mapDispatchToProps = dispatch => ({
   getLastfmProfile: (artist) => {
     dispatch(getLastfmProfileThunk(artist))
   },
 })

export default connect(mapStateToProps, mapDispatchToProps)(ArtistMoreInfo)

//export default ArtistMoreInfo
