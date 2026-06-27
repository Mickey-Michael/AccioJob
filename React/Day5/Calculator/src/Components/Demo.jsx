import { useState } from "react"

const Demo  = () => {

    const [val , setVal] = useState({
        Username : "",
        Password : "",
        email : ""
    })

    return (
        <div>

            <div>
                <label htmlFor="user">UserName</label>
                <input onInput = {(e) => {
                    setVal({
                        ...val,
                        Username : e.terget.value
                    })
                }} placeholder="Username" id="user"  type="text" />
            </div>

            <div>
                <label htmlFor="pass">Password</label>
                <input onInput = {(e) => {
                    setVal({
                        ...val,
                        Password : e.terget.value
                    })
                }} placeholder="Password" id="pass" type="text" />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input onInput = {(e) => {
                    setVal({
                        ...val,
                        email : e.terget.value
                    })
                }} placeholder="Email" id="email" type="text" />
            </div>

            <button onClick={() => {
                console.log(val)
            }}>Click Me</button>

        </div>
    )
}

export default Demo