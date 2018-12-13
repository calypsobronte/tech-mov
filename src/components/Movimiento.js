import React from 'react';
import '../App.css';
import dani from '../assets/daniela.jpeg'

const styles = {color: 'green', fontWeight: 'bold', justifyContent: 'center',textAlign: 'center',}

const Movimiento = () => (
    
  <div>
    <br /><br /> <br />  
    <h2 style={styles}>Somos el Movimiento Tech</h2>
    <p>
    Crear un movimiento supone, que determinado grupo de personas quieran vivir conjuntamente una distinta forma de ver, estar y actuar en el mundo; es por ello que proponemos unir fuerzas para crear no solo, una plataforma colaborativa y un directorio de comunidades de tecnología sino, un movimiento de gente tech y una tribu que inspire, reúna y potencie a quienes están cambiando el mundo.
    </p><br />
    <div class="row text-center">
    <div className="col-md-4 mb-md-0 mb-5">
    <div className="avatar mx-auto">
      <img src="https://pbs.twimg.com/profile_images/1036308617631125509/9cZ2oFVX_400x400.jpg" className="rounded z-depth-1-half cata" alt="Sample avatar"/>
    </div>
    <h4 class="font-weight-bold dark-grey-text my-4">Lina Montaño</h4>
      <h6 class="text-uppercase grey-text mb-3"><strong>@calypso_bronte</strong></h6>
      
      <a type="button" className="btn-floating btn-sm mx-1 mb-0 btn-fb" href="https://www.linkedin.com/in/calypso-bronte/">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a type="button" className="btn-floating btn-sm mx-1 mb-0 btn-git" href="https://github.com/calypsobronte/">
        <i className="fab fa-github"/>
      </a>
      <a type="button" class="btn-floating btn-sm mx-1 mb-0 btn-tw" href="https://twitter.com/calypso_bronte">
        <i className="fab fa-twitter"></i>
      </a>
      </div>

      <div className="col-md-4 mb-md-0 mb-5">
      <div className="avatar mx-auto">
        <img src="https://scontent.feoh3-1.fna.fbcdn.net/v/t1.0-9/26169609_10155438856377832_3218884629754664730_n.jpg?_nc_cat=104&_nc_pt=1&_nc_ht=scontent.feoh3-1.fna&oh=74d791e016ecee3ad1a4e752178a1514&oe=5C9EB475" className="rounded z-depth-1-half cata" alt="Sample avatar"/>
      </div>
      <h4 className="font-weight-bold dark-grey-text my-4">Catalina Zapata</h4>
      <h6 className="text-uppercase grey-text mb-3">
      <strong>@ktadelina</strong></h6>
      
      <a type="button" class="btn-floating btn-sm mx-1 mb-0 btn-fb">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a type="button" class="btn-floating btn-sm mx-1 mb-0 btn-git">
        <i class="fab fa-github"></i>
      </a>
      <a type="button" class="btn-floating btn-sm mx-1 mb-0 btn-tw">
        <i class="fab fa-twitter"></i>
      </a>
    </div>

    <div class="col-md-4">
      <div class="avatar mx-auto">
        <img src={dani} class="rounded z-depth-1-half cata" alt="Sample avatar"/>
      </div>
      <h4 class="font-weight-bold dark-grey-text my-4">Daniela Montoya</h4>
      <h6 class="text-uppercase grey-text mb-3"><strong>@danielaxxx</strong></h6>
      <a type="button" class="btn-floating btn-sm mx-1 mb-0 btn-fb">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a type="button" class="btn-floating btn-sm mx-1 mb-0 btn-git">
        <i class="fab fa-github"></i>
      </a>
      <a type="button" class="btn-floating btn-sm mx-1 mb-0 btn-tw">
        <i class="fab fa-twitter"></i>
      </a>
    </div>
    </div>


  </div>
  
  
);

export default Movimiento;
