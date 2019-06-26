

function validaCampos(){
    //Insere os valores das senhas em variáveis
    var senha = document.getElementById('senha').value;
    var senha2 = document.getElementById('senha2').value;

    //Verifica se os campos estão vazios, impossibilitando envio.
    //Os dois campos de senha também estão como "required" no html.
    if(document.getElementById('senha').value == '' || document.getElementById('nome').value == '' ||
        document.getElementById('sobrenome').value == '' || document.getElementById('email').value == ''
    ){
        //Se um dos campos acima estiver vazio a mensagem é exibida, e o envio do formulário impedido com o false
        alert('Todos os campos devem ser preenchidos');
        return false;
    }else{

        //Se as senhas forem diferentes o envio de formulário é impedido
        if(senha != senha2){
            alert('As senhas devem combinar!'); 
            return false;
        }else{
        //Se as senhas forem iguais o envio acontece normalmente.
            return true;
        }
    }

}