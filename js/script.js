
function enviar() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let encontrou = document.getElementById("encontrou").value;
    let veiculo = document.getElementById("veiculo").value;
    let chassi = document.getElementById("chassi").value;
    let peca = document.getElementById("pecas").value;

    let texto = `Olá, sou o ${nome} encontrei vocês no ${encontrou} e gostaria de fazer uma cotação! %0A
    Segue dados do veículo:%0A
    %0A
    Carro: ${veiculo}%0A
    Chassi: ${chassi}%0A
    Peça: ${peca}%0A
    %0A
    Meu telefone para contato ${telefone}`

    let link = `https://api.whatsapp.com/send/?phone=5511976813533&text=${texto}&type=phone_number&app_absent=0`
    window.open(link, '_blank');

    axios.post('https://sheetdb.io/api/v1/0mqrq4p0utwx4',{
        "data": {"Nome": nome, "Telefone": telefone, "Encontrou":encontrou, "Veiculo":veiculo, "Chassi":chassi, "Peça":peca}
    }).then( response => {
        console.log(response.data);
    });

    console.log(link)
}


