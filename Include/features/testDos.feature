#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: Title of your feature
  I want to use this template for my feature file

  @tag1
  Scenario Outline: Title of your scenario outline
    Given Que estoy en demo katalon
    When Presiono make apointment
    And Ingreso datos de login <name> <password>
    And Presiono el botón login
    Then Muestra mensaje error <msj>

    Examples: 
      | name  | password |	msj	|
      | name1 |        5 |Login failed! Please ensure the username and password are valid.|
      | name2 |        7 |Login failed! Please ensure the username and password are valid.|
