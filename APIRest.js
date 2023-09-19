async function pokemoom(numero){
      const feetch=await fetch(`https://pokeapi.co/api/v2/pokemon/${numero}/`);
      const result=await feetch.json();
      if(Object.keys(result.types).length===1){
          tipo2="vazio"
      }
      else{
        tipo2=result.types[1].type.name
      }
      
      const div=document.createElement("div");
      div.id="divmain";
      div.innerHTML=`<ul id="lista" class="${result.types[0].type.name}">
      <li id="column01">
        <H1 id="nome">${result.name}</H1>
        <ol id="tipo">
                <li class="${result.types[0].type.name}">${result.types[0].type.name}</li>
                <li class="${tipo2}">${tipo2}</li>
        </ol>                
      </li>
      <li id="column02">
        <h2 id="numeracao">#${result.id}</h2>
        
        <img id="imagem" src="${result.sprites.other.home.front_shiny}">
      </li>
      </ul>`;
      document.getElementById("pokemoms").appendChild(div);

      
}

function consultar(n){
  for(let i=1;i<=n;i++){
    pokemoom(i);   
  }
}

consultar(20)


for(let x=1;x<=10;x++){
  const li1=document.createElement("li");
  li1.innerHTML=`<a href="">${x}</a>`;
  document.getElementById("numeracao01").appendChild(li1);
}

      