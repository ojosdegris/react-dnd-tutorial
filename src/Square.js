import React, { Component, PropTypes } from 'react';

export default class Square extends Component {
  static propTypes = {
    black: PropTypes.bool
  };

  render() {
    const { black } = this.props;
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';

    return (
      <div style={{
        backgroundColor: fill,
        color: stroke,
        width: '100%',
        height: '100%',
        fontSize:'72px'
      }}>
        {this.props.children}
      </div>
    );
  }
}

// export default class Square extends Component {
//   static propTypes = {
//     black: PropTypes.bool
//   };

//   render() {
//     const { black } = this.props;
//     const fill = black ? 'black' : 'white';
//     const color = black ? 'white' : 'black';

//     const styles = { 
//         backgroundColor: fill, 
//         color: color, 
//         width:'100%', 
//         height: '100%',
//         textAlign:'center',
//         padding:'0', 
//         fontSize:'72px',
//         border:'1px solid black'
//     }

//     return <div style={styles}>
//       {this.props.children}
//     </div>;
//   }
// }