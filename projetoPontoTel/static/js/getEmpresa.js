function selecionaEmpresa(){
    var empresa = document.getElementById('empresas').value;
    
    var app = new Vue({
        el: '#app',
        delimiters: ['[[', ']]'],
        data() {
            return {
                data: []
            }
        },
        mounted() {
            this.getData();
        },
        methods: {
            async getData(){
                const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${empresa}&apikey=HN3K887MOTQ1Z0HT`);
                if(response.status == 200){
                    var info = response.data;
                    for (var key in info['Time Series (Daily)']) {
                        var valor_original = info['Time Series (Daily)'][key]['4. close'];
                        var valor_editado = valor_original.replace(/\./, ",");
    
                        this.data.push(valor_editado);
                    }
                }else{
                    console.log("Ocorreu um errro na API!")
                }
            }
        }
    })

    mostraInfo();
    atualizaCabecalho();
    document.getElementById('esconde-info').style.display="block";
    document.getElementById('app').style.display="block";
}

function mostraInfo() {
    var container = document.getElementById('cabecalho-info');
    var empresa = document.getElementById('empresas').value;
    if (empresa=="PETR4.SA") {
        var linha1 = "Petroleo Brasileiro SA Petrobras Preference Shares";
        var linha2 = "BVMF: PETR4";
    }
    else if (empresa=="ITUB4.SAO") {
        var linha1 = "Itaú Unibanco";
        var linha2 = "BVMF: ITUB4";
    }
    else if (empresa=="VALE3.SAO") {
        var linha1 = "Vale S.A.";
        var linha2 = "BVMF: VALE3";
    }
    container.innerHTML = "<p class='texto-info'>"+linha1+"</p> <p class='texto-info'>"+linha2+"</p>";
}

function atualizaCabecalho() {
    document.getElementById('select-row').style.display="none";
    document.getElementById('reload-botao').style.display="block";
}

function reload() {
    window.location.reload();
}