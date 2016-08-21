import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'

import { rhythm } from 'utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <Headroom
          wrapperStyle={{
            marginBottom: rhythm(1),
          }}
          style={{
            background: 'lightgray',
          }}
        >
          <Container
            style={{
              maxWidth: 960,
              paddingTop: 0,
              padding: `${rhythm(1)} ${rhythm(3/4)}`,
            }}
          >
            <Link
              to={prefixLink('/')}
              style={{
                color: 'black',
                textDecoration: 'none',
                marginRight: rhythm(1)
              }}
            >
              RT Metal Products
            </Link>
            <Link
              to={prefixLink('/about-us/')}
              style={{
                color: 'black',
                textDecoration: 'none',
                marginRight: rhythm(1/2)
              }}
            >
              About Us
            </Link>
            <Link
              to={prefixLink('/what-we-do/')}
              style={{
                color: 'black',
                textDecoration: 'none',
                marginRight: rhythm(1/2)
              }}
            >
              What We Do
            </Link>
            <Link
              to={prefixLink('/contact-us/')}
              style={{
                color: 'black',
                textDecoration: 'none',
                marginRight: rhythm(1/2)
              }}
            >
              Contact Us
            </Link>
            <Link
              to={prefixLink('/careers/')}
              style={{
                color: 'black',
                textDecoration: 'none'
              }}
            >
              Careers
            </Link>
          </Container>
        </Headroom>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </Container>
      </div>
    )
  },
})
