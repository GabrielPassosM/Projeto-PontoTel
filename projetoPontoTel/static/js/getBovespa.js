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
            const response = await axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBOV11.SAO&apikey=HN3K887MOTQ1Z0HT');
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

document.getElementById('app').style.display="block";