package com.orangehrmlive.demo_opensource.cucumber.stepdefs;

import com.orangehrmlive.demo_opensource.pages.DashBoardPage;
import com.orangehrmlive.demo_opensource.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginStepDefs {
    @Given("^I am on home Page$")
    public void iAmOnHomePage() {

    }

    @When("^I enter userName \"([^\"]*)\"$")
    public void iEnterUserName(String userName) {
        new LoginPage().enterUserNameOnUserNameField(userName);
    }

    @And("^I enter Password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new LoginPage().enterPasswordOnPasswordField(password);

    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();

    }

    @Then("^I should see welcomeText \"([^\"]*)\"$")
    public void iShouldSeeWelcomeText(String welcomeText) {
        Assert.assertEquals(welcomeText,new DashBoardPage().getWelcomeTextAfterLoginLink());
    }
}
