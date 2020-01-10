$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/TestingIT/git/katalon_Test/Include/features/testDos.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
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
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Que estoy en demo katalon",
  "keyword": "Given "
});
formatter.step({
  "name": "Presiono make apointment",
  "keyword": "When "
});
formatter.step({
  "name": "Ingreso datos de login \u003cname\u003e \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Presiono el botón login",
  "keyword": "And "
});
formatter.step({
  "name": "Muestra mensaje error \u003cmsj\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "password",
        "msj"
      ]
    },
    {
      "cells": [
        "name1",
        "5",
        "Login failed! Please ensure the username and password are valid."
      ]
    },
    {
      "cells": [
        "name2",
        "7",
        "Login failed! Please ensure the username and password are valid."
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
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Que estoy en demo katalon",
  "keyword": "Given "
});
formatter.match({
  "location": "stepsUno.I_verify_the_status_in_step()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Presiono make apointment",
  "keyword": "When "
});
formatter.match({
  "location": "stepsUno.Presiono_make_apointment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingreso datos de login name1 5",
  "keyword": "And "
});
formatter.match({
  "location": "stepsUno.Ingreso_datos_de_login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Presiono el botón login",
  "keyword": "And "
});
formatter.match({
  "location": "stepsUno.Presiono_el_boton_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Muestra mensaje error Login failed! Please ensure the username and password are valid.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepsUno.Muestra_mensaje_error(String)"
});
formatter.result({
  "status": "passed"
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
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Que estoy en demo katalon",
  "keyword": "Given "
});
formatter.match({
  "location": "stepsUno.I_verify_the_status_in_step()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Presiono make apointment",
  "keyword": "When "
});
formatter.match({
  "location": "stepsUno.Presiono_make_apointment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingreso datos de login name2 7",
  "keyword": "And "
});
formatter.match({
  "location": "stepsUno.Ingreso_datos_de_login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Presiono el botón login",
  "keyword": "And "
});
formatter.match({
  "location": "stepsUno.Presiono_el_boton_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Muestra mensaje error Login failed! Please ensure the username and password are valid.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepsUno.Muestra_mensaje_error(String)"
});
formatter.result({
  "status": "passed"
});
});