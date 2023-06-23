
use('showbank');

db.createCollection("produtos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required:["ID", "Descrição", "Embalagem", "Quantidade", "Preço"],
            properties: {
                ID: {bsonType: "int"},
                Descrição: {bsonType: "string"},
                Embalagem: {bsonType: "string"},
                Quantidade: {bsonType: "int"},
                Preço:{bsonType: "double"}
            }
        }
    }
});

db.createCollection("clientes", {
    validator:{
        $jsonSchema:{
            bsonType: "object",
            required:[ "nome", "cpf", "status_civil", "data_nascimento", "endereco"],
            properties:{
                nome:{
                    bsonType: "string",
                    description: "informe corretamente o nome do cliente"
                },
                cpf:{
                    bsonType: "string",
                    description: "informe corretamente o cpf do cliente"
                },
                status_civil:{
                    bsonType: "string",
                    enum:["Solteiro(a)", "Casado(a)", "Separado(a)", "Divorciado(a)", "Viúvo(a)"],
                    description: "informe corretamente o status civil do cliente"
                },
                data_nascimento:{
                    bsonType: "string",
                    description: "informe corretamente a data de nascimento do cliente"
                },
                endereco:{
                    bsonType: "string",
                    description: "informe corretamente o endereço do cliente"
                }
            }
        }
    }
});

db.createCollection("contas", {
    validator:{
        $jsonSchema: {
            bsonType:"object",
            required:["Numero_da_Conta", "Tipo", "CPF"],
            properties:{
                Numero_Conta:{
                    bsonType: "string",
                    description: "informe corretamente o numero da conta"
                },
                Tipo:{
                    bsonType: "string",
                    enum:["Conta corrente", "Conta poupança", "Conta salário"],
                    description: "informe corretamente o tipo da conta"
                },
                CPF:{
                    bsonType: "string",
                    description: "informe corretamente o cpf do cliente na conta"
                }
            }
        }
    }

});