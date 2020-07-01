import React, { Component } from 'react'
import { connect } from 'react-redux'
import ConditionalItemInfo from '../ConditionalItemInfo/ConditionalItemInfo'

class Equipment extends Component {
    state = {
            one: '',
            two: '',
            three: '',
            four: ''
    }
    handleChange = (event, type) => {
        console.log(event.target.value)
        this.setState({
            ...this.state,
            [type]: event.target.value
        })
    }
    submitChoices = () => {
        this.props.dispatch({type:'NEW_CHARACTER_EQUIPMENT', payload:this.state.one +'. '+ this.state.two +'. '+ this.state.three +'. '+ this.state.four })
        this.props.history.push('./Stats')
    }
    render() {
        return <div className='Equipment'>
            <h1>Choose starting Equipment</h1>
            <ConditionalItemInfo />
            <div className="choices">
                <h2>First Choice:</h2>
                <select value={this.state.one}  onChange={(event) => this.handleChange(event, 'one')}>
                        <option value=''>Choose one</option>
                        <option value={this.props.choices.choice_1a}>{this.props.choices.choice_1a}</option>
                        <option value={this.props.choices.choice_1b}>{this.props.choices.choice_1b}</option>
                    </select>
                <h2>Second Choice:</h2>
                <select value={this.state.two} onChange={(event) => this.handleChange(event, 'two')}>
                        <option value=''>Choose one</option>
                        <option value={this.props.choices.choice_2a}>{this.props.choices.choice_2a}</option>
                        <option value={this.props.choices.choice_2b}>{this.props.choices.choice_2b}</option>
                    </select>
                <h2>Third Choice:</h2>
                <select value={this.state.three} onChange={(event) => this.handleChange(event, 'three')}>
                        <option value=''>Choose one</option>
                        <option value={this.props.choices.choice_3a}>{this.props.choices.choice_3a}</option>
                        <option value={this.props.choices.choice_3b}>{this.props.choices.choice_3b}</option>
                    </select>
                <h2>Fourth Choice:</h2>
                <select value={this.state.four} onChange={(event) => this.handleChange(event, 'four')}>
                        { this.props.choices.choice_4a === this.props.choices.choice_4b ?
                        <>
                        <option >See default choice for class</option>
                        <option value={this.props.choices.choice_4a}>{this.props.choices.choice_4a}</option>
                        </>
                        :
                        <>
                        <option value=''>Choose one</option>
                        <option value={this.props.choices.choice_4a}>{this.props.choices.choice_4a}</option>
                        <option value={this.props.choices.choice_4b}>{this.props.choices.choice_4b}</option>
                        </>
                        }
                    </select>
                {this.state.one &&
                    this.state.two &&
                    this.state.three &&
                    this.state.four ?
                    <button onClick={() => this.submitChoices()}>Submit and Continue!</button>
                    :
                    <button disabled>Choose items to Continue</button>}
            </div>

        </div>
    }

}

const mapStateToProps = state => ({
    classes: state.classReducer,
    choices: state.equipmentChoiceRouter
});
export default connect(mapStateToProps)(Equipment);