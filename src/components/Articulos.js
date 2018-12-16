import React from 'react';
import '../App.css'
import medium from '../assets/imgCamilo.png'

const Articulos = () => (
  <div>
      
<section class="section blog" id="blog">
  <div class="container">
    
    <header class="section-heading">
      <h2>Articulo</h2><span>Medium</span>
    </header>
    
    <div class="section-content" id="blogContent">
      <div class="row" id="jsonContent"></div>
    </div>
    {/*
    * tratamos de hacer el paso de conectar esta en react 
   */}

    <div class="avatar mx-auto">
    <a href="https://codepen.io/calypso_bronte/pen/ebJOXR?editors=1010">
        <img src={medium} class="rounded z-depth-1-half" alt="Sample avatar"/>
        </a>
      </div>
    
    <div class="text-center">
      <a class="btn btn-dark" id="loadBlogPosts" href="https://medium.com/@camilomontoyau">
        View All<span class="fa fa-angle-double-right">
        </span>
      </a>
    </div>

    
  </div>
  
</section>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js" crossorigin></script>
<script src="https://c72e469f272d443e85fba9d21d04cd33.production.codepen.plumbing/jQuery-dateFormat.js" crossorigin></script>



  </div>
  
);


export default Articulos;