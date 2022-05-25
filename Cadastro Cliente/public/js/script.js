class Funcionario {
    calcSalary() { //Na Hóra de Selecionar o cargo atráves do input ele desaparece com o cargo, não sei qual pode ser o problema!!
        var salario;
        var cargo = document.getElementById('txCargo').value;
        if (document.getElementById('txSalario').value == '') {
            if (cargo == 1) {
                salario = parseFloat(21000.00);
            }
            else if (cargo == 2) {
                salario = parseFloat(11000.00);
            }
            else if (cargo == 3) {
                salario = parseFloat(9500.00);
            }
            else if (cargo == 4) {
                salario = parseFloat(10500.00);
            }
        }
        else {
            salario = parseFloat(document.getElementById('txSalario').value);
        }
        if (cargo == 1 && document.getElementById('txSalario').value != '') {
            salario *= 1.1;
        }
        if (cargo == 2 && document.getElementById('txSalario').value != '') {
            salario *= 1.05;
        }
        document.getElementById('txTsalario').value = salario.toFixed(2);



    }

    toRecord() {
        var nome = document.getElementById('txNome').value;
        if (nome.indexOf(' ') == -1 || nome.substr(-1) == ' ') {
            alert("O campo deve ter no mínimo o nome, segundo nome e/ou sobrenome");
        }

        var data = document.getElementById("txData").value;
        var data = Date.parse(data);

        if (validateAge(data) < 18) {
            alert("O funcionário deve ser maior de idade para o cadastro!");
        }
    }
    validateAge(data) { // Não consigo validar no html!! Somente se for sem orientação a objeto.

        var hoje = new Date();
        var nascimento = new Date(data);
        var ano = nascimento.getFullYear();
        var mes = nascimento.getMonth();
        var dia = nascimento.getDate();
        var difano = hoje.getFullYear() - ano;
        var difmes = hoje.getMonth() - mes;
        var difdia = hoje.getDate() - dia;

        if (difmes <= 0) {
            if (difdia <= 0) {
                difano--;
            }
        }

        console.log(difano);
        return difano;
    }
}
var funcionario = new Funcionario();
var age = new validateAge(data);
var salary = new calcSalary();