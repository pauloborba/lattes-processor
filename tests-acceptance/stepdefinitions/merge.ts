import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';


let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({ Given, When, Then}) {

    Given(/^I am at the "Merge groups" screen$/,{timeout: 100 * 1000},async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('Gui');
        await $("a[name='merge']").click();
    })

    Then(/^I can see the groups "([^\"]*)", with members "([^\"]*)" and "([^\"]*)"  and "([^\"]*)", with members "([^\"]*)" and "([^\"]*)"$/,{timeout: 100 * 1000}, async (group1,res1g1,res2g1,group2,res1g2,res2g2) => {
        let allNomes : ElementArrayFinder = element.all(by.name('nomeList'));
        var sameNome = allNomes.filter(elem => elem.getText().then(text => text === group1));
        await sameNome.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });
})