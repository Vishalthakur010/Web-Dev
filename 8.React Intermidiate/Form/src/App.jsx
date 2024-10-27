import { useState } from "react"

function App() {

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "", streetAddress: "", city: "", state: "", postalCode: "", comments: false, candidates: false, offers: false, pushNotifications: ""
  })

  // console.log(formData)
  function changeHandler(event) {
    const { name, type, value, checked } = event.target
    setFormData((prev) => (
      { ...prev, [name]: type === "checkbox" ? checked : value }
    ))
  }

  function formHandler(event) {
    event.preventDefault()

    console.log("printing Form Data")
    console.log(formData)
  }

  return (
    <div className="flex  flex-col items-center mt-2 mb-2">
      <form onSubmit={formHandler} className="w-[55%] border border-gray-700 rounded-md p-5">

        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Vishal"
          value={formData.firstName}
          onChange={changeHandler}
          className="h-8 w-full mt-2 mb-1 border-2 border-slate-700 rounded-md"
        />

        <br />
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Thakur"
          value={formData.lastName}
          onChange={changeHandler}
          className="h-8 w-full mt-2 mb-1 border-2 border-slate-700 rounded-md"
        />

        <br />
        <label htmlFor="email">Email address</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="vishal@gmail.com"
          value={formData.email}
          onChange={changeHandler}
          className="h-8 w-full mt-2 mb-1 border-2 border-slate-700 rounded-md"
        />

        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={changeHandler}
          className="h-8 w-full mt-2 mb-1 border-2 border-slate-700 rounded-md"
        >
          <option value="india">India</option>
          <option value="us">United States</option>
          <option value="canada">Canada</option>
          <option value="mexico">Mexico</option>
        </select>

        <br />
        <label htmlFor="streetAddress">Street address</label>
        <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="1234 Main st"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="h-8 w-full mt-2 mb-1 border-2 border-slate-700 rounded-md"
        />

        <br />
        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Darbhanga"
          value={formData.city}
          onChange={changeHandler}
          className="h-8 w-full mt-2 mb-1 border-2 border-slate-700 rounded-md"
        />

        <br />
        <label htmlFor="state">State/Province</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Seoul"
          value={formData.state}
          onChange={changeHandler}
          className="h-8 w-full mt-2 mb-1 border-2 border-slate-700 rounded-md"
        />

        <br />
        <label htmlFor="postalCode">postalCode</label>
        <br />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="846004"
          value={formData.postalCode}
          onChange={changeHandler}
          className="h-8 w-full mt-2 mb-1 border-2 border-slate-700 rounded-md"
        />

        <br />
        <fieldset className="mt-2">
          <legend>BY Email</legend>

          <div className="flex gap-3 mt-2">
            <input
              type="checkbox"
              name="comments"
              id="comments"
              onChange={changeHandler}
              checked={formData.comments}
            />
            <label htmlFor="comments">Comments</label>
          </div>
          <p className="opacity-70 ml-6">Get notified when someone posts a comment on a posting</p>


          <div className="flex gap-3 mt-2">
            <input
              type="checkbox"
              name="candidates"
              id="candidates"
              onChange={changeHandler}
              checked={formData.candidates}
            />
            <label htmlFor="candidates">Candidates</label>
          </div>
          <p className="opacity-70 ml-6">Get notified when someone posts a comment on a posting</p>

          <div className="flex gap-3 mt-2">
            <input
              type="checkbox"
              name="offers"
              id="offers"
              onChange={changeHandler}
              checked={formData.offers}
            />
              <label htmlFor="offers">Offers</label>
              </div>
              <p className="opacity-70 ml-6">Get notified when someone posts a comment on a posting</p>
        </fieldset>

        <fieldset className="mt-4">
          <legend>Push Notifications</legend>
          <p className="opacity-70">These are delivered via SMS to your mobile phone</p>

          <div className="flex gap-3 mt-2">
          <input
            type="radio"
            name="pushNotifications"
            id="pushEverything"
            value="Everything"
            onChange={changeHandler}
          />
          <label htmlFor="pushEverything">Everything</label>
          </div>

          <div className="flex gap-3 mt-2">
          <input
            type="radio"
            name="pushNotifications"
            id="pushEmail"
            value="Same as email"
            onChange={changeHandler}
          />
          <label htmlFor="pushEmail">Same as email</label>
          </div>

          <div className="flex gap-3 mt-2">
          <input
            type="radio"
            name="pushNotifications"
            id="pushNothing"
            value="No Push Notifications"
            onChange={changeHandler}
          />
          <label htmlFor="pushNothing">No Push Notifications</label>
          </div>

        </fieldset>

        <button
          className="bg-blue-500 text-white font-bold py-2 px-5 rounded-md mt-2"
        >Save</button>

      </form>
    </div>
  )
}

export default App
