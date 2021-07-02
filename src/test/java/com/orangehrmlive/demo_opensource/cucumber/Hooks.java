package com.orangehrmlive.demo_opensource.cucumber;

import com.cucumber.listener.Reporter;
import com.orangehrmlive.demo_opensource.basepage.BasePage;
import com.orangehrmlive.demo_opensource.propertyreader.PropertyReader;
import com.orangehrmlive.demo_opensource.utility.Utility;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;

public class Hooks extends BasePage {


    @Before
    public void openBrowser() {
        selectBrowser(PropertyReader.getInstance().getProperty("browser"));
        Reporter.assignAuthor("JP", "Jyoti Prajapati");
    }

    @After
    public void tearDown(Scenario scenario) {
        if (scenario.isFailed()) {
            String screenShotPath = Utility.getScreenshot(driver, scenario.getName().replace("", "_"));
            try {
                Reporter.addScreenCaptureFromPath(screenShotPath);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        closeBrowser();
    }


}
