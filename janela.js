


const removido = document.getElementById("invisivel");

 function abrirJanela (){

  document.getElementById("musica").play();

const tudo = document.getElementById("tudo");
      tudo.classList.remove("invisivel");
      tudo.classList.add("visivel");

      const retangulo = document.getElementById("retangulo");
      retangulo.classList.remove("invisivel");
      retangulo.classList.add("visivel");


      const barra = document.getElementById("barra");
      barra.classList.remove("invisivel");
      barra.classList.add("visivel");


const fechar = document.getElementById("fechar");
      fechar.classList.remove("invisivel");
      fechar.classList.add("visivel");


      let area1 = document.getElementById("area");
      area1.classList.remove("invisivel");
      area1.classList.add("visivel");

      const area5 = document.getElementById("area5");
      area5.classList.remove("visivel");
      area5.classList.add("invisivel");

      const area2 = document.getElementById("area2");
      area2.classList.remove("visivel");
      area2.classList.add("invisivel");

     const area3 = document.getElementById("area3");
      area3.classList.remove("visivel");
      area3.classList.add("invisivel");

      const area4 = document.getElementById("area4");
      area4.classList.remove("visivel");
      area4.classList.add("invisivel");

      
      setTimeout(function(){
      const tudo = document.getElementById("tudo");
       tudo.classList.add("zoom2");
    }, 10);
    {
   setTimeout(function(){
      const tudo = document.getElementById("tudo");
      tudo.classList.remove("zoom2")
       tudo.classList.add("zoom3");
    }, 15);
    }
  }

    function fechar (){

      document.getElementById("musica").play();

       
       setTimeout(function(){
      const tudo = document.getElementById("tudo");
      tudo.classList.remove("zoom3")
       tudo.classList.add("zoom2");
    }, 10);
    {
   setTimeout(function(){
      const tudo = document.getElementById("tudo");
      tudo.classList.remove("zoom2")
       tudo.classList.add("zoom1");
    }, 15);
    setTimeout(function(){
      const tudo = document.getElementById("tudo");
      tudo.classList.add("invisivel")
    }, 20);
    }}

    function sobremim (){

document.getElementById("musica").play();

      const area = document.getElementById("area2");
      area.classList.remove("invisivel");
      area.classList.add("visivel");

      const area4 = document.getElementById("area4");
      area4.classList.remove("visivel");
      area4.classList.add("invisivel");

      const area3 = document.getElementById("area3");
      area3.classList.remove("visivel");
      area3.classList.add("invisivel");

      const area5 = document.getElementById("area5");
      area5.classList.remove("visivel");
      area5.classList.add("invisivel");

      const area1= document.getElementById("area");
      area1.classList.remove("visivel");
      area1.classList.add("invisivel");
    }
   
    function programação (){

      document.getElementById("musica").play();
      
      const area4 = document.getElementById("area4");
      area4.classList.remove("invisivel");
      area4.classList.add("visivel");

      const area = document.getElementById("area2");
      area.classList.remove("visivel");
      area.classList.add("invisivel");

      const area3 = document.getElementById("area3");
      area3.classList.remove("visivel");
      area3.classList.add("invisivel");

      const area5 = document.getElementById("area5");
      area5.classList.remove("visivel");
      area5.classList.add("invisivel");

      const area1= document.getElementById("area");
      area1.classList.remove("visivel");
      area1.classList.add("invisivel");
    }

    function projetos (){

      document.getElementById("musica").play();
      
      const area3 = document.getElementById("area3");
      area3.classList.remove("invisivel");
      area3.classList.add("visivel");

      const area = document.getElementById("area2");
      area.classList.remove("visivel");
      area.classList.add("invisivel");

      const area4 = document.getElementById("area4");
      area4.classList.remove("visivel");
      area4.classList.add("invisivel");

      const area5 = document.getElementById("area5");
      area5.classList.remove("visivel");
      area5.classList.add("invisivel");

      const area1= document.getElementById("area");
      area1.classList.remove("visivel");
      area1.classList.add("invisivel");
    }
   
    function contato (){

      document.getElementById("musica").play();
      
      const area5 = document.getElementById("area5");
      area5.classList.remove("invisivel");
      area5.classList.add("visivel");

      const area = document.getElementById("area2");
      area.classList.remove("visivel");
      area.classList.add("invisivel");

      const area4 = document.getElementById("area4");
      area4.classList.remove("visivel");
      area4.classList.add("invisivel");

      const area3= document.getElementById("area3");
      area3.classList.remove("visivel");
      area3.classList.add("invisivel");

      const area1= document.getElementById("area");
      area1.classList.remove("visivel");
      area1.classList.add("invisivel");
    }
   
    