import Card from "../components/shared/Card"
import { Link } from 'react-router-dom'

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>This is the About Page</h1>
                <p>This is my feedback app project</p>
                <p>Version: 1.0.0</p>

                <Link to='/'>Back to home</Link>

            </div>
        </Card>
    )
}

export default AboutPage
