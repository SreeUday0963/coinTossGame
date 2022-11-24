// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {toss: 0, total: 0, heads: 0, tails: 0}

  onClickToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState({toss: tossResult})

    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {toss, total, heads, tails} = this.state
    return (
      <div className="bg-container">
        <div className="toss-container">
          <div className="content">
            <h1 className="heading">Coin Toss Game</h1>
            <br />
            <p className="desc">Heads (or) Tails</p>
            <div className="img-container">
              {toss === 0 ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
                  className="toss-img"
                  alt="toss result"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
                  className="toss-img"
                  alt="toss result"
                />
              )}
            </div>
            <div className="button-container">
              <button
                className="toss-button"
                type="button"
                onClick={this.onClickToss}
              >
                Toss Coin
              </button>
            </div>
            <br />
            <div className="toss-count-container">
              <p className="count">Total: {total}</p>
              <p className="count">Heads: {heads}</p>
              <p className="count">Tails: {tails}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
