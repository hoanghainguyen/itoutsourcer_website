(function() {
	$("#termAndCondition").click(function(){
		if(this.checked){
			$("#submitButton").removeAttr("disabled");
		} else {
			$("#submitButton").attr("disabled", true);
		}
		
	});
	$("#submitButton").click(function(){
	    $("#registrationForm").bootstrapValidator({
	        feedbackIcons: {
	            valid: 'glyphicon glyphicon-ok',
	            invalid: 'glyphicon glyphicon-remove',
	            validating: 'glyphicon glyphicon-refresh' 
	        },
	        fields: {
	            userFirstname: {
	                validators: {
	                    notEmpty: {
	                        message: 'This field is required'
	                    }
	                }
	            },
	            userLastname: {
	                validators: {
	                    notEmpty: {
	                        message: 'This field is required'
	                    }
	                }
	            },
	            userEmail: {
	                validators: {
	                    notEmpty: {
	                        message: 'This field is required'
	                    },
	                    emailAddress: {
	                        message: 'The email address is not valid'
	                    }
	                }
	            },
	            userTelephone: {
	                validators: {
	                    regexp: {
	                        regexp: /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/,
	                        message: 'Telephone number is not valid'
	                    }
	                }
	            },
	            userTopics: {
	                validators: {
	                    notEmpty: {
	                        message: 'This field is required'
	                    }
	                }
	            },
				userOganization: {
	                validators: {
	                    notEmpty: {
	                        message: 'This field is required'
	                    }
	                }
	            },
				userNumberphone: {
	                validators: {
	                    notEmpty: {
	                        message: 'This field is required'
	                    }
	                }
	            },
				userFunction: {
	                validators: {
	                    notEmpty: {
	                        message: 'This field is required'
	                    }
	                }
	            },
	            userWebsite: {                          
	                validators: {
	                    regexp: {
	                        regexp: /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/,
	                        message: 'The website address is not valid'
	                    }
	                }
	            }
	        }           
	    });
	});
})();