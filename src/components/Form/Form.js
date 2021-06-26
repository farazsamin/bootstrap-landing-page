import React, { useState } from 'react';

const Form = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handelSubmit = (e) => {
        e.preventDefault()
        const user ={
            email : email,
            message : message
        }
        console.log(user)
    }
    return (
        <div className="row m-5 p-5 b-5">
            <div className="col-md-4 m-auto">
                <form>
                    <div class="form-group">
                        <label>Email address</label>
                        <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" onChange={
                            (event) => {
                                setEmail(event.target.value);
                            }
                        } />
                    </div>
                    <div class="form-group">
                        <label>Message</label>
                        <input type="text" class="form-control" placeholder="Message" onChange={
                            (event) => {
                                setMessage(event.target.value);
                            }} />
                    </div>
                    <div className="text-center">
                        <button onClick={handelSubmit} type="submit" class="btn btn-primary mt-3 ">Submit</button>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default Form;