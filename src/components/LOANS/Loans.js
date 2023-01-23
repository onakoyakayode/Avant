import React from 'react'
import Header from '../Credit-card/Header'
import "../../Styles/Apply-Card.css"
import { UilPadlock, UilAngleRight } from '@iconscout/react-unicons';
import { Button } from '../../Styled/Button.styled';

const Loans = () => {

  // eslint-disable-next-line
  return (
    <div>
      <Header />
      <div className='container_inner'>
        <section className='intro ng-scope'>
          <h1 className="intro__headline headline--effra">Welcome! You're one step away from checking your loan options.</h1>
          <span className="intro__subhead">Checking your loan options does <strong>not</strong> affect your credit score.</span>
        </section>
        <article className='col__wide-left'>
          <form className='app-form form-counter ng-pristine'>
            <div>
              <fieldset>
                <div className='form__row'>
                  <div className='form__group'>
                    <label className='form__label label label--large' for="firstMame">
                      First Name
                    </label>
                    <input className='form__input' type="text" id="loan_first_name" name="loan_firstName" />
                    <small className='errors'></small>
                  </div>

                  <div className='form__group'>
                    <label className='form__label label label--large' for="loan_last_name">
                      Last Name
                    </label>
                    <input className='form__input' type="text" id="loan_last_name" name="loan_last_name" />
                    <small className='errors'></small>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <div className='form__row'>
                  <div className='form__group'>
                    <label className='form__label label label--large' for="address_1">
                      Address Line 1
                    </label>
                    <input className='form__input' type="text" id="address_1" name="address_1" />
                    <small className='errors'></small>
                  </div>

                  <div className='form__group'>
                    <label className='form__label label label--large' for="address_2">
                      Address Line 2 (Optional)
                    </label>
                    <input className='form__input' type="text" id="address_2" name="address_2" />
                    {/* <small className='errors'></small> */}
                  </div>
                </div>
              </fieldset>
              <div ng-class="{ 'form__row': true }" class="form__row">
                <div class="form__group" ng-hide="requirements['customer_address.city']['hide']">

                  <label class="form__label label label--large" for="customer_address_city">
                  City
                  </label>

                  <input aria-describedby="customer_address_city_error" class="form__input ng-pristine ng-untouched ng-invalid ng-invalid-custom ng-empty" custom-validation="" id="customer_address_city" name="customer_address_city" neuro-text-question="ques_1eQzLp2aqkBhwfaH" ng-blur="update($event)" ng-class="{ 'form__alert': serverSideErrorFields.indexOf('customer_address.city') >= 0 }" ng-model="customer_address.city" type="text" ui-keypress="{ 13: inputPressEnter($event, customer_address, city) }"/>

                    <p class="form__error ng-hide" id="customer_address_city_client_error" ng-show="form.customer_address_city.$dirty &amp;&amp; form.customer_address_city.$error.custom" qa-validation="customer_address_city_client_error">
                    What is your city?
                    </p>

                </div>

                <div class="form__group" ng-hide="requirements['customer_address.state']['hide']">

                  <label class="form__label label label--large" for="customer_address_state">
                  State
                  </label>

                  <select name="customer_address_state" id="customer_address_state" className="form__select ng-pristine ng-invalid ng-invalid-custom ng-empty ng-touched" custom-validation="" ng-blur="update($event)" ng-change="update('customer_address.state')">
                    <option value="? object:null ?" selected="selected"></option>
                    <option value="null"></option>
                    <option value="AK">AK</option>
                    <option value="AL">AL</option>
                    <option value="AR">AR</option>
                    <option value="AZ">AZ</option>
                    <option value="CA">CA</option>
                    <option value="CO">CO</option>
                    <option value="CT">CT</option>
                    <option value="DC">DC</option>
                    <option value="DE">DE</option>
                    <option value="FL">FL</option>
                    <option value="GA">GA</option>
                    <option value="HI">HI</option>
                    <option value="IA">IA</option>
                    <option value="ID">ID</option>
                    <option value="IL">IL</option>
                    <option value="IN">IN</option>
                    <option value="KS">KS</option>
                    <option value="KY">KY</option>
                    <option value="LA">LA</option>
                    <option value="MA">MA</option>
                    <option value="MD">MD</option>
                    <option value="ME">ME</option>
                    <option value="MI">MI</option>
                    <option value="MN">MN</option>
                    <option value="MO">MO</option>
                    <option value="MS">MS</option>
                    <option value="MT">MT</option>
                    <option value="NC">NC</option>
                    <option value="ND">ND</option>
                    <option value="NE">NE</option>
                    <option value="NH">NH</option>
                    <option value="NJ">NJ</option>
                    <option value="NM">NM</option>
                    <option value="NV">NV</option>
                    <option value="NY">NY</option>
                    <option value="OH">OH</option>
                    <option value="OK">OK</option>
                    <option value="OR">OR</option>
                    <option value="PA">PA</option>
                    <option value="RI">RI</option>
                    <option value="SC">SC</option>
                    <option value="SD">SD</option>
                    <option value="TN">TN</option>
                    <option value="TX">TX</option>
                    <option value="UT">UT</option>
                    <option value="VA">VA</option>
                    <option value="VT">VT</option>
                    <option value="WA">WA</option>
                    <option value="WI">WI</option>
                    <option value="WV">WV</option>
                    <option value="WY">WY</option>
                  </select>

                  <p class="form__error ng-hide" ng-show="form.customer_address_state.$dirty &amp;&amp; form.customer_address_state.$error.custom" qa-validation="customer_address_state">
                  What is your state?
                  </p>

                </div>
                <div class="form__group" ng-hide="requirements['customer_address.zip']['hide']">
                  <label class="form__label label label--large" for="customer_address_zip">
                  Zip
                  </label>

                  <input aria-describedby="customer_address_zip_error" class="form__input ng-pristine ng-untouched ng-invalid ng-invalid-custom ng-empty" custom-validation="" id="customer_address_zip" name="customer_address_zip" neuro-text-question="ques_1eQzLpQBqU8DkZ60" ng-blur="update($event)" ng-class="{ 'form__alert': serverSideErrorFields.indexOf('customer_address.zip') >= 0 }" ng-model="customer_address.zip" type="text" ui-keypress="{ 13: inputPressEnter($event, customer_address, zip) }"/>

                  <p class="form__error ng-hide" id="customer_address_zip_client_error" ng-show="form.customer_address_zip.$dirty &amp;&amp; form.customer_address_zip.$error.custom" qa-validation="customer_address_zip_client_error">
                  What is your zip code?
                  </p>

                </div>

              </div>
            
              <fieldset>
                <legend>
                  Rent Or Own
                </legend>
                <div ng-class="{ 'form__stack': false, 'form__options form__options--open': false }">
                    
                  <label class="form__label label label--large">
                    Rent or own?
                  </label>

                  <div neuro-multiple-choice-question="ques_1eQzLpI04GruF5mb" ng-class="{ 'form__row': true }" class="form__row">
                    <div class="form__group form__group--radio">
                      <div class="form__radio">
                        <input aria-describedby="client_error_customer_address_rent_or_own server_error_customer_address_rent_or_own" custom-validation="" id="customer_address_rent_or_own_rent" name="customer_address_rent_or_own" neuro-answer-click="0" neuro-answer-label="0" ng-click="update($event)" ng-model="customer_address.rent_or_own" type="radio" value="rent" class="ng-pristine ng-untouched ng-valid ng-valid-custom ng-not-empty"/>
                        <label class=" headline--small" for="customer_address_rent_or_own_rent" ng-class="{ 'form__alert': form.customer_address_rent_or_own.$dirty &amp;&amp; form.customer_address_rent_or_own.$error.custom }">
                        Rent
                        </label>
                      </div>
                      <div class="form__radio">
                        <input aria-describedby="client_error_customer_address_rent_or_own server_error_customer_address_rent_or_own" custom-validation="" id="customer_address_rent_or_own_own" name="customer_address_rent_or_own" neuro-answer-click="1" neuro-answer-label="1" ng-click="update($event)" ng-model="customer_address.rent_or_own" type="radio" value="own" class="ng-not-empty ng-dirty ng-valid ng-valid-custom ng-valid-parse ng-touched" data-gtm-form-interact-field-id="1"/>
                        <label class="headline--small" for="customer_address_rent_or_own_own" ng-class="{ 'form__alert': form.customer_address_rent_or_own.$dirty &amp;&amp; form.customer_address_rent_or_own.$error.custom }">
                          Own
                        </label>
                      </div>
                
                      <p class="form__error ng-hide" id="client_error_customer_address_rent_or_own" ng-show="form.customer_address_rent_or_own.$dirty &amp;&amp; form.customer_address_rent_or_own.$error.custom" qa-validation="customer_address_rent_or_own">
                        Do you rent or own?
                      </p>
                
                    </div>

                  </div>

                </div>
              </fieldset>

              <div ng-class="{ 'form__row': true }" class="form__row">
                <div class="form__group" ng-hide="requirements['customer_address.monthly_housing_payment']['hide']">
             
                <label class="form__label label label--large" for="customer_address_monthly_housing_payment">
                What is your monthly housing payment? (Please input numbers only)
                </label>

                <input aria-describedby="customer_address_monthly_housing_payment_error" class="form__input form__input--dollar ng-pristine ng-invalid ng-invalid-custom ng-empty ng-touched" custom-validation="" id="customer_address_monthly_housing_payment" name="customer_address_monthly_housing_payment" neuro-text-question="ques_1eQzLpSMShfuogeg" ng-blur="update($event)" ng-class="{ 'form__alert': serverSideErrorFields.indexOf('customer_address.monthly_housing_payment') >= 0 }" ng-model="customer_address.monthly_housing_payment" type="tel" ui-keypress="{ 13: inputPressEnter($event, customer_address, monthly_housing_payment) }" />
                
                <p class="form__error ng-hide" id="customer_address_monthly_housing_payment_client_error" ng-show="form.customer_address_monthly_housing_payment.$dirty &amp;&amp; form.customer_address_monthly_housing_payment.$error.custom" qa-validation="customer_address_monthly_housing_payment_client_error">
                Monthly Housing Payment
                </p>
                <p class="form__blurb">
                If you live with others, only include the portion of the monthly housing payment you are responsible for.
                </p>
                </div>

              </div>

              <fieldset ng-hide="requirements['customer_application_metadata.address_start_date_month']['hide'] &amp;&amp; requirements['customer_application_metadata.address_start_date_year']['hide']">
               
                <legend>
                  Address Start Date Month, Address Start Date Year
                </legend>
                <div ng-class="{ 'form__stack': false, 'form__options form__options--open': false }">
                  <label class="form__label label label--large">
                  When did you start living at your current address?
                  </label>

                  <div ng-class="{ 'form__row': true }" class="form__row">
                <div class="form__group" ng-hide="requirements['customer_application_metadata.address_start_date_month']['hide']">
                
                  <select name="customer_application_metadata_address_start_date_month" id="customer_application_metadata_address_start_date_month" className="form__select ng-pristine ng-untouched ng-invalid ng-invalid-custom ng-empty" ng-model="customer_application_metadata.address_start_date_month" ng-class="{ 'form__alert': serverSideErrorFields.indexOf('customer_application_metadata.address_start_date_month') >= 0 }" custom-validation="" ng-blur="update($event)" ng-change="update('customer_application_metadata.address_start_date_month')" neuro-select-question="ques_1eQzLp8VfsW2rPW4">
                    <option value="null">Select Month</option>
                    <option value="1">Jan</option>
                    <option value="2">Feb</option>
                    <option value="3">Mar</option>
                    <option value="4">Apr</option>
                    <option value="5">May</option>
                    <option value="6">Jun</option>
                    <option value="7">Jul</option>
                    <option value="8">Aug</option>
                    <option value="9">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                  </select>
                  
                  <p class="form__error ng-hide" ng-show="form.customer_application_metadata_address_start_date_month.$dirty &amp;&amp; form.customer_application_metadata_address_start_date_month.$error.custom" qa-validation="customer_application_metadata_address_start_date_month">
                    Please select a month
                  </p>
               
                </div>

                <div class="form__group" ng-hide="requirements['customer_application_metadata.address_start_date_year']['hide']">
               
                  <select name="customer_application_metadata_address_start_date_year" id="customer_application_metadata_address_start_date_year" class="form__select ng-pristine ng-untouched ng-invalid ng-invalid-custom ng-empty" ng-model="customer_application_metadata.address_start_date_year" ng-class="{ 'form__alert': serverSideErrorFields.indexOf('customer_application_metadata.address_start_date_year') >= 0 }" custom-validation="" ng-blur="update($event)" ng-change="update('customer_application_metadata.address_start_date_year')" neuro-select-question="ques_1eQzLpZWcigAz4y2">
                    <option value="null" selected="selected">Select Year</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
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
                  </select>
                    <p class="form__error ng-hide" ng-show="form.customer_application_metadata_address_start_date_year.$dirty &amp;&amp; form.customer_application_metadata_address_start_date_year.$error.custom" qa-validation="customer_application_metadata_address_start_date_year">
                      Please select a year
                    </p>
                </div>

                </div>

                </div>
              </fieldset>
              <fieldset ng-hide="requirements['person.date_of_birth_month']['hide'] &amp;&amp; requirements['person.date_of_birth_day']['hide'] &amp;&amp; requirements['person.date_of_birth_year']['hide']">
                <legend>
                Date Of Birth Month, Date Of Birth Day, Date Of Birth Year
                </legend>
                <div ng-class="{ 'form__stack': false, 'form__options form__options--open': false }">
                <label class="form__label label label--large">
                Date of Birth
                </label>

                <div ng-class="{ 'form__row': true }" class="form__row">
                <div class="form__group" ng-hide="requirements['person.date_of_birth_month']['hide']">
                
                <select name="person_date_of_birth_month" id="person_date_of_birth_month" class="form__select ng-pristine ng-untouched ng-invalid ng-invalid-custom ng-empty" ng-model="person.date_of_birth_month" ng-class="{ 'form__alert': serverSideErrorFields.indexOf('person.date_of_birth_month') >= 0 }" custom-validation="" ng-blur="update($event)" ng-change="update('person.date_of_birth_month')" neuro-select-question="ques_1eQzLpQoWAqThAdO">
                  <option value="null" selected="selected">Select Month</option>
                  <option value="1">Jan</option>
                  <option value="2">Feb</option>
                  <option value="3">Mar</option>
                  <option value="4">Apr</option>
                  <option value="5">May</option>
                  <option value="6">Jun</option>
                  <option value="7">Jul</option>
                  <option value="8">Aug</option>
                  <option value="9">Sep</option>
                  <option value="10">Oct</option>
                  <option value="11">Nov</option>
                  <option value="12">Dec</option>
                </select>
              
                <p class="form__error ng-hide" ng-show="form.person_date_of_birth_month.$dirty &amp;&amp; form.person_date_of_birth_month.$error.custom" qa-validation="person_date_of_birth_month">
                Please select a month
                </p>
                
                </div>

                <div class="form__group" ng-hide="requirements['person.date_of_birth_day']['hide']">
                <select name="person_date_of_birth_day" id="person_date_of_birth_day" class="form__select ng-pristine ng-untouched ng-invalid ng-invalid-custom ng-empty" ng-model="person.date_of_birth_day" ng-class="{ 'form__alert': serverSideErrorFields.indexOf('person.date_of_birth_day') >= 0 }" custom-validation="" ng-blur="update($event)" ng-change="update('person.date_of_birth_day')" neuro-select-question="ques_1eQzLpNq7JhX3NU1">
                  <option value="null" selected="selected">Select Day</option>
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
                  <option value="31">31</option>
                </select>
                <p class="form__error ng-hide" ng-show="form.person_date_of_birth_day.$dirty &amp;&amp; form.person_date_of_birth_day.$error.custom" qa-validation="person_date_of_birth_day">
                Please select a day
                </p>
                
                </div>

                <div class="form__group" ng-hide="requirements['person.date_of_birth_year']['hide']">
                <select name="person_date_of_birth_year" id="person_date_of_birth_year" class="form__select ng-pristine ng-untouched ng-invalid ng-invalid-custom ng-empty" ng-model="person.date_of_birth_year" ng-class="{ 'form__alert': serverSideErrorFields.indexOf('person.date_of_birth_year') >= 0 }" custom-validation="" ng-blur="update($event)" ng-change="update('person.date_of_birth_year')" neuro-select-question="ques_1eQzLpDf4bdFeGp9">
                  <option value="null" selected="selected">Select Year</option>
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
                  <option value="1923">1923</option>
                </select>
                <p class="form__error ng-hide" ng-show="form.person_date_of_birth_year.$dirty &amp;&amp; form.person_date_of_birth_year.$error.custom" qa-validation="person_date_of_birth_year">
                Please select a year
                </p>
                </div>

                </div>

                </div>
              </fieldset>
              <fieldset ng-hide="requirements['person.home_phone']['hide']">
               
                <legend>
                  Home Phone
                </legend>
                <div ng-class="{ 'form__stack': false, 'form__options form__options--open': false }">
                  <div ng-class="{ 'form__row': true }" class="form__row">
                    <div class="form__group" ng-hide="requirements['person.home_phone']['hide']">
               
                      <label class="form__label label label--large" for="person_home_phone">
                        Phone
                      </label>

                      <input aria-describedby="person_home_phone_error" class="form__input ng-pristine ng-untouched ng-invalid ng-invalid-custom ng-empty" custom-validation="" id="person_home_phone" name="person_home_phone" neuro-text-question="ques_1eQzLpl9IMtLyHhj" ng-blur="update($event)" ng-class="{ 'form__alert': serverSideErrorFields.indexOf('person.home_phone') >= 0 }" ng-model="person.home_phone" type="tel" ui-keypress="{ 13: inputPressEnter($event, person, home_phone) }"/>
               
                      <p class="form__error ng-hide" id="person_home_phone_client_error" ng-show="form.person_home_phone.$dirty &amp;&amp; form.person_home_phone.$error.custom" qa-validation="person_home_phone_client_error">
                        Please fill in your phone number
                      </p>
               
                    </div>

                  </div>

                </div>
              </fieldset>
              <fieldset ng-hide="requirements['customer.electronic_communications_consent']['hide'] &amp;&amp; requirements['customer.email']['hide']">
                <legend>
                Email
                </legend>
                <div ng-class="{ 'form__stack': false, 'form__options form__options--open': false }">
                  <div ng-class="{ 'form__row': true }" class="form__row">
                    <div class="form__group" ng-hide="requirements['customer.email']['hide']">
                      <label class="form__label label label--large" for="customer_email">
                      Email
                      </label>

                      <input aria-describedby="customer_email_error" class="form__input ng-pristine ng-untouched ng-invalid ng-invalid-custom ng-empty ng-valid-email" custom-validation="" id="customer_email" name="customer_email" neuro-text-question="ques_1eQzLpB7qDs82TV9" ng-blur="update($event)" ng-class="{ 'form__alert': serverSideErrorFields.indexOf('customer.email') >= 0 }" ng-model="customer.email" type="email" ui-keypress="{ 13: inputPressEnter($event, customer, email) }"/>
               
                      <p class="form__error ng-hide" id="customer_email_client_error" ng-show="form.customer_email.$dirty &amp;&amp; form.customer_email.$error.custom" qa-validation="customer_email_client_error">
                      Please enter a valid email
                      </p>
                    
                    </div>

                  </div>

                </div>
              </fieldset>
              <fieldset ng-hide="requirements['customer.password']['hide'] &amp;&amp; requirements['customer.password_confirmation']['hide']">
                
                <legend>
                Password, Password Confirmation
                </legend>
                <div ng-class="{ 'form__stack': true, 'form__options form__options--open': false }" class="form__stack">
                <div  class="form__row">
                <div class="form__group" ng-if="!(requirements['customer.password']['hide'])">
                <label class="form__label label label--large" for="customer_password">
                Create Password
                </label>

                <input class="form__input ng-pristine ng-untouched ng-invalid ng-invalid-custom ng-empty" custom-validation="" name="customer_password" neuro-text-question="ques_1eQzLpcIitl1tZUB" ng-class="{ 'form__alert': serverSideErrorFields.indexOf('customer.password') >= 0 }" ng-model="customer.password" type="password" />
                
                <p class="form__error ng-binding ng-hide" ng-show="form.customer_password.$dirty &amp;&amp; form.customer_password.$error.custom" qa-validation="customer_password">
                Password must be between 8 and 72 characters
                </p>
                
                </div>

                </div>
                <div class="form__row">
                  <div class="form__group" ng-if="!(requirements['customer.password']['hide'] &amp;&amp; requirements['customer.password_confirmation']['hide'])">
               
                <label class="form__label label label--large" for="customer_password_confirmation">
                Password Confirmation
                </label>

                <input class="form__input ng-pristine ng-untouched ng-valid ng-valid-custom ng-empty" custom-validation="" name="customer_password_confirmation" neuro-text-question="ques_1eQzLpBiBvab72Oy" ng-class="{ 'form__alert': serverSideErrorFields.indexOf('customer.password_confirmation') >= 0 }" ng-model="customer.password_confirmation" type="password"/>
                
                <p class="form__error ng-hide" ng-show="form.customer_password_confirmation.$dirty &amp;&amp; form.customer_password_confirmation.$error.custom" qa-validation="customer_password_confirmation">
                Password Confirmation must match Password
                </p>
                
                </div>

                </div>

                </div>
                <small class="form__blurb">
                Password must be at least 8 characters, unique to you, and difficult for others to guess.
                </small>
              </fieldset>
              <fieldset ng-hide="requirements['person.ssn']['hide']">
                
                <legend>
                Ssn
                </legend>
                <div ng-class="{ 'form__stack': false, 'form__options form__options--open': false }">
                <div ng-class="{ 'form__row': true }" class="form__row">
                <div class="form__group just-label">
                
                <label class="form__label label label--large" for="person_ssn">
                  Social Security Number
                </label>

                <input  class="form__input form__input--secure ng-pristine ng-untouched ng-invalid ng-invalid-custom ng-empty ng-valid-maxlength" custom-validation="" id="person_ssn" maxlength="9" name="person_ssn" neuro-text-question="ques_1eQzLpRJeqoJ9eMh" ng-blur="update($event)" ng-change="updateSSN('person_ssn')" ng-disabled="disableSSN" ng-model="person.ssn" ng_if="!requirements['person.ssn']['hide']" placeholder="***-**-****" qa="person_ssn" regex-restrict="[^0-9]" title="" type="password" ui-keypress="{13: &quot;inputPressEnter($event, 'person', 'ssn')&quot;}" />
                <div class="ng-binding"></div>
                <p class="form__error ng-hide" ng-show="form.person_ssn.$dirty &amp;&amp; form.person_ssn.$error.custom" qa-validation="spouse_ssn">
                What is your 9-digit social security number?
                </p>
              
                <p class="form__blurb">
                We use 128-bit SSL protection and strict, high levels of security &amp; encryption standards to keep your information safe. <button href="" class="tooltip" popover="We use your social security number to help verify your information to issue credit. We also encrypt this information to keep you safe" popover-placement="bottom" popover-trigger="click" data-tooltip="" neuro-region-question="ques_1eQzLpCoE1MGFxPM">More Information</button>

                </p>
                </div>

                </div>

                </div>
              </fieldset>
              <fieldset ng-hide="requirements['income.income_type']['hide']">
                <legend>
                Income Type
                </legend>
                <div ng-class="{ 'form__stack': false, 'form__options form__options--open': false }">
                <div ng-class="{ 'form__row': true }" class="form__row">
                <div class="form__group" ng-hide="requirements['income.income_type']['hide']">
             
                <label class="form__label label label--large" for="income_income_type">
                Income Type
                </label>


                <select name="income_income_type" id="income_income_type" class="form__select ng-pristine ng-untouched ng-invalid ng-invalid-custom ng-empty" ng-model="income.income_type" ng-class="{ 'form__alert': serverSideErrorFields.indexOf('income.income_type') >= 0 }" custom-validation="" ng-blur="update($event)" ng-change="update('income.income_type')" neuro-select-question="ques_1eQzLpAU0mEAhWSd" ng_init="valid_income_types = [[&quot;Employed (ex. Wages, Salaries, Tips, etc.)&quot;,&quot;employment&quot;],[&quot;Self-Employed (ex. Sole Proprietorship, Rental Income, Independent Contractor, etc.)&quot;,&quot;self_employment&quot;],[&quot;Permanent Benefits / Retirement / Other (ex. Pension, 401(k), Social Security, etc.)&quot;,&quot;retired_benefits&quot;],[&quot;Temporary Benefits (ex. Disability, One-Time Distributions, Unemployment, etc.)&quot;,&quot;unemployment&quot;]]" ng_options="opt[1] as opt[0] for opt in valid_income_types"><option value="?" selected="selected"></option><option label="Employed (ex. Wages, Salaries, Tips, etc.)" value="string:employment">Employed (ex. Wages, Salaries, Tips, etc.)</option><option label="Self-Employed (ex. Sole Proprietorship, Rental Income, Independent Contractor, etc.)" value="string:self_employment">Self-Employed (ex. Sole Proprietorship, Rental Income, Independent Contractor, etc.)</option><option label="Permanent Benefits / Retirement / Other (ex. Pension, 401(k), Social Security, etc.)" value="string:retired_benefits">Permanent Benefits / Retirement / Other (ex. Pension, 401(k), Social Security, etc.)</option><option label="Temporary Benefits (ex. Disability, One-Time Distributions, Unemployment, etc.)" value="string:unemployment">Temporary Benefits (ex. Disability, One-Time Distributions, Unemployment, etc.)</option></select>
                
                <p class="form__error ng-hide" ng-show="form.income_income_type.$dirty &amp;&amp; form.income_income_type.$error.custom" qa-validation="income_income_type">
                Please select your income type
                </p>
                
                </div>

                </div>

                </div>
              </fieldset>
              <fieldset ng-hide="requirements['income.monthly_net_income']['hide']">
                <legend>
                Monthly Net Income
                </legend>
                <div ng-class="{ 'form__stack': false, 'form__options form__options--open': false }">
                <div ng-class="{ 'form__row': true }" class="form__row">
                <div class="form__group" ng-hide="requirements['income.monthly_net_income']['hide']">
                <label class="form__label label label--large" for="income_monthly_net_income">
                What is your monthly net income?
                </label>
                <input aria-describedby="income_monthly_net_income_error" class="form__input form__input--dollar ng-pristine ng-untouched ng-invalid ng-invalid-custom ng-empty" custom-validation="" id="income_monthly_net_income" name="income_monthly_net_income" neuro-text-question="ques_1eQzLpOF6IIk5qGn" ng-blur="update($event)" ng-class="{ 'form__alert': serverSideErrorFields.indexOf('income.monthly_net_income') >= 0 }" ng-model="income.monthly_net_income" type="tel" ui-keypress="{ 13: inputPressEnter($event, income, monthly_net_income) }"/>
                <p class="form__error ng-hide" id="income_monthly_net_income_client_error" ng-show="form.income_monthly_net_income.$dirty &amp;&amp; form.income_monthly_net_income.$error.custom" qa-validation="income_monthly_net_income_client_error">
                What is your net income per month?
                </p>
                <p class="form__blurb">
                This is your take-home pay each month <b>after</b> all taxes and deductions, subject to verification. Alimony, child support, or separate maintenance income is optional to include.
                </p>
                </div>

                </div>

                </div>
              </fieldset>
              <fieldset ng-hide="requirements['customer_application.loan_purpose']['hide']">
             
                <legend>
                Loan Purpose
                </legend>
                <div ng-class="{ 'form__stack': false, 'form__options form__options--open': false }">
                <div ng-class="{ 'form__row': true }" class="form__row">
                <div class="form__group" ng-hide="requirements['customer_application.loan_purpose']['hide']">
           
                <label class="form__label label label--large" for="customer_application_loan_purpose">
                What's this loan for?
                </label>

                <select name="customer_application_loan_purpose" id="customer_application_loan_purpose" class="form__select ng-pristine ng-untouched ng-invalid ng-invalid-custom ng-empty" ng-model="customer_application.loan_purpose" ng-class="{ 'form__alert': serverSideErrorFields.indexOf('customer_application.loan_purpose') >= 0 }" custom-validation="" ng-blur="update($event)" ng-change="update('customer_application.loan_purpose')" neuro-select-question="ques_1eQzLpajdqwmfkde"><option value="? object:null ?" selected="selected"></option><option value="null"></option>
                  <option value="Debt Consolidation">Debt Consolidation</option>
                  <option value="Emergency Expense">Emergency Expense</option>
                  <option value="Life Event">Life Event</option>
                  <option value="Car Repair">Car Repair</option>
                  <option value="Home Improvement">Home Improvement</option>
                  <option value="Moving/Relocation">Moving/Relocation</option>
                  <option value="Vacation">Vacation</option>
                  <option value="Other">Other</option>
                </select>
                <p class="form__error ng-hide" ng-show="form.customer_application_loan_purpose.$dirty &amp;&amp; form.customer_application_loan_purpose.$error.custom" qa-validation="customer_application_loan_purpose">
                Select the purpose of this loan
                </p>
                
                </div>

                </div>

                </div>
              </fieldset>
              <fieldset ng-hide="requirements['customer_application_metadata.requested_loan_amount']['hide']">
               
                <legend>
                Requested Loan Amount
                </legend>
                <div ng-class="{ 'form__stack': false, 'form__options form__options--open': false }">
                <div ng-class="{ 'form__row': true }" class="form__row">
                <div class="form__group" ng-hide="requirements['customer_application_metadata.requested_loan_amount']['hide']">
                <label class="form__label label label--large" for="customer_application_metadata_requested_loan_amount">
                What loan amount do you need?
                </label>

                
                <input aria-describedby="customer_application_metadata_requested_loan_amount_error" class="form__input form__input--dollar ng-pristine ng-untouched ng-invalid ng-invalid-custom ng-empty" custom-validation="" id="customer_application_metadata_requested_loan_amount" name="customer_application_metadata_requested_loan_amount" neuro-text-question="ques_1eQzLplshKB2oFur" ng-blur="update($event)" ng-class="{ 'form__alert': serverSideErrorFields.indexOf('customer_application_metadata.requested_loan_amount') >= 0 }" ng-model="customer_application_metadata.requested_loan_amount" placeholder="2,000 - 35,000" type="tel" ui-keypress="{ 13: inputPressEnter($event, customer_application_metadata, requested_loan_amount) }" />
              
                <p class="form__error ng-hide" id="customer_application_metadata_requested_loan_amount_client_error" ng-show="form.customer_application_metadata_requested_loan_amount.$dirty &amp;&amp; form.customer_application_metadata_requested_loan_amount.$error.custom" qa-validation="customer_application_metadata_requested_loan_amount_client_error">
                Please enter an amount between $2,000 and $35,000.
                </p>
               
                </div>

                </div>

                </div>
              </fieldset>
              <fieldset ng-hide="requirements['customer_application_metadata.self_credit_score']['hide']">
                
                <legend>
                Self Credit Score
                </legend>
                <div ng-class="{ 'form__stack': false, 'form__options form__options--open': false }">
                <div ng-class="{ 'form__row': true }" class="form__row">
                <div class="form__group" ng-hide="requirements['customer_application_metadata.self_credit_score']['hide']">
                <label class="form__label label label--large" for="customer_application_metadata_self_credit_score">
                How would you rate your credit quality?
                </label>

                <select name="customer_application_metadata_self_credit_score" id="customer_application_metadata_self_credit_score" class="form__select ng-pristine ng-untouched ng-invalid ng-invalid-custom ng-empty" ng-model="customer_application_metadata.self_credit_score" ng-class="{ 'form__alert': serverSideErrorFields.indexOf('customer_application_metadata.self_credit_score') >= 0 }" custom-validation="" ng-blur="update($event)" ng-change="update('customer_application_metadata.self_credit_score')" neuro-select-question="ques_1eQzLpVOfsVLVHYE"><option value="? object:null ?" selected="selected"></option><option value="excellent">Excellent (720+)</option>
                <option value="good">Good (670-719)</option>
                <option value="average">Average (620-669)</option>
                <option value="fair">Fair (580-619)</option>
                <option value="poor">Poor (&lt;580)</option>
                <option value="not_sure">Not Sure</option></select>
                
                <p class="form__error ng-hide" ng-show="form.customer_application_metadata_self_credit_score.$dirty &amp;&amp; form.customer_application_metadata_self_credit_score.$error.custom" qa-validation="customer_application_metadata_self_credit_score">
                Select the purpose of this loan
                </p>
               
                </div>

                </div>

                </div>
              </fieldset>
              <fieldset ng-hide="requirements['new_promotion.coupon_code']['hide'] &amp;&amp; requirements['new_promotion.coupon_code_button']['hide']">
                <legend for="new_promotion_coupon_code">
                Promotional Code or Letter Personal Offer Code
                </legend>
                <label class="form__label label label--large" for="new_promotion_coupon_code">
                Promotional Code or Letter Personal Offer Code
                </label>

                <div ng-class="{ 'form__stack': true, 'form__options form__options--open': false }" class="form__stack">
                <div ng-class="{ 'form__row': true }" class="form__row">
                <div class="form__group" data-qa="promo_codes" ng-if="!hideAddPromoField">
                <input class="form__input ng-pristine ng-untouched ng-valid ng-empty" data-qa="new_promotion_coupon_code" id="new_promotion_coupon_code" neuro-text-question="ques_1eQzLp2JEq3KhwZq" ng-class="{ 'form__alert': promotion_result.type == 'error' || promotion_validation_error }" ng-model="new_promotion.coupon_code" type="text" ui-keypress="{ 13:'validatePromotion($event)' }" />
                <p ng-class="promotion_result.type == 'success' ? 'form__success' : 'form__error'" ng-show="promotion_result" class="ng-binding ng-hide form__error">

                </p>
                <p class="form__error ng-binding ng-hide" ng-show="promotion_validation_error">

                </p>
                </div>

                </div>
                <div ng-class="{ 'form__row': true }" class="form__row">
                <div class="form__group form__group--button" ng-if="!hideAddPromoField">
                <button class="button button--secondary" data-qa="new_promotion_coupon_code_button" neuro-region-question="ques_1eQzLpR7EGHotYCW" ng-click="validatePromotion($event)" type="button">
                Add
                </button>
                </div>

                </div>

                </div>
              </fieldset>
              <fieldset neuro-multiple-choice-question="ques_1eQzLphwHOF1kecB">
                
                <legend>
                Acquisition Channel
                </legend>
                <div ng-class="{ 'form__stack': false, 'form__options form__options--open': false }">
                
                <label class="form__label label label--large" for="customer_application_metadata_acquisition_channel" ng-show="isOrganic">
                How did you hear about us?
                </label>

                <div ng-class="{ 'form__row': true }" ng-show="isOrganic" class="form__row">
                <div class="form__group form__group--radio">
                <div class="form__radio" ng-repeat="option in config.acquisition_channels">
                <input aria-describedby="client_error_customer_application_metadata_acquisition_channel server_error_customer_application_metadata_acquisition_channel" custom-validation="" id="customer_application_metadata_acquisition_channel_Radio" name="customer_application_metadata_acquisition_channel" neuro-answer-click="Radio" neuro-answer-label="Radio" ng-click="update($event)" ng-model="customer_application_metadata.acquisition_channel" ng-value="option" type="radio" class="ng-pristine ng-untouched ng-valid ng-valid-custom ng-empty" value="Radio" />
                <label class=" headline--small ng-binding" for="customer_application_metadata_acquisition_channel_Radio" ng-class="{ 'form__alert': form.customer_application_metadata_acquisition_channel.$dirty &amp;&amp; form.customer_application_metadata_acquisition_channel.$error.custom }">
                Radio
                </label>
                </div>
                <div class="form__radio" ng-repeat="option in config.acquisition_channels">
                <input aria-describedby="client_error_customer_application_metadata_acquisition_channel server_error_customer_application_metadata_acquisition_channel" custom-validation="" id="customer_application_metadata_acquisition_channel_Phone" name="customer_application_metadata_acquisition_channel" neuro-answer-click="Phone" neuro-answer-label="Phone" ng-click="update($event)" ng-model="customer_application_metadata.acquisition_channel" ng-value="option" type="radio" class="ng-pristine ng-untouched ng-valid ng-valid-custom ng-empty" value="Phone" />
                <label class="headline--small ng-binding" for="customer_application_metadata_acquisition_channel_Phone" ng-class="{ 'form__alert': form.customer_application_metadata_acquisition_channel.$dirty &amp;&amp; form.customer_application_metadata_acquisition_channel.$error.custom }">
                Phone
                </label>
                </div>
                <div class="form__radio" ng-repeat="option in config.acquisition_channels">
                <input aria-describedby="client_error_customer_application_metadata_acquisition_channel server_error_customer_application_metadata_acquisition_channel" custom-validation="" id="customer_application_metadata_acquisition_channel_Facebook" name="customer_application_metadata_acquisition_channel" neuro-answer-click="Facebook" neuro-answer-label="Facebook" ng-click="update($event)" ng-model="customer_application_metadata.acquisition_channel" ng-value="option" type="radio" class="ng-pristine ng-untouched ng-valid ng-valid-custom ng-empty" value="Facebook" />
                <label class="headline--small ng-binding" for="customer_application_metadata_acquisition_channel_Facebook" ng-class="{ 'form__alert': form.customer_application_metadata_acquisition_channel.$dirty &amp;&amp; form.customer_application_metadata_acquisition_channel.$error.custom }">
                Facebook
                </label>
                </div>
                <div class="form__radio" ng-repeat="option in config.acquisition_channels">
                <input aria-describedby="client_error_customer_application_metadata_acquisition_channel server_error_customer_application_metadata_acquisition_channel" custom-validation="" id="customer_application_metadata_acquisition_channel_Outdoor Ad" name="customer_application_metadata_acquisition_channel" neuro-answer-click="Outdoor Ad" neuro-answer-label="Outdoor Ad" ng-click="update($event)" ng-model="customer_application_metadata.acquisition_channel" ng-value="option" type="radio" class="ng-pristine ng-untouched ng-valid ng-valid-custom ng-empty" value="Outdoor Ad" />
                <label class="headline--small ng-binding" for="customer_application_metadata_acquisition_channel_Outdoor Ad" ng-class="{ 'form__alert': form.customer_application_metadata_acquisition_channel.$dirty &amp;&amp; form.customer_application_metadata_acquisition_channel.$error.custom }">
                Outdoor Ad
                </label>
                </div>
                <div class="form__radio" ng-repeat="option in config.acquisition_channels">
                <input aria-describedby="client_error_customer_application_metadata_acquisition_channel server_error_customer_application_metadata_acquisition_channel" custom-validation="" id="customer_application_metadata_acquisition_channel_TV" name="customer_application_metadata_acquisition_channel" neuro-answer-click="TV" neuro-answer-label="TV" ng-click="update($event)" ng-model="customer_application_metadata.acquisition_channel" ng-value="option" type="radio" class="ng-pristine ng-untouched ng-valid ng-valid-custom ng-empty" value="TV" />
                <label class="headline--small ng-binding" for="customer_application_metadata_acquisition_channel_TV" ng-class="{ 'form__alert': form.customer_application_metadata_acquisition_channel.$dirty &amp;&amp; form.customer_application_metadata_acquisition_channel.$error.custom }">
                TV
                </label>
                </div>
                <div class="form__radio" ng-repeat="option in config.acquisition_channels">
                <input aria-describedby="client_error_customer_application_metadata_acquisition_channel server_error_customer_application_metadata_acquisition_channel" custom-validation="" id="customer_application_metadata_acquisition_channel_Friends &amp; Family" name="customer_application_metadata_acquisition_channel" neuro-answer-click="Friends &amp; Family" neuro-answer-label="Friends &amp; Family" ng-click="update($event)" ng-model="customer_application_metadata.acquisition_channel" ng-value="option" type="radio" class="ng-pristine ng-untouched ng-valid ng-valid-custom ng-empty" value="Friends &amp; Family" />
                <label class="headline--small ng-binding" for="customer_application_metadata_acquisition_channel_Friends &amp; Family" ng-class="{ 'form__alert': form.customer_application_metadata_acquisition_channel.$dirty &amp;&amp; form.customer_application_metadata_acquisition_channel.$error.custom }">
                Friends &amp; Family
                </label>
                </div>
                <div class="form__radio" ng-repeat="option in config.acquisition_channels">
                <input aria-describedby="client_error_customer_application_metadata_acquisition_channel server_error_customer_application_metadata_acquisition_channel" custom-validation="" id="customer_application_metadata_acquisition_channel_Mail Offer" name="customer_application_metadata_acquisition_channel" neuro-answer-click="Mail Offer" neuro-answer-label="Mail Offer" ng-click="update($event)" ng-model="customer_application_metadata.acquisition_channel" ng-value="option" type="radio" class="ng-pristine ng-untouched ng-valid ng-valid-custom ng-empty" value="Mail Offer" />
                <label class=" headline--small ng-binding" for="customer_application_metadata_acquisition_channel_Mail Offer" ng-class="{ 'form__alert': form.customer_application_metadata_acquisition_channel.$dirty &amp;&amp; form.customer_application_metadata_acquisition_channel.$error.custom }">
                Mail Offer
                </label>
                </div>
                <div class="form__radio" ng-repeat="option in config.acquisition_channels">
                <input aria-describedby="client_error_customer_application_metadata_acquisition_channel server_error_customer_application_metadata_acquisition_channel" custom-validation="" id="customer_application_metadata_acquisition_channel_Podcast" name="customer_application_metadata_acquisition_channel" neuro-answer-click="Podcast" neuro-answer-label="Podcast" ng-click="update($event)" ng-model="customer_application_metadata.acquisition_channel" ng-value="option" type="radio" class="ng-pristine ng-untouched ng-valid ng-valid-custom ng-empty" value="Podcast" />
                <label class="headline--small ng-binding" for="customer_application_metadata_acquisition_channel_Podcast" ng-class="{ 'form__alert': form.customer_application_metadata_acquisition_channel.$dirty &amp;&amp; form.customer_application_metadata_acquisition_channel.$error.custom }">
                Podcast
                </label>
                </div>
                <div class="form__radio" ng-repeat="option in config.acquisition_channels">
                <input aria-describedby="client_error_customer_application_metadata_acquisition_channel server_error_customer_application_metadata_acquisition_channel" custom-validation="" id="customer_application_metadata_acquisition_channel_Other" name="customer_application_metadata_acquisition_channel" neuro-answer-click="Other" neuro-answer-label="Other" ng-click="update($event)" ng-model="customer_application_metadata.acquisition_channel" ng-value="option" type="radio" class="ng-pristine ng-untouched ng-valid ng-valid-custom ng-empty" value="Other" />
                <label class="headline--small ng-binding" for="customer_application_metadata_acquisition_channel_Other" ng-class="{ 'form__alert': form.customer_application_metadata_acquisition_channel.$dirty &amp;&amp; form.customer_application_metadata_acquisition_channel.$error.custom }">
                Other
                </label>
                </div>
                </div>

                </div>

                </div>
              </fieldset>
              <div class="app-form__consent" ng-show="show_checkboxes()">
                <span ng-switch="customer_address.state">
                
                </span>

                <div class="form__group form__group--table" ng-class="{ 'form__group--table': true }" ng-hide="false &amp;&amp; shouldHideConsent('customer', 'electronic_communications_consent')">
                <span ng-class="{ 'form__padded-checkbox': true, 'form__alert': (form.customer_electronic_communications_consent.$error.custom &amp;&amp; form.customer_electronic_communications_consent.$dirty) || serverSideErrorFields.indexOf('customer.electronic_communications_consent') >= 0 }" class="form__padded-checkbox">
                <input class="form__checkbox ng-pristine ng-untouched ng-invalid ng-invalid-custom ng-empty" custom-validation="" id="customer_electronic_communications_consent" name="customer_electronic_communications_consent" neuro-region-question="ques_1eQzFLoDHTAqTORc" ng-blur="update($event)" ng-change="update('customer.electronic_communications_consent')" ng-class="{ 'suppress_red_bg': (form.customer_electronic_communications_consent.$error.custom &amp;&amp; form.customer_electronic_communications_consent.$dirty) }" ng-model="customer.electronic_communications_consent" type="checkbox" />
                </span>
                <label for="customer_electronic_communications_consent" ng_class="{ 'label': true }" class="label">
                <small>
                <strong>I read, understand, and consent to:</strong>
                </small>
                </label>
                </div>



                <ul class="app-form__consent-list list-bullet">
                <li ng-hide="">
                <small>
                the <button onClick="" ng-click="loadStaticModal('/customer_application_renderer/v3/modals/electronic_communications_consent.html')" neuro-region-question="ques_1eQzLpeo5pF2rH99">Electronic Communications Agreement</button>, <button onClick="" ng-click="loadStaticModal('/customer_application_renderer/v3/modals/credit_report_authorization.html')" neuro-region-question="ques_1eQzLpjgzDPKo3ML">Credit Report Pull Authorization</button>, <button onClick="" ng-click="loadStaticModal('/customer_application_renderer/v3/modals/terms_of_use.html')" neuro-region-question="ques_1eQzLp2JF2AFyqMs">Terms of Use</button>, <button onClick="" ng-click="loadStaticModal('/customer_application_renderer/v3/modals/call_and_text.html')" neuro-region-question="ques_1eQzLp5C5pO6a1gX">Consent to Receive Calls &amp; SMS Messages</button>, <button href="https://www.avant.com/avant-privacy-notice" target="_blank" rel="noreferrer" neuro-region-question="ques_1eQzLpSI6ft2Poqr">Avant's Privacy Notice</button>, and <button href="https://www.avant.com/webbank-privacy-notice" target="_blank" rel="noreferrer" neuro-region-question="ques_1eQzLpczmsq0RJS6">WebBank's Privacy Notice</button>.

                </small>
                <input ng-init="customer.credit_report_authorization = customer.credit_report_authorization || true" ng-model="customer.credit_report_authorization" type="hidden" autocomplete="off" class="ng-pristine ng-untouched ng-valid ng-not-empty"/>


                <input ng-init="customer_consent.receive_calls_about_account = customer_consent.receive_calls_about_account || true" ng-model="customer_consent.receive_calls_about_account" type="hidden" autocomplete="off" class="ng-pristine ng-untouched ng-valid ng-not-empty" />


                <input ng-init="customer.privacy_policy_consent = customer.privacy_policy_consent || true" ng-model="customer.privacy_policy_consent" type="hidden" autocomplete="off" class="ng-pristine ng-untouched ng-valid ng-not-empty"/>


                <input ng-init="customer_consent.terms_of_use = customer_consent.terms_of_use || true" ng-model="customer_consent.terms_of_use" type="hidden" autocomplete="off" class="ng-pristine ng-untouched ng-valid ng-not-empty" />


                </li>
                <li ng-hide="">
                <small>
                Avant, its affiliates, and WebBank sharing among them any transaction history related to my financial products or services received through Avant or serviced by Avant for the purpose of evaluating me for credit. I specifically direct WebBank and Avant to use consumer reports to consider me for other credit products offered by WebBank if not approved for a loan and I satisfy eligibility criteria for the type of credit that may be offered.
                </small>
                </li>
                <span ng-switch="customer_address.state">
                
                </span>

                </ul>

              </div>
              <fieldset className='fieldset'>
                <legend>Submit button</legend>
                <Button 
                  padding="12px 30px" 
                  color='#fff' 
                  width='100%'
                  bgColor="#fff" 
                  colorHover="#2382ce" 
                  borderColor="2px solid #2382ce" 
                  // background="#fff"
                  background= "#2382ce"
                  fontSize="15px"
                  border="2px solid #fff"
                  gap="15px"
                  // onClick={handleSubmit}
                  >
                    <UilPadlock className="pad-lock"/>
                    Agree and Check Your Loan Options
                    <UilAngleRight />
                    
              </Button>
                <div class="app-form__rate-disclaimer">
                <div class="app-form__rate-disclaimer-dec">
                <img ng-src="https://d3j4a0a64un2pg.cloudfront.net/avant/7.8.5/dec-rates-arrow.svg" alt='' src="https://d3j4a0a64un2pg.cloudfront.net/avant/7.8.5/dec-rates-arrow.svg" />
                </div>
                <div class="app-form__rate-disclaimer-blurb heading--large" ng-class="{ 'heading--large': true }">
                Checking your loan options does not affect your credit score.
                </div>
                </div>

              </fieldset>
            </div>
            <section ng-class="{ 'form-counter__step': false, 'loan-result': false, 'form-counter__step--disabled': false }">
              <div class="app-form__legal">
              <small>
              <strong class="app-form__legal-header">Important information about procedures for opening a new account:</strong>
              To help the government fight the funding of terrorism and money laundering activities, Federal law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account. What this means for you: When you open an account, we will ask for your name, address, date of birth, and other information that will allow us to identify you. We may also ask to see your driver's license or other identifying documents.
              </small>
<br />
<br />
              <small>
              Copyright 2023
              Avant, LLC. All rights reserved. Need help? 800-712-5407
              </small>

              </div>

              </section>
          </form>
        </article>
        <aside class="col__short-right">
          <div class="app-aside">
          <div class="app-aside__widget">
          <div class="trustpilot-widget trustpilot-widget-sidebar" data-businessunit-id="551cfda10000ff00057e75b0" data-locale="en-US" data-stars="1,2,3,4,5" data-style-height="350px" data-style-width="100%" data-tags="Experience" data-template-id="539ad0ffdec7e10e686debd7" data-theme="light"><iframe title="Customer reviews powered by Trustpilot" loading="auto" src="https://widget.trustpilot.com/trustboxes/539ad0ffdec7e10e686debd7/index.html?businessunitId=551cfda10000ff00057e75b0&amp;templateId=539ad0ffdec7e10e686debd7#locale=en-US&amp;stars=1%2C2%2C3%2C4%2C5&amp;styleHeight=350px&amp;styleWidth=100%25&amp;tags=Experience&amp;theme=light"></iframe></div>
          </div>

          <div class="app-aside__widget">
          <div class="app-aside__data">
          <h3 class="app-aside__header headline--small-bold">Security &amp; Privacy are #1</h3>
          <small>We use 128-bit SSL protection and strict, high levels of security &amp; encryption standards.</small>
          </div>
          <div class="app-aside__thumb">
          <img alt="Security Privacy" src="https://demusnq8ggs2.cloudfront.net/assets/v3/icons/security-seal-2c2e36ca97285e8d0211bb29171f4c87.png" />
          </div>
          </div>

          <div class="app-aside__widget">
          <div class="app-aside__data">
          <h3 class="app-aside__header headline--small-bold">Questions? We can help.</h3>
          <small>
          Call us at 800-712-5407 or
          <a href="/faq" target="_blank">
          read our FAQ
          </a>
          </small>
          </div>
          <div class="app-aside__thumb">
          <img alt="Chat or FAQ" src="https://demusnq8ggs2.cloudfront.net/assets/v3/support-faces/1-1e665397362a4ea3354b3dca69870f37.jpg" />
          </div>
          </div>

          <div class="app-aside__widget">
          <div class="app-aside__logo">
          <img alt="Better Business Bureau" src="https://demusnq8ggs2.cloudfront.net/assets/v3/icons/bbb-21f0cd6bd17594c9fcd10f7cf7dd8780.png" />
          </div>
          <div class="app-aside__logo">
          <div class="" data-language="en" id="DigiCertClickID_p0PhGTT3_1">
            <div id="DigiCertClickID_p0PhGTT3Seal">
              <img src="//seal.digicert.com/seals/cascade/?tag=p0PhGTT3&amp;referer=www.avant.com&amp;format=png&amp;lang=en&amp;seal_number=11&amp;seal_size=s&amp;an=min" alt="DigiCert Secured Site Seal" tabindex="0" role="link" />
            </div>
          </div>

          </div>
          </div>

          </div>
        </aside>
      </div>
    </div>
  )
}

export default Loans
