"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I am at the "Merge groups" screen$/, { timeout: 100 * 1000 }, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal('Gui');
        yield protractor_1.$("a[name='merge']").click();
    }));
    Then(/^I can see the groups "([^\"]*)", with members "([^\"]*)" and "([^\"]*)"  and "([^\"]*)", with members "([^\"]*)" and "([^\"]*)"$/, { timeout: 100 * 1000 }, (group1, res1g1, res2g1, group2, res1g2, res2g2) => __awaiter(this, void 0, void 0, function* () {
        let allNomes = protractor_1.element.all(protractor_1.by.name('nomeList'));
        var sameNome = allNomes.filter(elem => elem.getText().then(text => text === group1));
        yield sameNome.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    }));
});
