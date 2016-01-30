import React, { Component, PropTypes } from 'react'
import { fetchTodos } from '../../actions/todos'

// material-ui
import { IconButton, TextField, List, ListItem, Checkbox, IconMenu, MenuItem } from 'material-ui'
import SVGCross from 'material-ui/lib/svg-icons/navigation/cancel'
import MenuIcon from 'material-ui/lib/svg-icons/navigation/more-vert'

const createDeleteBtn = (fn) => (
  <IconButton
    tooltip='delete'
    tooltipPosition='bottom-left'
    onClick={fn}
  >
    <SVGCross />
  </IconButton>
)

class MainSection extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      text: this.props.text || ''
    }
  }

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(fetchTodos())
  }

  handleSubmit (e) {
    if (e.which === 13) {
      const text = e.target.value.trim()
      this.props.actions.addTodo(text)
      this.setState({ text: '' })
    }
  }

  handleChange (e) {
    this.setState({ text: e.target.value })
  }

  render () {
    return (
      <div style={{width: '300px'}}>
        <TextField
          autoFocus='true'
          value={this.state.text}
          onKeyDown={this.handleSubmit.bind(this)}
          onChange={this.handleChange.bind(this)}
        />
        <List subheader='Todo'>
          {this.props.todos.map(todo => (
            <ListItem
              key={todo.id}
              leftCheckbox={<Checkbox />}
              primaryText={todo.text}
              secondaryText={<p>gggg</p>}
              rightIconButton={createDeleteBtn(this.props.actions.deleteTodo.bind(null, todo.id))}
            />
          ))}
        </List>
      </div>
    )
  }
}

MainSection.propTypes = {
  text: PropTypes.string,
  dispatch: PropTypes.func,
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
