/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import register_PO from "../page_objects/Register_PO";

const register_Page = new register_PO();

When('I type username', () => {
    register_Page.type_userName();
})

When('I type email', () => {
    register_Page.type_email();
})

When('I type password', () => {
    register_Page.type_password();
})

When('I click on the register as admin button', () => {
    register_Page.click_asAdmin_button();
})

When('I click on the register user button', () => {
    register_Page.click_register_user_button();
})

Then('I should be presented with successful message', () =>{
    register_Page.valid_submission_alert();
})

When('I type specific username {string}', (username) =>{
    register_Page.type_userName(username);
})

When('I type specific email {string}', (email) =>{
    register_Page.type_email(email);
})

When('I type specific password {string}', (password) =>{
    register_Page.type_password(password);
})

// // When('I type username {string}', (username) => {
// //     register_Page.type_userName(username);
// // })

// // When('I type email {string}', (email) => {
// //     register_Page.type_email(email);
// // })

// // When('I type password {string}', (password) => {
// //     register_Page.type_password(password);
// // })

// // Then('I should be presented with {string}', (message) => {
// //     register_Page.invalid_data_alert(message);
// // })