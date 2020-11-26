Feature:
Cadastro e manutenção de currículos


Scenario: Cadastro de currículo - falha
Given Estou na página de ‘Currículo’
And ‘Paulo Henrique Monteiro Borba’ não está na base de currículos
When Eu crio um novo currículo com os dados de ‘paulo_lattes.json’
Then Recebo uma mensagem indicando a falha da criação devido a problemas com os dados passados
And Estou na página de ‘Currículo’
And Não consigo visualizar os dados de ‘Paulo Henrique Monteiro Borba’ na base de currículos

Scenario: Cadastro de currículo - sucesso
Given Estou na página de ‘Currículo’
And ‘Paulo Henrique Monteiro Borba’ não está na base de currículos
When Eu crio um novo currículo com os dados de ‘Paulo Henrique Monteiro Borba’ , presentes no arquivo ‘paulo_lattes.xml’
Then Recebo uma mensagem indicando o sucesso da criação
And Estou na página de ‘Currículo’
And ‘Paulo Henrique Monteiro Borba’ está na base de currículos

Scenario: Atualização de currículo - sucesso
Given Estou na página de ‘Currículo’
And ‘Paulo Henrique Monteiro Borba’ está na base de currículos
When Eu seleciono ‘Paulo Henrique Monteiro Borba’
And Seleciono a opção de atualizar o currículo de ‘Paulo Henrique Monteiro Borba’ com os dados de ‘paulo_lattes2.xml’
Then Recebo uma mensagem indicando o sucesso da atualização
And Estou na página de ‘Currículo’
And ‘Paulo Henrique Monteiro Borba’ está na base de currículos com os dados atualizados

Scenario: Atualização de currículo - falha
Given Estou na página de ‘Currículo’
And ‘Paulo Henrique Monteiro Borba’ está na base de currículos
When Eu seleciono ‘Paulo Henrique Monteiro Borba’
And Seleciono a opção de atualizar o currículo de ‘Paulo Henrique Monteiro Borba’ com os dados de ‘paulo_lattes.json’
Then Recebo uma mensagem indicando a falha da criação devido a problemas com os dados passados
And Estou na página de ‘Currículo’
And ‘Paulo Henrique Monteiro Borba’ está na base de currículos

Scenario: Atualização de currículo por adição de currículo existente - sucesso
Given Estou na página de ‘Currículo’
And ‘Paulo Henrique Monteiro Borba’ está na base de currículos com 2 artigos
When Eu crio um novo currículo com os dados de ‘Paulo Henrique Monteiro Borba’ , presentes no arquivo ‘paulo_lattes.xml’
Then Recebo uma mensagem indicando que o currículo já está cadastrado e será atualizado
When Seleciono a opção de continuar com a atualização
Then Recebo uma mensagem indicando o sucesso da atualização
And Estou na página de ‘Currículo’
And ‘Paulo Henrique Monteiro Borba’ está na base de currículos com 1 artigos

Scenario: Remoção de currículo - sucesso
Given Estou na página de ‘Currículo’
And ‘Paulo Henrique Monteiro Borba’ está na base de currículos
When Eu seleciono ‘Paulo Henrique Monteiro Borba’
And Seleciono a opção de remover o currículo de ‘Paulo Henrique Monteiro Borba’
Then Recebo uma mensagem indicando o sucesso da remoção
And Estou na página de ‘Currículo’
And ‘Paulo Henrique Monteiro Borba’ não está na base de currículos
