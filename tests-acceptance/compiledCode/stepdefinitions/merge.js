"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    // Given(/^I am at the "Merge groups" screen$/, async () => {
    //   await browser.get("http://localhost:4200/");
    // await expect(browser.getTitle()).to.eventually.equal('Gui');
    //await $("a[name='merge']").click();
    //})
    /*
        Given(/^I cannot see a student with CPF "(\d*)" in the students list$/, async (cpf) => {
            var allcpfs : ElementArrayFinder = element.all(by.name('cpflist'));
            var samecpfs = allcpfs.filter(elem =>
                                          elem.getText().then(text => text === cpf));
            await samecpfs.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
        });
    
        When(/^I try to register the student "([^\"]*)" with CPF "(\d*)"$/, async (name, cpf) => {
            await $("input[name='namebox']").sendKeys(<string> name);
            await $("input[name='cpfbox']").sendKeys(<string> cpf);
            await element(by.buttonText('Adicionar')).click();
        });
    
        Then(/^I can see "([^\"]*)" with CPF "(\d*)" in the students list$/, async (name, cpf) => {
            var allalunos : ElementArrayFinder = element.all(by.name('alunolist'));
            await allalunos.filter(elem => pAND(sameCPF(elem,cpf),sameName(elem,name))).then
                       (elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
        });
    */
});
