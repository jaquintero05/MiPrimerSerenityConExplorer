$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/BuscarEnBing.feature");
formatter.feature({
  "name": "search in bing",
  "description": "I as a user want to be able to do a search in bing",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "Estoy en la pagina de inicio de bing",
  "keyword": "Given "
});
formatter.step({
  "name": "El busca la palabra \"\u003cpalabra\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "el verifica la palabra \"\u003cpalabra\u003e\" este en el resultado",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "palabra"
      ]
    },
    {
      "cells": [
        "futbol"
      ]
    },
    {
      "cells": [
        "sophos solution"
      ]
    },
    {
      "cells": [
        "serenety"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "Estoy en la pagina de inicio de bing",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "El busca la palabra \"futbol\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "el verifica la palabra \"futbol\" este en el resultado",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "Estoy en la pagina de inicio de bing",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "El busca la palabra \"sophos solution\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "el verifica la palabra \"sophos solution\" este en el resultado",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "Estoy en la pagina de inicio de bing",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "El busca la palabra \"serenety\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "el verifica la palabra \"serenety\" este en el resultado",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});