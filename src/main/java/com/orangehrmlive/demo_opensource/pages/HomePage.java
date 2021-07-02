package com.orangehrmlive.demo_opensource.pages;

import com.orangehrmlive.demo_opensource.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    By verifyText = By.xpath("//div[@id='logInPanelHeading']");

    public String verifyLoginPanelTextOnPage(){
        return getTextFromElement(verifyText);
    }
}
