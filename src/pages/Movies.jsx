import { useParams, useNavigate } from "react-router-dom";

export const Movies = () => {
	const { id } = useParams();
	console.log("id: ", id);
	const value = useNavigate();
	console.log("value: ", value);

	return <h2>Movies</h2>;
};
