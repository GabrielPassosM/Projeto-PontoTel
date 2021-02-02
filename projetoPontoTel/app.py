from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/bovespa')
def bovespa():
    return render_template('bovespa.html')

@app.route('/empresas')
def empresas():
    return render_template('empresas.html')

if __name__ == '__main__':
    print('Servidor rodando no localhost')
    app.run()