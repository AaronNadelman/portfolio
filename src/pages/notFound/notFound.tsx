import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div>
            <h1>Not found page</h1>
            <Link to={"/"}>Go back to home - Volver al Home</Link>
        </div>

    );
}

export default NotFoundPage;