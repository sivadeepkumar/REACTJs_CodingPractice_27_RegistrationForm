import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    isemptyFirstName: false,
    lastname: '',
    isemptyLastName: false,
    isSubmittedSuccessful: false,
  }

  onBlurFirstName = () => {
    const {firstname} = this.state
    if (firstname === '') {
      this.setState({isemptyFirstName: true})
    } else {
      this.setState({isemptyFirstName: false})
    }
  }

  onBlurLastName = () => {
    const {lastname} = this.state
    if (lastname === '') {
      this.setState({isemptyLastName: true})
    } else {
      this.setState({isemptyLastName: false})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstname: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastname: event.target.value})
  }

  renderFirstName = () => {
    const {firstname, isemptyFirstName} = this.state

    return (
      <>
        <label htmlFor="firstId">FIRST NAME</label>
        <br />
        <input
          placeholder="First name"
          id="firstId"
          type="text"
          onBlur={this.onBlurFirstName}
          value={firstname}
          onChange={this.onChangeFirstName}
        />
        {isemptyFirstName ? <p className="required-text">Required</p> : null}
      </>
    )
  }

  renderLastName = () => {
    const {lastname, isemptyLastName} = this.state
    return (
      <>
        <label htmlFor="lastnameId">LAST NAME</label>
        <br />
        <input
          placeholder="Last name"
          id="lastnameId"
          type="text"
          onBlur={this.onBlurLastName}
          value={lastname}
          onChange={this.onChangeLastName}
        />
        {isemptyLastName ? <p className="required-text">Required</p> : null}
      </>
    )
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {firstname, lastname} = this.state
    if (firstname !== '' && lastname !== '') {
      this.setState({isSubmittedSuccessful: true})
    } else if (firstname === '' && lastname !== '') {
      this.setState({isemptyFirstName: true})
    } else if (lastname === '' && firstname !== '') {
      this.setState({isemptyLastName: true})
    } else {
      this.setState({
        isSubmittedSuccessful: false,
        isemptyFirstName: true,
        isemptyLastName: true,
      })
    }

    this.setState({firstname: '', lastname: ''})
  }

  anotherFormSubmissionButton = () => {
    this.setState({isSubmittedSuccessful: false})
  }

  render() {
    const {isSubmittedSuccessful} = this.state
    return (
      <div className="main-container">
        <h1>Registration</h1>
        {!isSubmittedSuccessful && (
          <form onSubmit={this.onSubmitForm}>
            <div>{this.renderFirstName()}</div>
            <div>{this.renderLastName()}</div>
            <button className="btn1" type="submit">
              Submit
            </button>
          </form>
        )}
        {isSubmittedSuccessful && (
          <div className="another-submit">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p>Submitted Successfully</p>
            <button type="button" onClick={this.anotherFormSubmissionButton}>
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
