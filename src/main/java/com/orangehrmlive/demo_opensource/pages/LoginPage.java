package com.orangehrmlive.demo_opensource.pages;

import com.orangehrmlive.demo_opensource.utility.Utility;
import cucumber.api.java.Before;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;





public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

 By userName = By.xpath("//input[@id='txtUsername']");
 By passwordField = By.xpath("//input[@id='txtPassword']");
 By loginButton = By.xpath("//input[@id='btnLogin']");

 public void enterUserNameOnUserNameField(String name){
     log.info("enter user name :" + userName.toString());
     sendTextToElement(userName,name);
 }
public void enterPasswordOnPasswordField(String password){
    log.info("enter password to password field :" + passwordField.toString());
     sendTextToElement(passwordField,password);

}
public void clickOnLoginButton(){
    log.info("click on login button :" + loginButton.toString());
     clickOnElement(loginButton);
}

}
