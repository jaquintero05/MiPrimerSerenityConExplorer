
@tag
Feature: search in bing
I as a user want to be able to do a search in bing

  
  @tag2
  Scenario Outline: Title of your scenario outline
  
    Given Estoy en la pagina de inicio de bing
    When El busca la palabra "<palabra>" 
    Then el verifica la palabra "<palabra>" este en el resultado 

    Examples: 
      | palabra          |
      | futbol           |
      | sophos solution |
      | serenety  		|
