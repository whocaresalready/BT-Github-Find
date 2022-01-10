import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
	const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
	const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN
	const initialState = {
		users: [],
		loading: false,
	}
	const [state, dispatch] = useReducer(githubReducer, initialState)
	// taken over by useReducer
	// const [users, setUsers] = useState([])
	// const [loading, setLoading] = useState(true)
	// fetchUsers was put in to use for data to design with
	const fetchUsers = async () => {
		setLoading()
		const response = await fetch(`${GITHUB_URL}/users`, {
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`,
			},
		})
		const data = await response.json()
		dispatch({
			type: 'GET_USERS',
			payload: data,
		})
		// taken over by useReducer
		//	setUsers(data)
		//	setLoading(false)
	}
	const setLoading = () => dispatch({ type: 'SET_LOADING' })

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				loading: state.loading,
				fetchUsers,
			}}
		>
			{children}
		</GithubContext.Provider>
	)
}
export default GithubContext
