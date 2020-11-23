import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
function Nav(props) {
    return (
        <div className="w-full flex   justify-around bg-red-200">
          <Link href="/" >Blog</Link>
          <Link href="/rolunk" >Rolunk</Link>
          <Link href="/builder" >Builder</Link>
        </div>
    )
}

Nav.propTypes = {

}

export default Nav

