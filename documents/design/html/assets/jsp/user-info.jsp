<%@page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<script type="text/javascript"  src="<c:url value="/fo/vendor/bootstrap/dist/js/bootstrap-tagsinput.js"/>"></script>

<header>
    <h2>
        <spring:message code="user-info.title" />
    </h2>
</header>
<hr>
<div class="row">
    <form action="<c:url value="/fo/register" />" id="registrationForm" method="post" class="form-horizontal">
        <div class="form-group">
            <div class="col-lg-6">
                <input type="text" name="userFirstname" id="user_fristname" placeholder='<spring:message code="user-info.first-name" /> *' class="form-control input" />
            </div>
            <div class="col-lg-6">
                <input type="text" name="userLastname" id="user_lastname" placeholder='<spring:message code="user-info.last-name" /> *' class="form-control input" />
            </div>
        </div>
        <div class="form-group">
            <div class="col-lg-6">
                <input type="text" name="userEmail" id="user_email" placeholder='<spring:message code="user-info.email" /> *' class="form-control input" />
            </div>
            <div class="col-lg-6">
                <input type="text" name="userTelephone" id="user_phone_number" placeholder='<spring:message code="user-info.phone-number" />*' class="form-control input" />
            </div>
        </div>
        <div class="form-group">
            <div class="col-lg-6">
                <input type="text" name="userOrganisation" id="user_oganization" placeholder='<spring:message code="user-info.organization" />' class="form-control input" />
            </div>
            <div class="col-lg-6">
                <input type="text" name="userFunction" id="user_function" placeholder='<spring:message code="user-info.function" />' class="form-control input" />
            </div>
        </div>
        <div class="form-group">
            <div class="col-lg-6">
                <input type="text" name="userTwitter" id="twitter" class="form-control twitter input" />
            </div>
            <div class="col-lg-6">
                <input type="text" name="userWebsite" id="user_website" placeholder='<spring:message code="user-info.website" />' class="form-control input" />
            </div>
        </div>
        <div class="form-group">
            <div class="col-lg-6"><input type="text" id="user_social-network" placeholder="SOCIAL NERWORK" class="form-control input"></div>
            <div class="col-lg-6">
                <p class="content">Register with social accounts</p>
                <ul class="icons navbar-nav navbar-left top10px">
                    <li><a href="#"><span class="fa fa-lg fa-facebook"></span></a></li>
                    <li><a href="#"><span class="fa fa-lg fa-pinterest"></span></a></li>
                    <li><a href="#"><span class="fa fa-lg fa-linkedin"></span></a></li>
                    <li><a href="#"><span class="fa fa-lg fa-youtube"></span></a></li>
                    <li><a href="#"><span class="fa fa-lg fa-instagram"></span></a></li>
                 </ul> 
             </div>           
          </div>
        <div class="form-group">
            <div class="col-lg-12">
                <input type="text" name="userTopics" id="topics" data-role="tagsinput" placeholder='<spring:message code="user-info.topics" /> *' class="form-control input" />
            </div>
        </div>
        <div class="form-group">
            <div class="col-lg-12">
                <textarea name="userComment" id="user-comment" cols="20" rows="10" placeholder='<spring:message code="user-info.comment" />' ></textarea>
            </div>
        </div>
        <div class="form-group">
            <div class="col-lg-6">
                <div class="g-recaptcha" data-sitekey="6LcePAATAAAAAGPRWgx90814DTjgt5sXnNbV5WaW"></div>
            </div>
            <div class="col-lg-6">
                <label> <input type="checkbox" name="termAndCondition" id="termAndCondition" value="unit-in-group"><span class="content"><spring:message code="user-info.agreement" /> </span></label>
            </div>
        </div>
        <div class="form-group">
            <div class="col-lg-12 top15px">
                <button type="submit" id="submitButton"><spring:message code="user-info.button.submit" /></button>
            </div>
        </div>
    </form>
</div>
<script src='https://www.google.com/recaptcha/api.js'></script>
<script src='https://www.google.com/recaptcha/api.js?hl=es'></script>
<script type="text/javascript" src="<c:url value="/fo/js/register.js"/>"></script>
<script type="text/javascript" >
$( document ).ready(function() {
	$("#submitButton").attr("disabled", true);
});
</script>