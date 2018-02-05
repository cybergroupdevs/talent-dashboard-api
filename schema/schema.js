collections = {
	employee:{
		firstName:        		{ type: String, default: '' },
		middleName:       		{ type: String, default: '' },
		lastName:         		{ type: String, default: '' },
		displayName:         	{ type: String, default: '' },
		userName:         		{ type: String, required : true, default: '', validate: [isValidUserName, 'Please do not use special characters: % < > : - # / & ` and including SPACE in your username and it should be between 4 to 32 characters.'] },
		emailAddress:     		{ type: String, required: true, validate:[isValidEmailAddress, 'Provided email address is not valid']},
		countryCode:     		{ type: String, default: '' },
		mobileNumber:     		{ type: String, default: '' },
		dateOfBirth:      		{ type: Date,   default: '' },
		gender:           		{ type: String, required: true,enum: ['M', 'F'], default: 'M' },
		location:         		{ type: String},
		address:         		{ type: String, default: '' },
		city:             		{ type: String, default: '' },
		county:           		{ type: String, default: '' },
		state:            		{ type: String, default: '' },
		zipCode:          		{ type: String, default: '' },
		placeMark:              { type: String, default: '' },
		isActive:         		{type:  Boolean,default: true},
		isAdmin:                {type: Boolean, default: false},
		isDelete:               {type: Boolean, default: false},
		isBlockedByAdmin:  		{type:  Boolean,default: false},
		passwordHash:     		{ type: String, required: true, default: '' },
		passwordSalt:     		{ type: String, required: true, default: '' },
		password:     			{ type: String, required: true, default: '' },
		imageURL:				{type:String,required:false},
		userType:           	{ type: String, required: true, enum: ['USER', 'ADMIN'], default: 'USER' },
		authToken:        		{ type: String, default: '' },
		bio:          			{ type: String, default: '' },
		tags                    :[],
		subscribeBlogger        :[],
		technicalSkills			:[],
		createdAt:        		{type:  Date,   default: Date.now},
		updatedAt:        		{type:  Date,   default: Date.now}
	}
};

function isValidUserName(name){
	var username_regex = new RegExp(/^[a-zA-Z0-9_@\.]{4,32}$/);
	return username_regex.test(name);	
}

function isValidEmailAddress(email){
	var emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i);	
	return emailRegex.test(email);
}
function validationError(err){
		message = []
		if (err) {
			for (field in err.errors) {
				message.push(err.errors[field].message);
			}
		}
		return message
}
module.exports.collections = collections;
module.exports.checks = {
	validateUserName:isValidUserName,
	validateEmailAddress:isValidEmailAddress,
	validationError:validationError
};