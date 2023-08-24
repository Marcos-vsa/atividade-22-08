const alunoLista = document.getElementById('lista-alunos');
const botaoCadastrar = document.getElementById('botao-cadastrar');
const nomeAlunoInput = document.getElementById('nome-aluno');

function cadastrarAluno(){
    const nome = nomeAlunoInput.value;
    if(nome){
        const alunoItem = document.createElement('li');
        alunoItem.innerHTML = `${nome}<button class="delete-button">Excluir</button>`;
        alunoLista.appendChild(alunoItem);
        nomeAlunoInput.value = ' ';
        const deleteButton = alunoItem.querySelector('.delete-button');
        deleteButton.addEventListener("click", () => {
            alunoLista.removeChild(alunoItem);
        })
    }
}

botaoCadastrar.addEventListener("click",cadastrarAluno);