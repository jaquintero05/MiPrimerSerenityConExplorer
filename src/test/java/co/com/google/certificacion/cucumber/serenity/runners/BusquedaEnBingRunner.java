package co.com.google.certificacion.cucumber.serenity.runners;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import net.serenitybdd.cucumber.CucumberWithSerenity;;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(features = "src/test/resources/features", 
		glue = {"co.com.google.certificacion.cucumber.serenity.stepsdefinition" }, 
		snippets = SnippetType.CAMELCASE
		)



public class BusquedaEnBingRunner {

}
