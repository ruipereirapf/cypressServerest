/// <reference types="cypress" />
import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import Homepage_PO from "../page_objects/Homepage_PO";

const homepage = new Homepage_PO();

Given('I navigate to the ServeRest homepage', () =>{
    homepage.navigate("");
})

When('I click on the register new user button',() => {
    homepage.clickOn_newUser_Button();
})