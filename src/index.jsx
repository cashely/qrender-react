import React, { createRef } from 'react'
import propTypes from 'prop-types';
import QRenderJs from 'qrender-js'
class QRender extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      wrapper: createRef()
    }
  }

  componentDidMount() {
    new QRenderJs({
      el: this.state.wrapper.current,
      ...this.props
    })
  }

  render() {
    return (
      <div ref={this.state.wrapper}>qrender</div>
    )
  }
}

QRender.defaultProps = {
  padding: 10,
  width: 256,
  height: 256,
  imgWidth: 60,
  imgHeight: 60,
  typeNumber: -1,
  correctLevel: 2,
  background: "#ffffff",
  foreground: "#000000",
}

QRender.propTypes = {
  padding: propTypes.number,
  width: propTypes.number,
  imgWidth: propTypes.number,
  imgHeight: propTypes.number,
  correctLevel: propTypes.number,
  background: propTypes.string,
  foreground: propTypes.string,
  text: propTypes.string.isRequired,
  src: propTypes.string
}

export default QRender
