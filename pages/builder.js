import React from 'react'
import { builder, BuilderComponent } from '@builder.io/react'
import Nav from "../components/Nav"
builder.init("677ef909c6da4d8f9613f730e481b37a")

export default class About extends React.Component {
  static async getInitialProps({ res, req, asPath }) {
    // If there is a Builder page for this URL, this will be an object, otherwise it'll be null
    const page = await builder.get('page', { req, res, url: asPath  }).promise()
    return { builderPage: page }
  }

  render() {
    return (
      <div>
        {this.props.builderPage ? (
         <>   <Nav></Nav>
          <BuilderComponent model="page" content={this.props.builderPage} />
       </> ) : (
        <></>
        )}
      </div>
    )
  }
}