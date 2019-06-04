let inputs = document.querySelectorAll('.valor')
const url = 'https://api.exchangeratesapi.io/latest?symbols=USD,GBP,JPY'


fetch(url)
    .then( r => r.json() )
    .then( data => {
        document.getElementById('USD').dataset.cambio = data['rates']['USD']
        document.getElementById('GBP').dataset.cambio = data['rates']['GBP']
        document.getElementById('JPY').dataset.cambio = data['rates']['JPY']

        inputs.forEach(input => {
            input['value'] = input['dataset']['cambio']
        });
    })
    .catch( e => console.log(e) )


const valorModificado = input => {
    let factor = input['value'] / input['dataset']['cambio']
    
    inputs.forEach(input => {
        input['value'] = (input['dataset']['cambio'] * factor).toFixed(2)
    });
}

console.log('Puto el que lo lea')
