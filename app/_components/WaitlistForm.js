import { useState } from "react"

const INIT = "INIT"
const SUBMITTING = "SUBMITTING"
const ERROR = "ERROR"
const SUCCESS = "SUCCESS"
const formStates = [INIT, SUBMITTING, ERROR, SUCCESS]
const formStyles = {
  id: "clkw8l3zz015ol80o5ej0dv68",
  name: "Default",
  formStyle: "inline",
  placeholderText: "you@example.com",
  formFontColor: "#000000",
  buttonText: "join the waitlist",
  buttonFontColor: "#ffffff",
  buttonColor: "#027E94",
  successMessage: "thanks! we'll be in touch!",
  successFontColor: "#2FAD02",
  userGroup: ""
}
const domain = "app.loops.so"

export default function SignUpFormReact({alignSelf}) {
  const [email, setEmail] = useState("")
  const [formState, setFormState] = useState(INIT)
  const [errorMessage, setErrorMessage] = useState("")

  const resetForm = () => {
    setEmail("")
    setFormState(INIT)
    setErrorMessage("")
  }

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
    )}&email=${encodeURIComponent(email)}`

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
          className="text-base"
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
            className="text-base"
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: isInline ? "row" : "column",
              alignItems: "center",
              justifyContent: alignSelf,
              width: "100%"
            }}
          >
            <input
              className="text-base"
              type="text"
              name="email"
              placeholder={formStyles.placeholderText}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required={true}
              style={{
                color: formStyles.formFontColor,
                margin: isInline ? "0px 10px 0px 0px" : "0px 0px 10px",
                width: "100%",
                maxWidth: "300px",
                minWidth: "100px",
                background: "#FFFFFF",
                border: "1px solid #D1D5DB",
                boxSizing: "border-box",
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px",
                borderRadius: "6px",
                padding: "8px 12px"
              }}
            />
            <SignUpFormButton />
          </form>
        </>
      )
  }

  function SignUpFormError() {
    return (
      <div
        className="text-base"
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%"
        }}
      >
        <p
          className="text-base"
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
        className="text-base"
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
        className="text-base"
        type="submit"
        style={{
          background: formStyles.buttonColor,
          color: formStyles.buttonFontColor,
          width: isInline ? "min-content" : "100%",
          maxWidth: "300px",
          whiteSpace: isInline ? "nowrap" : "normal",
          height: "38px",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          padding: "9px 17px",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
          borderRadius: "6px",
          textAlign: "center",
          lineHeight: "20px",
          border: "none",
          cursor: "pointer"
        }}
      >
        {formState === SUBMITTING ? "please wait..." : formStyles.buttonText}
      </button>
    )
  }
}

function isValidEmail(email) {
  return /.+@.+/.test(email)
}
