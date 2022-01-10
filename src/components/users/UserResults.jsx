import { useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GithubContext'

function UserResults() {
	const { loading, users } = useContext(GithubContext)
	// removed to handle loading userdata elsewhere and through reducer
	// useEffect(() => {
	// 	//fetchUsers()
	// }, [])

	if (!loading) {
		return (
			<div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
				{users.map((user, index) => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		)
	} else {
		return <Spinner />
	}
}

export default UserResults
