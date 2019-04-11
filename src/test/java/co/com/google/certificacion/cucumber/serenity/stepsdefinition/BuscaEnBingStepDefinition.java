package co.com.google.certificacion.cucumber.serenity.stepsdefinition;

import co.com.google.certificacion.cucumber.serenity.steps.UsuarioFinalSteps;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.thucydides.core.annotations.Steps;

public class BuscaEnBingStepDefinition {
	
	@Steps
	UsuarioFinalSteps juan;
	@Given("^Estoy en la pagina de inicio de bing$")
	public void estoyEnLaPaginaDeInicioDeBing() throws Exception {
	    // Write code here that turns the phrase above into concrete actions
		juan.is_the_home_page();
	    
	}

	@When("^El busca la palabra \"([^\"]*)\"$")
	public void elBuscaLaPalabra(String arg1) throws Exception {
	    // Write code here that turns the phrase above into concrete actions
	    juan.looks_for(arg1);
	    
	}

	@Then("^el verifica la palabra \"([^\"]*)\" este en el resultado$")
	public void elVerificaLaPalabraEsteEnElResultado(String arg1) throws Exception {
	    // Write code here that turns the phrase above into concrete actions
		

	}


}
