import { PropTypes } from 'prop-types'
import Card from "./shared/Card"

function Footer({ text }) {


    return (
        <Card reverse={true}>
            <h4>{text}</h4>
        </Card>
    )
}

Footer.defaultProps = {
    text: "This is the footer, Contact Us",
}

Footer.propTypes = {
    text: PropTypes.string,
}

export default Footer
