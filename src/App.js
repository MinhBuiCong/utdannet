import { useEffect, useState } from "react";
import "./App.css";
import { fetchUsers } from "./api/fetchUsers";
import Cards from "./components/cards/Cards";

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetchUsers().then(setUsers);
	}, []);

	return (
		<main>
			<h1 className='page-title'>Users</h1>
			{!!users &&
				users.length > 0 &&
				users.map((user) => {
					return <Cards data={user} />;
				})}
		</main>
	);
}

export default App;
