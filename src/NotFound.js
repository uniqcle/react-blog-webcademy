import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry, this page cant not be found</h2>
            <Link to="/">Go to Main page</Link>
        </div>
    );
}

export default NotFound;