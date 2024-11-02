import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    textInputVal: '',
  }

  calculateLetters = event => {
    this.setState({textInputVal: event.target.value})
  }

  render() {
    const {textInputVal} = this.state
    return (
      <div className="bg-container">
        <div className="inner-card">
          <h1 className="heading-ele">Calculate the Letters you enter</h1>
          <div className="input-label-card">
            <label className="label-ele" htmlFor="textEle">
              Enter the phrase
            </label>
            <input
              type="text"
              id="textEle"
              placeholder="Enter the phrase"
              className="input-ele"
              value={textInputVal}
              onChange={this.calculateLetters}
            />
          </div>

          <div className="calculate-letters-card">
            <p>No.of letters: {textInputVal.length}</p>
          </div>
        </div>
        <div className="image-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image-ele"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
