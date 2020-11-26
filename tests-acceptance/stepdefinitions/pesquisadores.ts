const { BeforeAll, After, AfterAll, Status } = require("cucumber");
import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let path = require('path');
//import request = require("request-promise");

async function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

defineSupportCode(function ({ Given, When, Then }) {

  Given(/^Estou na página de ‘Currículo’$/,{timeout: 100 * 1000}, async () => {
    await browser.get("http://localhost:4200/");
    await expect(browser.getTitle()).to.eventually.equal('Gui');
    await $("a[name='pagina-pesquisadores']").click();
  })

  Then(/^‘Paulo Henrique Monteiro Borba’ não está na base de currículos$/, async () => {
    var allpesquisadores: ElementArrayFinder = element.all(by.name('Paulo Henrique Monteiro Borba'));
    await allpesquisadores;
    await allpesquisadores.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
  })

  When(/^Eu crio um novo currículo com os dados de ‘Paulo Henrique Monteiro Borba’ , presentes no arquivo ‘paulo_lattes.xml’$/, async () => {
    let fileDir = path.join(__dirname, '/support_files/paulo_lattes.xml')
    await $("input[name='file']").sendKeys(fileDir);

    // time to upload
    await wait(500);
  });

  When(/^Eu crio um novo currículo com os dados de ‘paulo_lattes.json’$/, async () => {
    let fileDir = path.join(__dirname, '/support_files/paulo_lattes.json')
    await $("input[name='file']").sendKeys(fileDir);

    // time to upload
    await wait(500);
  });

  When(/^Eu seleciono ‘Paulo Henrique Monteiro Borba’$/, async () => {
    await $("div[name='selecionaPaulo Henrique Monteiro Borba']").click();
  });

  When(/^Seleciono a opção de remover o currículo de ‘Paulo Henrique Monteiro Borba’$/, async () => {
    await $("button[name='removerPaulo Henrique Monteiro Borba']").click();
  });

  When(/^Seleciono a opção de atualizar o currículo de ‘Paulo Henrique Monteiro Borba’ com os dados de ‘paulo_lattes2.xml’$/, async () => {
    let fileDir = path.join(__dirname, '/support_files/paulo_lattes2.xml')
    await $("input[name='atualizarPaulo Henrique Monteiro Borba']").sendKeys(fileDir);

    // time to upload
    await wait(500);
  });

  When(/^Seleciono a opção de atualizar o currículo de ‘Paulo Henrique Monteiro Borba’ com os dados de ‘paulo_lattes.json’$/, async () => {
    let fileDir = path.join(__dirname, '/support_files/paulo_lattes.json')
    await $("input[name='atualizarPaulo Henrique Monteiro Borba']").sendKeys(fileDir);

    // time to upload
    await wait(500);
  });

  When(/^Seleciono a opção de continuar com a atualização$/, async () => {
    await $("button[name='atualizarModal']").click();
  });

  Then(/^Recebo uma mensagem indicando o sucesso da criação$/, async () => {
    var el = element(by.id('notificatxt'));
    await el;
    let txt = Promise.resolve(el.getText());
    await txt
    await txt.then(expect(Promise.resolve(el.getText())).to.eventually.equal("Pesquisador adicionado com sucesso"));
  });

  Then(/^Recebo uma mensagem indicando o sucesso da atualização$/, async () => {
    var el = element(by.id('notificatxt'));
    await el;
    let txt = Promise.resolve(el.getText());
    await txt
    await txt.then(expect(Promise.resolve(el.getText())).to.eventually.equal("Pesquisador atualizado com sucesso"));
  });

  Then(/^Recebo uma mensagem indicando que o currículo já está cadastrado e será atualizado$/, async () => {
    var el = element(by.id('notificatxt'));
    await el;
    let txt = Promise.resolve(el.getText());
    await txt
    await txt.then(expect(Promise.resolve(el.getText())).to.eventually.equal("O pesquisador já existe na base de dados"));
  });

  Then(/^Recebo uma mensagem indicando a falha da criação devido a problemas com os dados passados$/, async () => {
    var el = element(by.id('notificatxt'));
    await el;
    let txt = Promise.resolve(el.getText());
    await txt
    await txt.then(expect(Promise.resolve(el.getText())).to.eventually.equal("Erro ao adicionar o pesquisador"));
  });

  Then(/^‘Paulo Henrique Monteiro Borba’ está na base de currículos$/, async () => {
    var allpesquisadores: ElementArrayFinder = element.all(by.name('Paulo Henrique Monteiro Borba'));
    await allpesquisadores;
    await allpesquisadores.then(elems => expect(Promise.resolve(elems.length)).to.eventually.not.equal(0));
  })

  Then(/^Não consigo visualizar os dados de ‘Paulo Henrique Monteiro Borba’ na base de currículos$/, async () => {
    var allpesquisadores: ElementArrayFinder = element.all(by.name('Paulo Henrique Monteiro Borba'));
    await allpesquisadores;
    await allpesquisadores.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
  })

  Then(/^‘Paulo Henrique Monteiro Borba’ está na base de currículos com os dados atualizados$/, async () => {
    var allpesquisadores: ElementArrayFinder = element.all(by.name('publicao9395715443254344'));
    await allpesquisadores;
    await allpesquisadores.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(2));
  })

  Then(/^‘Paulo Henrique Monteiro Borba’ está na base de currículos com 2 artigos$/, async () => {
    var allpesquisadores: ElementArrayFinder = element.all(by.name('publicao9395715443254344'));
    await allpesquisadores;
    await allpesquisadores.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(2));
  })

  Then(/^‘Paulo Henrique Monteiro Borba’ está na base de currículos com 1 artigos$/, async () => {
    var allpesquisadores: ElementArrayFinder = element.all(by.name('publicao9395715443254344'));
    await allpesquisadores;
    await allpesquisadores.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
  })

  Then(/^Recebo uma mensagem indicando o sucesso da remoção$/, async () => {
    var el = element(by.id('notificatxt'));
    await el;
    let txt = Promise.resolve(el.getText());
    await txt
    await txt.then(expect(Promise.resolve(el.getText())).to.eventually.equal("Pesquisador apagado com sucesso"));
  });
//attr.name="remover{{p.nome}}"
})