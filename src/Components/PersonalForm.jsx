import { useState } from "react";

export default function PersonalForm({addPerson }) {

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [location, setLocation] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addPerson(fullname, email, phone, location)
    }

	return (
		<form onSubmit={e => handleSubmit(e)}>
            <div className="form-title">Personal Details</div>
			<label htmlFor="fullname">Fullname: </label>
			<input type="text" id="fullname" value = {fullname} onChange={ e => setFullname(e.target.value)}/>
            <label htmlFor="email">Email: </label>
			<input type="text" id="email" value = {email} onChange={ e => setEmail(e.target.value)}/>
            <label htmlFor="phone">Phone: </label>
			<input type="text" id="phone" value = {phone} onChange={ e => setPhone(e.target.value)}/>
            <label htmlFor="location">Location: </label>
			<input type="text" id="location" value = {location} onChange={ e => setLocation(e.target.value)}/>
            <button className="submit">Submit</button>
		</form>
	);
}
