import axios from "axios";

export const fetchUsers = async () => {
	return await axios
		.get("https://randomuser.me/api/?results=50")
		.then((res) => {
			return res;
		});
};
