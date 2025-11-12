import { NavLink } from "react-router";

function AddMovies() {
    return <div>
        <h2>AddMovie Page</h2>
        <NavLink to="/" className="btn btn-primary">List Movie</NavLink>
    </div>
}

export default AddMovies;