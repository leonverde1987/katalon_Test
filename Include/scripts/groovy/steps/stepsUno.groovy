package steps
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When



class stepsUno{
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Given("I want to write a step with (.*)")
	def I_want_to_write_a_step_with_name(String name) {

		WebUI.openBrowser('')
		WebUI.navigateToUrl('http://demoaut.katalon.com')
	}

	@When("I check for the (\\d+) in step")
	def I_check_for_the_value_in_step(int value) {
		WebUI.click(findTestObject('Object Repository/Page_CURA Healthcare Service/a_Make Appointment'), FailureHandling.STOP_ON_FAILURE)
	}

	@Then("I verify the (.*) in step")
	def I_verify_the_status_in_step(String status) {
		println status
	}

	@Given("Que estoy en demo katalon")
	def I_verify_the_status_in_step(){
		WebUI.openBrowser('')
		WebUI.navigateToUrl('http://demoaut.katalon.com')
	}
	
	
	@When("Presiono make apointment")
		def Presiono_make_apointment(){
			WebUI.click(findTestObject('Object Repository/Page_CURA Healthcare Service/a_Make Appointment'), FailureHandling.STOP_ON_FAILURE)
		}
	
	
	@And("Ingreso datos de login (.*) (.*)")
	def Ingreso_datos_de_login(String user, String Pass){
		WebUI.sendKeys(findTestObject('Object Repository/Page_CURA Healthcare Service/input_Username_username'), user, FailureHandling.STOP_ON_FAILURE)
		WebUI.sendKeys(findTestObject('Object Repository/Page_CURA Healthcare Service/input_Password_password'), Pass, FailureHandling.STOP_ON_FAILURE)
	}
	
	@And("Presiono el botón login")
	def Presiono_el_boton_login(){
		WebUI.click(findTestObject('Object Repository/Page_CURA Healthcare Service/button_Login'), FailureHandling.STOP_ON_FAILURE)
	} 	
	
	@Then("Muestra mensaje error (.*)")
	def Muestra_mensaje_error(String msj){
		WebUI.verifyElementText(findTestObject('Object Repository/Page_CURA Healthcare Service/p_Login failed Please ensure the username and password are valid'), msj, FailureHandling.STOP_ON_FAILURE)
		WebUI.closeBrowser();
	}
	
}