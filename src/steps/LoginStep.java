package steps;
import java.util.List;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStep
{
	@Given("^User navigates to facebook site$")
	public void user_navigates_to_facebook_site() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("^user validates the homepage title$")
	public void user_validates_the_homepage_title() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Then("^User enters the \"([^\"]*)\"  username$")
	public void user_enters_the_username(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println(arg1);
	}

	@Then("^User enters the \"([^\"]*)\" password$")
	public void user_enters_the_password(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println(arg1);
	}

	@Then("^User \"([^\"]*)\" successfull login$")
	public void user_successfull_login(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println(arg1);
	}

	@Then("^User enters \"([^\"]*)\" username$")
	public void user_enters_username(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println(arg1);
	}

	@Then("^User enters \"([^\"]*)\" password$")
	public void user_enters_password(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println(arg1);
	}

	
	@Then("^User Enters the age$")
	public void user_Enters_the_age(List <Integer> ls) throws Throwable {
	   System.out.println(ls.get(1));
	 
	}


	
}