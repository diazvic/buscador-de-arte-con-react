import { useState, useEffect } from "react";
// fetch(
// 	"https://api.artic.edu/api/v1/artworks?fields=id,title,image_id,artist_title"
// )
// 	.then((res) => res.json())
// 	.then((data) => {
// 		console.log(data.data);
// 	});

// fetch(
// 	"https://api.artic.edu/api/v1/artworks?fields=id,title,image_id,artist_title&limit=10"
// )
// 	.then((res) => res.json())
// 	.then((data) => {
// 		console.log(data.data);
// 		setBusqueda(data.data);
// 	});
const Seccion = () => {
	const [busqueda, setBusqueda] = useState([]);

	useEffect =
		(() => {
			fetch(
				"https://api.artic.edu/api/v1/artworks?fields=id,title,image_id,artist_title&limit=10"
			)
				.then((res) => res.json())
				.then((data) => {
					console.log(data.data);
					setBusqueda(data.data);
				});
		},
		[]);

	return (
		<div>
			<button>Click</button>

			{busqueda.map((elemento) => (
				<div>
					<h1>{elemento.title}</h1>
					<p>{elemento.id}</p>
				</div>
			))}
		</div>
	);
};

export default Seccion;
