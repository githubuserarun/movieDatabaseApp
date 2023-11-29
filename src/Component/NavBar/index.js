import {Link, withRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchMoviesContext from '../../Context/SearchMoviesContext'
import './index.css'

const NavBar = props => {
  const renderSearchBar = () => (
    <SearchMoviesContext.Consumer>
      {value => {
        const {
          onTriggerSearchingQuery,
          onChangeSearchInput,
          searchInput,
        } = value

        const onChangeHandler = event => onChangeSearchInput(event.target.value)

        const onSearchHandler = event => {
          event.preventDefault()
          const {history} = props
          onTriggerSearchingQuery()
          history.push(`/search`)
        }

        return (
          <div className="d-flex align-items-center">
            <input
              type="text"
              className="me-2 search-input"
              onChange={onChangeHandler}
              value={searchInput}
              placeholder="Search"
            />
            <button
              className="btn btn-outline-info"
              type="button"
              onClick={onSearchHandler}
            >
              Search
            </button>
          </div>
        )
      }}
    </SearchMoviesContext.Consumer>
  )

  return (
    <nav className="  navbar-container d-flex justify-content-between align-items-center p-3">
      <div className="logo-container ">
        <h1 className="page-logo">movieDB</h1>
      </div>
      <div className=" d-flex align-items-center">
        <ul className=" d-flex align-items-center p-0 mb-0 ms-3 nav-items-list">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Popular
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/top-rated">
              Top Rated
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/upcoming">
              Upcoming
            </Link>
          </li>
        </ul>
      </div>
      <div>{renderSearchBar()}</div>
    </nav>
  )
}

export default withRouter(NavBar)
