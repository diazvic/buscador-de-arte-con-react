const Form = () => {
	return (
		<form>
			<div className="busqueda">
				<h2>Búsqueda</h2>
				<i class="fas fa-search" aria-hidden="true"></i>
				<input
					type="search"
					id="input-busqueda"
					placeholder="Ingresá tu búsqueda"
					className="input-busqueda"
				/>
			</div>
			<div className="filtros">
				<div class="tipo">
					<label for="">TIPO</label>
					<select name="obras" id="obras" className="select">
						<option value="titulo">Titulo</option>
						<option value="autor">Autor</option>
					</select>
				</div>
				<div class="orden">
					<label for="">ORDEN</label>
					<select name="ordenar" id="ordenar" className="select">
						<option value="a-z">A-Z</option>
						<option value="z-a">Z-A</option>
					</select>
				</div>
			</div>
			<button className="boton-buscar" id="boton-buscar">
				Buscar
			</button>
		</form>
	);
};

export default Form;
