import React from 'react';
import '../App.css'



const Home = () => (
  <div ><br /><br /><br />
  <aside class="silowp-showcase site-main">
	<div class="container">
		<div class="row">
			<div class="col-xs-12 textcenter-xs flex-xs-middle">
				<h1 class="">Directorio de Comunidades Tech</h1>
				<h2>¡Permita que el mundo lo encuentre!</h2>
				<input type="text" id="comunidades" list="medellin" placeholder="Palabra Clave" />&nbsp;&nbsp;
					<datalist id="medellin">
							<option value="Node Colombia" />
							<option value="Wordpress Medellin"/>
							<option value="React Medellin"/>
							<option value="Medellin JS"/>
							<option value="Data Science Fem"/>
							<option value="Pioneras Dev"/>
							<option value="Pyladies Medellin"/>
					</datalist>
				<input type="text" placeholder="Ciudad"/>&nbsp;&nbsp;
				<input type="text" placeholder="Categoria"/>&nbsp;&nbsp;
				<input type="button" value="BUSCAR"/>&nbsp;&nbsp;
				<br /><br /><br />
				<p className="bannerP">
				Si eres un nómada digital, freelancer, blogger, desarrollador, diseñador, estudiante, consultor, dueño de negocio, emprendedor, institución, profesional o simplemente, quieres pertenecer al  #MovimientoTech, es hora de poner a funcionar nuestro directorio y encontrar la comunidad de tecnología o meetup más cercano a tu ciudad.
				</p>
			</div>
		</div>
	</div>
</aside>
  </div>
	
);

export default Home;
