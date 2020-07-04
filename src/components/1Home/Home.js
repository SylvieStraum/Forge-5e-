import React, { Component } from 'react'
import { connect } from 'react-redux';
//styling
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react'
import HomeMapItem from '../HomeMapItem/HomeMapItem';

class Home extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'GET_CHARACTERS' })
    }
    sendToSheet=(char)=>{
        this.props.dispatch({type:'SET_CHAR_SHEET', payload: char})
        this.props.history.push('./CharacterSheet')
    }
    changePage=()=>{
        this.props.dispatch({type:'NEW_CHARACTER'})
        this.props.history.push('/Races')
    }
    render() {
        return <div className='Home'>
            <div className="characters">
                {this.props.characters.map(char => (<HomeMapItem key={char.id} char={char} sendToSheet={this.sendToSheet} />))}
            </div>
            <div className="characterCreate">
            <Button 
              fluid
              attached='bottom'
              style={{position:'relative', bottom:10, background:'#641212', color:'white'}}
              onClick={()=>this.changePage()}>Create Character!</Button>
           </div>
           </div>
           
    }

}
const mapStateToProps = state => ({
    characters: state.characterReducer
});
export default connect(mapStateToProps)(Home);