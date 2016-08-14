import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

// Styles for highlighted code blocks.
import 'css/zenburn.css'

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
        <div>
        Attuned to the unpredictable demands of the construction industry,
        we are committed to keep you on track with your project. We are
        devoted to making your Anchor bolt purchasing experience with us an
        easy one. We focus on delivering our promise.
        </div>
        <div style={{marginTop: 10}}>
          <ul>
            <li>Buy local. Why pay for freight, long lead times, brokerage, tax,
            and deal with exchange? We can react to any changes or rushes more
            effectively. In an ever changing and dynamic construction industry
            it is a necessity to have this flexibility at your fingertips.</li>
            <li>Why are our products the best? Economical = Value, Quick
            Delivery = on schedule, Established = Reliable</li>
            <li>We can help you find standard and hard to find bolts. No harm
            in asking us for a quote. Contact us now.</li>
            <li>100% Canadian and family owned</li>
          </ul>
        </div>
        </div>
      </DocumentTitle>
    )
  }
}
