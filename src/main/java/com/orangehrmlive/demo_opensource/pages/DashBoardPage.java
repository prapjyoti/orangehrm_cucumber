package com.orangehrmlive.demo_opensource.pages;

import com.orangehrmlive.demo_opensource.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;

public class DashBoardPage extends Utility {

    private static final Logger log = LogManager.getLogger(DashBoardPage.class.getName());

    By welcomeText = By.xpath("//a[@id='welcome']");
    By logOut = By.linkText("Logout");

    public String getWelcomeTextAfterLoginLink() {
        log.info("Get Welcome Text After Login : " + welcomeText.toString());
        return getTextFromElement(welcomeText);
    }

    public void clickOnWelcomeTextButton() {
        log.info("Click on Welcome Text : " + welcomeText.toString());
        clickOnElement(welcomeText);

    }
    public void clickOnLogOutButton(){
        log.info("Click Log Out Button : " + logOut.toString());
        clickOnElement(logOut);
    }
}