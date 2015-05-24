// HOVER JS //
$(document).ready(function() {
    $("[rel='tooltip']").tooltip();    
 
    $('.thumbnail').hover(
        function(){
            $(this).find('.caption').fadeIn(250); //slideDown(250)
        },
        function(){
            $(this).find('.caption').fadeOut(250); //.slideDown(205)
        }
    );

    $(".disabled-link").hover(
    	function() {
    		$(this).find('.error').preventDefault();
    	}
    ); 
});

// RESUMEBUILDER HELPER JS INITIALIZER //
if(document.getElementsByClassName('flex-item').length === 0) {
	document.getElementById('topContacts').style.display = 'none';
}
if(document.getElementsByTagName('h1').length === 0) {
	document.getElementById('header').style.display = 'none';
}
if(document.getElementsByClassName('work-entry').length === 0) {
	document.getElementById('workExperience').style.display = 'none';
}
if(document.getElementsByClassName('project-entry').length === 0) {
	document.getElementById('projects').style.display = 'none';
}
if(document.getElementsByClassName('education-entry').length === 0) {
	document.getElementById('education').style.display = 'none';
}
if(document.getElementsByClassName('flex-item').length === 0) {
	document.getElementById('letsConnect').style.display = 'none';
}
if(document.getElementById('map') === null) {
	document.getElementById('mapDiv').style.display = 'none';
}

// BIO, EDU, WORK, PROJECT JSONS //
var bio = { //Object Literal Notation//
	"name" : "Sherman Hui",
	"role" : "Web Developer",
	"age" : 24,
	"contacts" : {
		"mobile" : "",
		"email" : "sherman.sy.hui@gmail.com",
		"github" : "github.com/shui91",
		"location" : "Vancouver"
	},
	"welcomeMessage" : "lorem ipsum dolor sit amet etc",
	"skills" : [
	"HTML", "CSS", "Javascript", "JQuery", "Python"
	],
	"picture" : "http://loremflickr.com/g/320/240/paris",
	"display" : "to be filled"
}

var education = {
	"schools" : [
		{
			"name" : "University of British Columbia",
			"location" : "2329 West Mall, Vancouver, BC V6T 1Z4",
			"degree" : "Bachelor of Arts",
			"major" : "Economics",
			"dates" : "2009 - 2014"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Introduction to Python (Part I)",
			"school" : "Rice University",
			"dates" : "April 2015 ",
			"url" : "string"
		},
		{
			"title" : "Introduction to Python (Part II)",
			"school" : "Rice University",
			"dates" : "May 2015",
			"url" : "string"	
		},
		{
			"title" : "Front End Developer Nanodegree",
			"school" : "Udacity",
			"dates" : "May 2015",
			"url" : "string"
		}
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "TD Canada Trust",
			"title" : "Customer Service Representative",
			"location" : "8100 No.2 Road Unit 145, Richmond, BC",
			"dates" : "September 2014 to present",
			"description" : "my current gig"
		},
		{
			"employer" : "University of British Columbia - Faculty of Arts",
			"title" : "Communications Assistant",
			"location" : "Buchanan Bldg, The University of British Columbia Vancouver, BC V6T 1Z1",
			"dates" : "April 2013 to September 2014",
			"description" : "my current gig"
		},
		{
			"employer" : "Centre for Teaching, Learning and Technology",
			"title" : "Marketing and Communications Assistant",
			"location" : "214 - 1961 East Mall, Irving K. Barber Learning Centre, Vancouver, BC V6T 1Z1",
			"dates" : "Jan 2013 to April 2013",
			"description" : "my current gig"
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Portfolio Website",
			"dates" : "May 2015",
			"description" : "Built an online portfolio to display past projects",
			"images" : [
				{
					"image 1" : "http://loremflickr.com/g/320/240/paris",
					"image 2" : "http://loremflickr.com/g/320/240/boston"
				}
			]
		}
	]
}

// NAME, ROLE, PIC & WELCOME MESSAGE //

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPic = HTMLbioPic.replace("%data%", bio.picture)
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPic);
$("#header").append(formattedWelcome);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
		var formattedSkill= HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}

// CONTACT INFO TOP & BOTTOM //

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);

//var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
//$("#topContacts").append(formattedMobile);
//$("#footerContacts").append(formattedMobile);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").prepend(formattedLocation);

// DISPLAY FUNCTIONS //

// WORK //
work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
	
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
	
		$(".work-entry:last").append(formattedEmployerTitle);
	
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
	
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

work.display();

// PROJECTS //
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);	
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image_object in projects.projects[project].images){
				for (indy_images in projects.projects[project].images[image_object]){
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image_object][indy_images]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}
}

projects.display();

// EDU //
education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}

	$("#education").append(HTMLonlineClasses);
	for (onlineCourse in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		$(".education-entry:last").append(formattedTitle);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		$(".education-entry:last").append(formattedSchool);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(formattedURL); 
  	}
}

education.display();

//$("#mapDiv").append(googleMap);//

// END DISPLAYS //

/*function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0]+ " " +name[1];
}

$('#main').append(internationalizeButton);*/
