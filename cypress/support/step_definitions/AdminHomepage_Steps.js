/// <reference types="cypress" />

import { Then } from "@badeball/cypress-cucumber-preprocessor";
import admin_registerUser_PO from "../page_objects/AdminHomepage_PO";

const admin_page = new admin_registerUser_PO();

Then('I click on the register new user in admin page', () => {
    admin_page.click_navbar_registerUser();
})

Then('I type user info at register new user in admin page', () =>{
    admin_page.type_userInfo();
})

Then('I click to confirm the register new user in admin page', () => {
    admin_page.click_register_user();
})

Then('I should be presented with the user list and find the new user', () => {
    
})