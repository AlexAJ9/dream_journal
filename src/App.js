import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Container, Button } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { initDreams } from './reducers/dreamReducer'
import DreamList from './components/DreamList'
import Dream from './components/Dream'
import Form from './components/Form'
import './components/Home.css'

const style = {
  "padding": 10
}
const App = (props) => {

  useEffect(() => {
    props.initDreams()
  }, [])

  const dreamById = (id) => props.dreams.find(dream => dream.id === Number(id))
  return (

    <Container>
      <Router>
        <div className='flex-box'>
          <div id='flex-item'>
            <Button.Group >
              <Button><Link to='/'>Home</Link></Button>
              <Button><Link to='/create'>Add an entry</Link></Button>
            </Button.Group>
          </div>
        </div>


        <Route exact path='/' render={() => <DreamList />} />
        <Route exact path='/dreams/:id' render={({ match }) => <Dream dream={dreamById(match.params.id)} />} />
        <Route path='/create' render={() => <Form />} />
      </Router>
    </Container >
  )
}

const mapStateToProps = (state) => {
  return {
    dreams: state.dreams
  }
}
const ConnectedApp = connect(mapStateToProps, { initDreams })(App)
export default ConnectedApp;
