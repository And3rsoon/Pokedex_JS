
async function getDados(){
    let url='http://servicos.cptec.inpe.br/XML/capitais/condicoesAtuais.xml';
    try{
            let res=await fetch(url);
            const parser = new DOMParser();
            const xml = parser.parseFromString(res, "application/xml");
            return xml;
    }
    catch{
        console.log("erro");
    }
}

async function renderDados(){
    let dados=await getDados();
    try{
        
        console.log(dados);
    }
    catch{
        console.log("erro 2");
    }
}

renderDados();