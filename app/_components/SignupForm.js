import { useState } from "react"
import { Form, Field } from 'react-final-form'

const INIT = "INIT"
const SUBMITTING = "SUBMITTING"
const ERROR = "ERROR"
const SUCCESS = "SUCCESS"
const formStates = [INIT, SUBMITTING, ERROR, SUCCESS]
const formStyles = {
    id: "clkw8l3zz015ol80o5ej0dv68",
    name: "Default",
    placeholderText: "you@example.com",
    formFontColor: "#000000",
    buttonText: "join waitlist",
    buttonFontColor: "#ffffff",
    buttonColor: "#027E94",
    successMessage: "thanks! we'll be in touch!",
    successFontColor: "#2FAD02",
    userGroup: ""
}
const domain = "app.loops.so"

export default function SignUpForm() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [company, setCompany] = useState("")
    const [industry, setIndustry] = useState("")
    const [position, setPosition] = useState("")
    const [email, setEmail] = useState("")
    const [subscribed, setSubscribed] = useState("Yes")
    const [formState, setFormState] = useState(INIT)
    const [errorMessage, setErrorMessage] = useState("")

    const resetForm = () => {
        setFirstName("")
        setLastName("")
        setCompany("")
        setIndustry("")
        setPosition("")
        setEmail("")
        setSubscribed("Yes")
        setFormState(INIT)
        setErrorMessage("")
    }

    const onSubmitFunc = async (values) => {
        await sleep(300);
        window.alert(JSON.stringify(values, 0, 2));
    };

    /**
     * Rate limit the number of submissions allowed
     * @returns {boolean} true if the form has been successfully submitted in the past minute
     */
    const hasRecentSubmission = () => {
        const time = new Date()
        const timestamp = time.valueOf()
        const previousTimestamp = localStorage.getItem("loops-form-timestamp")

        // Indicate if the last sign up was less than a minute ago
        if (
            previousTimestamp &&
            Number(previousTimestamp) + 60 * 1000 > timestamp
        ) {
            setFormState(ERROR)
            setErrorMessage("too many signups, please try again in a little while")
            return true
        }

        localStorage.setItem("loops-form-timestamp", timestamp.toString())
        return false
    }

    const handleSubmit = event => {
        // Prevent the default form submission
        event.preventDefault()

        // boundary conditions for submission
        if (formState !== INIT) return
        if (!isValidEmail(email)) {
            setFormState(ERROR)
            setErrorMessage("please enter a valid email")
            return
        }
        if (hasRecentSubmission()) return
        setFormState(SUBMITTING)

        // build body
        const formBody = `userGroup=${encodeURIComponent(
            formStyles.userGroup
        )}&firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}&company=${encodeURIComponent(company)}&industry=${encodeURIComponent(industry)}&position=${encodeURIComponent(position)}&email=${encodeURIComponent(email)}&subscribed=${encodeURIComponent(subscribed)}`

        // API request to add user to newsletter
        fetch(`https://${domain}/api/newsletter-form/${formStyles.id}`, {
            method: "POST",
            body: formBody,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            .then(res => [res.ok, res.json(), res])
            .then(([ok, dataPromise, res]) => {
                if (ok) {
                    resetForm()
                    setFormState(SUCCESS)
                } else {
                    dataPromise.then(data => {
                        setFormState(ERROR)
                        setErrorMessage(data.message || res.statusText)
                        localStorage.setItem("loops-form-timestamp", "")
                    })
                }
            })
            .catch(error => {
                setFormState(ERROR)
                // check for cloudflare error
                if (error.message === "failed to fetch") {
                    setErrorMessage(
                        "too many signups, please try again in a little while"
                    )
                } else if (error.message) {
                    setErrorMessage(error.message)
                }
                localStorage.setItem("loops-form-timestamp", "")
            })
    }

    const isInline = formStyles.formStyle === "inline"

    switch (formState) {
        case SUCCESS:
            return (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%"
                    }}
                >
                    <p
                        style={{
                            color: formStyles.successFontColor,
                        }}
                    >
                        {formStyles.successMessage}
                    </p>
                </div>
            )
        case ERROR:
            return (
                <>
                    <SignUpFormError />
                    <BackButton />
                </>
            )
        default:
            return (
                <>
                    <form
                        onSubmit={handleSubmit}
                        className='newsletter-form grid grid-cols-2 gap-8 self-center'>
                        <div>
                            <label>first name</label>
                            <br />
                            <input name="firstName" component="input" placeholder="john" className='w-full rounded-lg py-1 px-7' required value={firstName} onChange={e => setFirstName(e.target.value)} />
                        </div>
                        <div>
                            <label>last name</label>
                            <br />
                            <input name="lastName" component="input" placeholder="appleseed" className='w-full rounded-lg py-1 px-7' required value={lastName} onChange={e => setLastName(e.target.value)} />
                        </div>
                        <div>
                            <label>company</label>
                            <br />
                            <input name="company" component="input" placeholder="nauvis co" className='w-full rounded-lg py-1 px-7' required value={company} onChange={e => setCompany(e.target.value)} />
                        </div>
                        <div>
                            <label>industry</label>
                            <br />
                            <input name="industry" component="input" placeholder="software" className='w-full rounded-lg py-1 px-7' value={industry} onChange={e => setIndustry(e.target.value)} />
                        </div>
                        <div>
                            <label>position/role</label>
                            <br />
                            <input name="position" component="input" placeholder="senior input engineer" className='w-full rounded-lg py-1 px-7' value={position} onChange={e => setPosition(e.target.value)} />
                        </div>
                        <div>
                            <label>email</label>
                            <br />
                            <input name="email" component="input" placeholder="j.appleseed@nauvis.co" className='w-full rounded-lg py-1 px-7' value={email} onChange={e => setEmail(e.target.value)} required />
                        </div>
                        <SignUpFormButton />
                    </form>
                </>
            )
    }

    function SignUpFormError() {
        return (
            <div
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%"
                }}
            >
                <p
                    style={{
                        color: "#940225",
                    }}
                >
                    {errorMessage || "oops! something went wrong, please try again"}
                </p>
            </div>
        )
    }

    function BackButton() {
        const [isHovered, setIsHovered] = useState(false)

        return (
            <button
                style={{
                    color: "#262625",
                    margin: "10px auto",
                    textAlign: "center",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: isHovered ? "underline" : "none"
                }}
                onMouseOut={() => setIsHovered(false)}
                onMouseOver={() => setIsHovered(true)}
                onClick={resetForm}
            >
                &larr; Back
            </button>
        )
    }

    function SignUpFormButton({ props }) {
        return (
            <button
                type="submit"
                className='rounded-lg border-2 border-highlight hover:bg-highlight hover:text-bg py-1 px-7 mt-6'
            >
                {formState === SUBMITTING ? "please wait..." : formStyles.buttonText}
            </button>
        )
    }
}

function isValidEmail(email) {
    return /.+@.+/.test(email)
}
