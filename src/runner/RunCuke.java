package runner;
import java.io.File;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.ExtentCucumberFormatter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import gherkin.formatter.Reporter;


@RunWith(Cucumber.class)
@CucumberOptions(
		features={"src/features"},
		glue={"steps"},
		monochrome=true,tags={"@smoke"},
		plugin={"pretty","html:target/cucumber","json:target/cucumber.json","com.cucumber.listener.ExtentCucumberFormatter"})

public class RunCuke {
	@BeforeClass
	public static void setup()
	{
		ExtentCucumberFormatter.initiateExtentCucumberFormatter();
		ExtentCucumberFormatter.loadConfig(new File("E:/Cucumber_workspace/Cucumber_FM/extent-config.xml"));
		ExtentCucumberFormatter.addSystemInfo("browsername","firefox");
		ExtentCucumberFormatter.addSystemInfo("browser version","v31.0");
		ExtentCucumberFormatter.addSystemInfo("selenium version","v2.53.0");
		
	}
	
	
}
