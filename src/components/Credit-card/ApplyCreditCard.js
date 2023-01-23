import React, { useState, useEffect } from 'react'
import Header from './Header'
import "../../Styles/Apply-Card.css"
import { UilPadlock, UilAngleRight } from '@iconscout/react-unicons';
import { Button } from '../../Styled/Button.styled';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

const ApplyCreditCard = () => {

  const navigate = useNavigate();
  
  const validate = (values) => {
    const errors = {};
    // const regex = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);


    if (!values.firstName) {
      errors.firstName = "First Name is Required!"
    }

    if (!values.lastName) {
      errors.lastName = "Last Name is Required!"
    }

    if (!values.email) {
      errors.email = " Email is Required!"
    } else if(!values.email < 7) {
      errors.email = "Email should be at least 8 characters"
    } else if (!values.email.regex.test) {
      errors.email = "Email not valid"
    }

    return errors;
  }

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false)

  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      formValues
    }
  }, [formErrors, isSubmit, formValues])

  

  const url = "http://localhost:3000/posts";

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    SSN: '',
    phone: '',
    consent: '',
    confirmPassword: '',
    birthDay: '',
    birthMonth: "",
    birthYear: "",
    checked: false,
    
  };

  const [formValues, setFormValues] = useState(initialValues);





  const handleChange = (e) => {
    const {name, value,checked} = e.target;
    setFormValues({...formValues, [name]: value, checked})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true)
    Axios.post(url, {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      SSN: formValues.SSN,
      phone: formValues.phone,
      consent: formValues.consent,
      password: formValues.password,
      confirmPassword: formValues.confirmPassword,
      birthDay: formValues.birthDay,
      birthMonth: formValues.birthMonth,
      birthYear: formValues.birthYear,
      checked: formValues.checked,
      setIsSubmit: formValues.isSubmit
      
    }).then(res => {
      console.log(res.data)
    })

 
    navigate('/credit-card/success')
    
  };


  return (
    <div className='apply-credit-card'>
      <Header />
      <div className='container_inner'>
        <div>
          <section className='intro'>
            <h1 className="intro__headline headline--effra">Welcome! Let's get started to see if you qualify for an AvantCard.</h1>
            <span className="intro__subhead">Checking to see if you qualify for an AvantCard <strong>does not affect your credit score</strong>.</span>
          </section>
          {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
          <article className='col__wide-left'>
            <form onSubmit={handleSubmit} action='' className='app-form form-counter ng-pristine ng-invalid ng-invalid-custom ng-valid-maxlength ng-valid-email' form-autofill-fix method='POST' name='form' noValidate>
              <div class="headline--medium-bold">Please tell us a little about yourself.</div>
              <br/>
              <fieldset ng-hide="requirements['person.first_name']['hide'] &amp;&amp; requirements['person.last_name']['hide']">
                <div>
                  <div class="form__row">
                    <div class="form__group">
                    {/* <!-- Label --> */}
                      <label class="form__label label label--large" for="firstName">
                      First Name
                      </label>
                    {/* <!-- Input --> */}
                      <input class="form__input ng-pristine ng-untouched ng-invalid ng-invalid-custom ng-empty" custom-validation="" id="person_first_name" value={formValues.firstName} name="firstName" onChange={handleChange} ng-blur="update($event)" ng-model="person.first_name" type="text" ui-keypress="{ 13: inputPressEnter($event, person, first_name) }"/>
                    {/* <!-- Errors --> */}
                    <small class="form__error ng-hide" ng-show="form.person_first_name.$dirty &amp;&amp; form.person_first_name.$error.custom" qa-validation="person_first_name_client_error">
                    What is your first name?
                    </small>
                    <small className='errors'>{formErrors.firstName}</small>
                    {/* <!-- ngRepeat: server_error in person.first_name_server_errors -->
                    <!-- Caption --> */}
                    <small class="form__blurb">

                    </small>
                  </div>

                  <div class="form__group" ng-hide="requirements['person.last_name']['hide']">
                    {/* <!-- Label --> */}
                    <label class="form__label label label--large" for="person_last_name">
                    Last Name
                    </label>
                    {/* <!-- Input --> */}
                    <input class="form__input ng-pristine ng-untouched ng-invalid ng-invalid-custom ng-empty"  custom-validation="" id="person_last_name" name="lastName" value={formValues.lastName} onChange={handleChange} ng-blur="update($event)" ng-model="person.last_name" type="text" ui-keypress="{ 13: inputPressEnter($event, person, last_name) }" />
                    {/* <!-- Errors --> */}
                    <small class="form__error ng-hide" ng-show="form.person_last_name.$dirty &amp;&amp; form.person_last_name.$error.custom" qa-validation="person_last_name_client_error">
                    What is your last name?
                    </small>
                    {/* <!-- ngRepeat: server_error in person.last_name_server_errors -->
                    <!-- Caption --> */}
                    <small class="form__blurb">

                    </small>
                  </div>

                </div>

                </div>
              </fieldset>
              <fieldset ng-hide="requirements['person.date_of_birth_month']['hide'] &amp;&amp; requirements['person.date_of_birth_day']['hide'] &amp;&amp; requirements['person.date_of_birth_year']['hide']">
                <div>
                  <label class="form__label label label--large">
                  Date of Birth
                  </label>
                  <div class="form__row">
                  <div class="form__group">
                  {/* **-- Label --**
                  !-- Input -- */}
                  <select name="birthMonth" value={formValues.birthMonth} onChange={handleChange} id="person_date_of_birth_month" class="form__select ng-pristine ng-untouched ng-invalid ng-invalid-custom ng-empty" ng-model="person.date_of_birth_month" custom-validation="" ng-blur="update($event)" ng-change="update('person.date_of_birth_month')"><option value="? object:null ?" selected="selected"></option><option value="null">Select Month</option>
                  <option value="Jan">Jan</option>
                  <option value="Feb">Feb</option>
                  <option value="Mar">Mar</option>
                  <option value="Apr">Apr</option>
                  <option value="May">May</option>
                  <option value="Jun">Jun</option>
                  <option value="Jul">Jul</option>
                  <option value="Aug">Aug</option>
                  <option value="Sep">Sep</option>
                  <option value="Oct">Oct</option>
                  <option value="Nov">Nov</option>
                  <option value="Dec">Dec</option></select>
                  {/* <!-- Errors --> */}
                  <small class="form__error ng-hide" ng-show="form.person_date_of_birth_month.$dirty &amp;&amp; form.person_date_of_birth_month.$error.custom" qa-validation="person_date_of_birth_month">
                  Please select a month
                  </small>
                  {/* <!-- ngRepeat: error in person.date_of_birth_month_server_errors --> */}
                  </div>

                  <div class="form__group">
                  {/* <!-- Label -->
                  <!-- Input --> */}
                  <select name="birthDay" value={formValues.birthDay} onChange={handleChange} id="person_date_of_birth_day" class="form__select ng-pristine ng-untouched ng-invalid ng-invalid-custom ng-empty" ng-model="person.date_of_birth_day" custom-validation="" ng-blur="update($event)" ng-change="update('person.date_of_birth_day')"><option value="? object:null ?" selected="selected"></option><option value="null">Select Day</option>
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                  <option value="4">04</option>
                  <option value="5">05</option>
                  <option value="6">06</option>
                  <option value="7">07</option>
                  <option value="8">08</option>
                  <option value="9">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option></select>
                  {/* <!-- Errors --> */}
                  <small class="form__error ng-hide" ng-show="form.person_date_of_birth_day.$dirty &amp;&amp; form.person_date_of_birth_day.$error.custom" qa-validation="person_date_of_birth_day">
                  Please select a day
                  </small>
                  {/* <!-- ngRepeat: error in person.date_of_birth_day_server_errors --> */}
                  </div>

                  <div class="form__group">
                  {/* <!-- Label -->
                  <!-- Input --> */}
                  <select name="birthYear" value={formValues.birthYear} onChange={handleChange} id="person_date_of_birth_year" class="form__select ng-pristine ng-untouched ng-invalid ng-invalid-custom ng-empty" ng-model="person.date_of_birth_year" custom-validation="" ng-blur="update($event)" ng-change="update('person.date_of_birth_year')" ng-trim="false"><option value="? object:null ?" selected="selected"></option><option value="null">Select Year</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                  <option value="1992">1992</option>
                  <option value="1991">1991</option>
                  <option value="1990">1990</option>
                  <option value="1989">1989</option>
                  <option value="1988">1988</option>
                  <option value="1987">1987</option>
                  <option value="1986">1986</option>
                  <option value="1985">1985</option>
                  <option value="1984">1984</option>
                  <option value="1983">1983</option>
                  <option value="1982">1982</option>
                  <option value="1981">1981</option>
                  <option value="1980">1980</option>
                  <option value="1979">1979</option>
                  <option value="1978">1978</option>
                  <option value="1977">1977</option>
                  <option value="1976">1976</option>
                  <option value="1975">1975</option>
                  <option value="1974">1974</option>
                  <option value="1973">1973</option>
                  <option value="1972">1972</option>
                  <option value="1971">1971</option>
                  <option value="1970">1970</option>
                  <option value="1969">1969</option>
                  <option value="1968">1968</option>
                  <option value="1967">1967</option>
                  <option value="1966">1966</option>
                  <option value="1965">1965</option>
                  <option value="1964">1964</option>
                  <option value="1963">1963</option>
                  <option value="1962">1962</option>
                  <option value="1961">1961</option>
                  <option value="1960">1960</option>
                  <option value="1959">1959</option>
                  <option value="1958">1958</option>
                  <option value="1957">1957</option>
                  <option value="1956">1956</option>
                  <option value="1955">1955</option>
                  <option value="1954">1954</option>
                  <option value="1953">1953</option>
                  <option value="1952">1952</option>
                  <option value="1951">1951</option>
                  <option value="1950">1950</option>
                  <option value="1949">1949</option>
                  <option value="1948">1948</option>
                  <option value="1947">1947</option>
                  <option value="1946">1946</option>
                  <option value="1945">1945</option>
                  <option value="1944">1944</option>
                  <option value="1943">1943</option>
                  <option value="1942">1942</option>
                  <option value="1941">1941</option>
                  <option value="1940">1940</option>
                  <option value="1939">1939</option>
                  <option value="1938">1938</option>
                  <option value="1937">1937</option>
                  <option value="1936">1936</option>
                  <option value="1935">1935</option>
                  <option value="1934">1934</option>
                  <option value="1933">1933</option>
                  <option value="1932">1932</option>
                  <option value="1931">1931</option>
                  <option value="1930">1930</option>
                  <option value="1929">1929</option>
                  <option value="1928">1928</option>
                  <option value="1927">1927</option>
                  <option value="1926">1926</option>
                  <option value="1925">1925</option>
                  <option value="1924">1924</option>
                  <option value="1923">1923</option></select>
                  {/* <!-- Errors --> */}
                  <small class="form__error ng-hide" ng-show="form.person_date_of_birth_year.$dirty &amp;&amp; form.person_date_of_birth_year.$error.custom" qa-validation="person_date_of_birth_year">
                  Please select a year
                  </small>
                  {/* <!-- ngRepeat: error in person.date_of_birth_year_server_errors --> */}
                  </div>

                  </div>

                </div>
              </fieldset>
              <fieldset ng-hide="requirements['person.ssn']['hide']">
                <div>
                <div class="form__row">
                <div class="form__group">
                <label class="form__label label label--large" for="ssn">
                Social Security Number
                </label>
                <input autocomplete="off" class="form__input form__input--secure ng-pristine ng-untouched ng-invalid ng-invalid-custom ng-empty ng-valid-maxlength" custom-validation="" id="person_ssn" maxlength="9" name="SSN" value={formValues.SSN} onChange={handleChange}  ng-blur="update($event)" ng-change="updateSSN('person_ssn')" ng-disabled="disableSSN" ng-model="person.ssn" placeholder="***-**-****" qa="person_ssn" regex-restrict="[^0-9]" title="" type="password" ui-keypress="{13: &quot;inputPressEnter($event, 'person', 'ssn')&quot;}"/>
                <div class="ng-binding"></div>
                <small class="form__error ng-hide" ng-show="form.person_ssn.$dirty &amp;&amp; form.person_ssn.$error.custom" qa-validation="spouse_ssn">
                What is your 9-digit social security number?
                </small>
                {/* <!-- ngRepeat: error in person.ssn_server_errors --> */}
                </div>

                </div>
                <small class="form__blurb">
                We use 128-bit SSL protection and strict, high levels of security &amp; encryption standards to keep your information safe.
                <button onClick="" popover="We use your social security number to help verify your information to issue credit. We also encrypt this information to keep you safe">
                More Information
                </button>
                </small>
                <br></br>


                </div>
              </fieldset>
              <br />
              <fieldset ng-hide="requirements['person.home_phone']['hide']">
                <div>
                <div class="form__row">
                <div class="form__group" ng-hide="requirements['person.home_phone']['hide']">
                {/* <!-- Label --> */}
                <label class="form__label label label--large" for="person_home_phone">
                Phone
                </label>
                {/* <!-- Input --> */}
                <input class="form__input ng-pristine ng-untouched ng-invalid ng-invalid-custom ng-empty" custom-validation="" id="person_home_phone" name="phone" value={formValues.phone} onChange={handleChange} ng-blur="update($event)" ng-model="person.home_phone" type="tel" ui-keypress="{ 13: inputPressEnter($event, person, home_phone) }"/>
                {/* <!-- Errors --> */}
                <small class="form__error ng-hide" ng-show="form.person_home_phone.$dirty &amp;&amp; form.person_home_phone.$error.custom" qa-validation="person_home_phone_client_error">
                Please fill in your phone number
                </small>
                {/* <!-- ngRepeat: server_error in person.home_phone_server_errors --> */}
                {/* <!-- Caption --> */}
                <small class="form__blurb">
                We use your phone number to help confirm your identity.
                </small>
                </div>

                </div>

                </div>
              </fieldset>

              <div class="headline--medium-bold">
                Create a login to save your progress and access your account.
              </div>
              
              <br />

              <fieldset ng-hide="requirements['customer.electronic_communications_consent']['hide'] &amp;&amp; requirements['customer.email']['hide']">
                <div>
                <div class="form__row">
                <div class="form__group" ng-hide="requirements['customer.email']['hide']">
                {/* <!-- Label --> */}
                <label class="form__label label label--large" for="email">
                Email
                </label>
                {/* <!-- Input --> */}
                <input class="form__input ng-pristine ng-untouched ng-invalid ng-invalid-custom ng-empty ng-valid-email" custom-validation="" id="customer_email" name="email" value={formValues.email} onChange={handleChange} ng-blur="update($event)" ng-model="customer.email" type="email" ui-keypress="{ 13: inputPressEnter($event, customer, email) }"/>
                {/* <!-- Errors --> */}
                <small class="form__error ng-hide" ng-show="form.customer_email.$dirty &amp;&amp; form.customer_email.$error.custom" qa-validation="customer_email_client_error">
                Please enter a valid email
                </small>
                <small className='errors'>{formErrors.email}</small>
                {/* <!-- ngRepeat: server_error in customer.email_server_errors -->
                <!-- Caption --> */}
                <small class="form__blurb">

                </small>
                </div>

                </div>

                </div>
              </fieldset>
              <fieldset ng-hide="requirements['customer.password']['hide'] &amp;&amp; requirements['customer.password_confirmation']['hide']">
                <div class="form__stack">
                <div class="form__row">
                {/* <!-- ngIf: !(requirements['customer.password']['hide']) --> */}
                <div class="form__group" ng-if="!(requirements['customer.password']['hide'])">
                {/* <!-- Label --> */}
                <label class="form__label label label--large" for="password">
                Create Password
                </label>
                {/* <!-- Input --> */}
                <input class="form__input ng-pristine ng-untouched ng-invalid ng-invalid-custom ng-empty" custom-validation="" name="password" value={formValues.password} onChange={handleChange} ng-model="customer.password" type="password" />
                {/* <!-- Errors --> */}
                <small class="form__error ng-binding ng-hide" ng-show="form.customer_password.$dirty &amp;&amp; form.customer_password.$error.custom" qa-validation="customer_password">
                Password must be at least 8 characters
                </small>
                {/* <!-- ngRepeat: server_error in customer.password_server_errors -->
                <!-- Caption --> */}
                <small class="form__blurb ng-binding">
                Password must be at least 8 characters, unique to you, and difficult for others to guess.
                </small>
                </div>
                {/* <!-- end ngIf: !(requirements['customer.password']['hide']) --> */}

                </div>
                <div class="form__row">
                {/* <!-- ngIf: !(requirements['customer.password']['hide'] && requirements['customer.password_confirmation']['hide']) --> */}
                <div class="form__group" ng-if="!(requirements['customer.password']['hide'] &amp;&amp; requirements['customer.password_confirmation']['hide'])">
                {/* <!-- Label --> */}
                <label class="form__label label label--large" for="password">
                Password Confirmation
                </label>
                {/* <!-- Input --> */}
                <input class="form__input ng-pristine ng-untouched ng-valid ng-valid-custom ng-empty" custom-validation="" name="confirmPassword" value={formValues.confirmPassword} onChange={handleChange} ng-model="customer.password_confirmation" type="password" />
                {/* <!-- Errors --> */}
                <small class="form__error ng-hide" ng-show="form.customer_password_confirmation.$dirty &amp;&amp; form.customer_password_confirmation.$error.custom" qa-validation="customer_password_confirmation">
                Password Confirmation must match Password
                </small>
                {/* <!-- ngRepeat: server_error in customer.password_confirmation_server_errors -->
                <!-- Caption --> */}
                </div>
                {/* <!-- end ngIf: !(requirements['customer.password']['hide'] && requirements['customer.password_confirmation']['hide']) --> */}

                </div>

                </div>
              </fieldset>
              <fieldset>
                <headline class="headline--medium-bold" ng-show="!hideAddPromoField">
                Enter the promotional code from the letter you received.
                </headline>
                {/* <!-- ngIf: !hideAddPromoField --> */}
                <label class="form__label label label--large ng-scope" for="promotion_code" ng-if="!hideAddPromoField">
                Promotional Code
                <small class="form__sublabel">or Letter Personal Offer Code</small>
                </label>
                {/* <!-- end ngIf: !hideAddPromoField --> */}
                <div class="form__stack">
                <div class="form__row" ng-show="!hideAddPromoField">
                {/* <!-- ngIf: !hideAddPromoField --> */}
                <div class="form__group" ng-if="!hideAddPromoField">
                <input class="form__input ng-pristine ng-untouched ng-valid ng-empty" data-qa="promo_code_text" id="promotion_code" ng-model="new_promotion.coupon_code" placeholder="(optional)" type="text" ui-keypress="{13:'validatePromotion($event)'}" />
                <span ng-class="promotion_result.type == 'success' ? 'form__success' : 'form__error'" ng-show="promotion_result" class="ng-binding ng-hide form__error">

                </span>
                <small class="form__error ng-hide" ng-show="promotion_validation_error">
                The promotional code must only contain letters and numbers.
                </small>
                </div>
                {/* <!-- end ngIf: !hideAddPromoField --> */}
                </div>
                <div class="form__row">
                {/* <!-- ngIf: !hideAddPromoField --> */}
                <div class="form__group form__group--button" ng-if="!hideAddPromoField">
                <button class="button button--secondary" data-qa="promo_code_submit" ng-click="validatePromotion($event)" type="button">
                Add Promo Code
                </button>
                </div>
                {/* <!-- end ngIf: !hideAddPromoField --> */}
                </div>
                </div>
              </fieldset>
              <div class="app-form__consent" ng-show="show_checkboxes()">
                <div class="form__group form__group--table" ng-hide="shouldHideConsent('customer', 'electronic_communications_consent')">
                <span ng-class="{ 'form__padded-checkbox': true, 'form__alert': form.customer_electronic_communications_consent.$error.custom &amp;&amp; form.customer_electronic_communications_consent.$dirty }" class="form__padded-checkbox">
                <input class="form__checkbox ng-pristine ng-untouched ng-invalid ng-invalid-custom ng-empty" custom-validation="" name="checked" value={formValues.checked} onChange={handleChange}  ng-blur="update($event)" ng-change="update('customer.electronic_communications_consent')" ng-class="{ 'suppress_red_bg': (form.customer_electronic_communications_consent.$error.custom &amp;&amp; form.customer_electronic_communications_consent.$dirty) }" ng-model="customer.electronic_communications_consent" type="checkbox"/>
                </span>
                <label>
                <small>
                <strong>I read, understand, and consent to:</strong>

                </small>
                </label>
                </div>


                <ul class="app-form__consent-list list-bullet">
                <li ng-hide="">
                <small>
                Avant's <button onClick="" ng-click="loadStaticModal('/customer_application_renderer/v2/modals/terms_of_use.html')">Terms of Use</button>


                </small>
                <input ng-init="customer_consent.terms_of_use = true" ng-model="customer_consent.terms_of_use" type="hidden" autocomplete="off" class="ng-pristine ng-untouched ng-valid ng-not-empty"/>

                </li>
                <li ng-hide="">
                <small>
                <a href="https://www.avant.com/avant-privacy-notice" target="_blank" rel='noreferrer'>Avant's Privacy Notice</a> and <a href="https://www.avant.com/webbank-privacy-notice" target="_blank" rel="noreferrer">WebBank's Privacy Notice</a>


                </small>
                <input ng-init="customer.privacy_policy_consent = true" ng-model="customer.privacy_policy_consent" type="hidden" autocomplete="off" class="ng-pristine ng-untouched ng-valid ng-not-empty"/>

                </li>
                <li ng-hide="">
                <small>
                <button onClick="" ng-click="loadStaticModal('/customer_application_renderer/v2/modals/electronic_communications_consent.html')">Electronic Communications Agreement</button>


                </small>
                </li>
                <li ng-hide="">
                <small>
                <button onClick="" ng-click="loadStaticModal('/customer_application_renderer/v2/modals/call_and_text.html')">Authorization to Receive Calls and SMS Messages</button>

                </small>
                <input ng-init="customer_consent.receive_calls_about_account = true" ng-model="customer_consent.receive_calls_about_account" type="hidden" autocomplete="off" class="ng-pristine ng-untouched ng-valid ng-not-empty" />

                </li>
                <li ng-hide="">
                <small>
                I expressly authorize Avant, its affiliates, and WebBank to share among them any transaction history related to my financial products or services received through Avant or serviced by Avant for the purpose of evaluating me for credit.


                </small>
                </li>
                </ul>

              </div>
              <Button 
                  padding="15px 35px" 
                  color='#fff' 
                  width='100%'
                  bgColor="#fff" 
                  colorHover="#2382ce" 
                  borderColor="2px solid #2382ce" 
                  // background="#fff"
                  background= "#2382ce"
                  fontSize="19px"
                  border="2px solid #fff"
                  gap="15px"
                  // onClick={handleSubmit}
                  >
                    <UilPadlock className="pad-lock"/>
                    Continue Application
                    <UilAngleRight />
                    
              </Button>
              <small class="app-form__rate-disclaimer">Checking if you qualify for an AvantCard will not affect your credit score.</small>
              <div class="app-form__legal">
                <small>
                  <strong class="app-form__legal-header">Important information about procedures for opening a new account:</strong>
                  To help the government fight the funding of terrorism and money laundering activities, Federal law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account. What this means for you: When you open an account, we will ask for your name, address, date of birth, and other information that will allow us to identify you. We may also ask to see your driver's license or other identifying documents.
                </small>

                <small>
                  Copyright
                  2023
                  Avant, LLC. All rights reserved. Need help? 1-855-752-7012
                </small>

              </div>
            </form>
          </article>
          <aside className="col__short-right">
            <div className="app-aside">
              <div>
                <div className="headline--medium-bold">Why Avant Card?</div>
                  <ul className="list-bullet">
                    <li>Fast and easy application process</li>
                    <li>We may periodically review your account for credit line increases</li>
                    <li>Zero fraud liability for unauthorized charges</li>
                  </ul>
                </div>

                <div className="app-aside__widget">
                  <div className="app-aside__logo">
                    <img alt="Better Business Bureau" src="https://demusnq8ggs2.cloudfront.net/assets/v3/icons/bbb-21f0cd6bd17594c9fcd10f7cf7dd8780.png" />
                  </div>
                </div>
                <div className="app-aside__logo">
                  <div className="" data-language="en" id="DigiCertClickID_p0PhGTT3_1">
                    {/* <div id="DigiCertClickID_p0PhGTT3Seal" style="text-decoration: none; text-align: center; display: block; vertical-align: baseline; font-size: 100%; font-style: normal; text-indent: 0px; line-height: 1; width: auto; margin: 0px auto; padding: 0px; border: 0px; background: transparent; position: relative; inset: 0px; clear: both; float: none; cursor: default;"><img src="//seal.digicert.com/seals/cascade/?tag=p0PhGTT3&amp;referer=www.avant.com&amp;format=png&amp;lang=en&amp;seal_number=11&amp;seal_size=s&amp;an=min" alt="DigiCert Secured Site Seal" tabindex="0" role="link" style="text-decoration: none; text-align: center; display: block; vertical-align: baseline; font-size: 100%; font-style: normal; text-indent: 0px; line-height: 1; width: auto; margin: 0px auto; padding: 0px; border: 0px; background: transparent; position: relative; inset: 0px; clear: both; float: none; cursor: pointer;"/></div> */}
                </div>
              </div>
            
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default ApplyCreditCard;
