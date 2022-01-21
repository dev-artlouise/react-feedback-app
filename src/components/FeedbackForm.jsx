import { useState, useContext, useEffect } from "react"
import FeedbackContext from "../context/FeedbackContext"
import RatingSelect from "./RatingSelect"
import Card from "./shared/Card"
import Button from "./shared/Button"


function FeedbackForm() {

    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setbtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if (text === '') {
            setbtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Please input atleast 10 character')
            setbtnDisabled(true)
        } else {
            setMessage(null)
            setbtnDisabled(false)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            }

            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }

            // reset text field to empty string
            setText('')
        }
    }


    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                {/* function select prop */}
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input onChange={handleTextChange} value={text} type="text" placeholder="Write a Review" />
                    <Button
                        type="submit"
                        isDisabled={btnDisabled}
                    >
                        Send
                    </Button>
                </div>

                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
