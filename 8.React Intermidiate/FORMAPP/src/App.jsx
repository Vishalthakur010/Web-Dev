import { useState } from 'react'

function App() {

  // const [firstName, setFirstName] = useState("")
  // const [lastName, setlastName] = useState("")

  // console.log(firstName)
  // console.log(lastName)
  // function changeFirstNameHandler(event) {
  //   // console.log("First name")
  //   // console.log(event.target.value)
  //   setFirstName(event.target.value)
  // }
  // function changeLastNameHandler(event) {
  //   // console.log("Last name")
  //   // console.log(event.target.value)
  //   setFirstName(event.target.value)
  // }

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", comment: "", isVisible: true, mode: "", favCar: ""
  })

  // console.log(formData)
  function changeHandler(event) {
    const { name, value, type, checked } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type == "checkbox" ? checked : value
        // [event.target.name]: event.target.value

      }
    })
  }

  function submitHandler(event){
    //preventing default
    event.preventDefault()
    console.log("printing enitre form data : ")
    console.log(formData)
  }
  return (
    <div>
      <form onSubmit={submitHandler}>

        <input
          type="text"
          placeholder='First name'
          onChange={changeHandler}
          name='firstName'
          value={formData.firstName}
        />
        <br />
        <br />

        <input
          type="text"
          placeholder='Last name'
          onChange={changeHandler}
          name='lastName'
          value={formData.lastName}
        />
        <br />
        <br />

        <input
          type="email"
          placeholder='Enter your email'
          onChange={changeHandler}
          name='email'
          value={formData.email}
        />
        <br />
        <br />

        <textarea
          placeholder='Enter your comments here'
          onChange={changeHandler}
          name='comment'
          value={formData.comment}
        />
        <br />
        <br />

        <input
          type="checkbox"
          onChange={changeHandler}
          name='isVisible'
          id='isVisible'
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am i visible ?</label>
        <br />
        <br />

        <fieldset>
          <legend>Mode :</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name='mode'
            value="Online-mode"
            id='Online-mode'
            checked={formData.mode == "Online-mode"}
          />
          <label htmlFor="Online-mode">Online mode</label>

          <input
            type="radio"
            onChange={changeHandler}
            name='mode'
            value="Offline-mode"
            id='Offline-mode'
            checked={formData.mode == "Offline-mode"}
          />
          <label htmlFor="Offline-mode">Offline mode</label>
        </fieldset>


        <label htmlFor="favcar">Your Favourite Car </label>
        <select
          onChange={changeHandler}
          name='favCar'
          id='favCar'
          value={formData.favCar}
        >
          <option value="Scorpio">Scorpio</option>
          <option value="Fortuner">Fortuner</option>
          <option value="Thar">Thar</option>
          <option value="Lamborghini">Lamborghini</option>
          <option value="Tata">Tata</option>
        </select>

        <br />
        <br />
        {/* <input type="submit" value="submit"/> */}
        <button>Submit</button>

      </form>
    </div>
  )
}

export default App