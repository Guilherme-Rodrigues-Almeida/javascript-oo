import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Ricardo", 5000, 12378945601);
gerente.cadastrarSenha("123")

const cliente = new Cliente("Lais", 78945612379, 456);

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);