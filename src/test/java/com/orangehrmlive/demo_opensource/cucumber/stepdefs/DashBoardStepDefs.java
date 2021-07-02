package com.orangehrmlive.demo_opensource.cucumber.stepdefs;

import com.orangehrmlive.demo_opensource.pages.DashBoardPage;
import com.orangehrmlive.demo_opensource.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class DashBoardStepDefs {

    @And("^I click on welcome text$")
    public void iClickOnWelcomeText() {
        new DashBoardPage().clickOnWelcomeTextButton();
    }


    @And("^I click on logout button$")
    public void iClickOnLogoutButton() {
        new DashBoardPage().clickOnLogOutButton();


    }

    @Then("^I should see \"([^\"]*)\" text on homepage$")
    public void iShouldSeeTextOnHomepage(String message) {
        Assert.assertEquals(message, new HomePage().verifyLoginPanelTextOnPage());

    }


}
