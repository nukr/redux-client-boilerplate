import React, { Component } from 'react'
import DevTools from './DevTools'
import { Link } from 'react-router'

// material-ui
import { AppBar, IconMenu, MenuItem, IconButton } from 'material-ui'
import MenuIcon from 'material-ui/lib/svg-icons/navigation/menu'
import Colors from 'material-ui/lib/styles/colors'

const createIconMenu = () => (
  <IconMenu
    iconButtonElement={<IconButton><MenuIcon color={Colors.white} /></IconButton>}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
  >
    <MenuItem primaryText='Todo' />
    <MenuItem primaryText='Courier' />
    <Link to='/courier' />
  </IconMenu>
)

export default class Root extends Component {
  render () {
    return (
      <div>
        <AppBar
          title='Attictv Mailer'
          iconElementLeft={createIconMenu()}
        />
        {this.props.children}
        <DevTools />
      </div>
    )
  }
}

Root.propTypes = {
  store: React.PropTypes.any
}
