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

// BIO, EDU, WORK, PROJECT JSONS //
// var bio = { //Object Literal Notation//
// 	"name" : "Sherman Hui",
// 	"role" : "Web Developer",
// 	"age" : 24,
// 	"contacts" : {
// 		"mobile" : "",
// 		"email" : "sherman.sy.hui@gmail.com",
// 		"github" : "github.com/shui91",
// 		"location" : "Vancouver"
// 	},
// 	"welcomeMessage" : "lorem ipsum dolor sit amet etc",
// 	"skills" : [
// 	"HTML", "CSS", "Javascript", "JQuery", "Python"
// 	],
// 	"picture" : "http://loremflickr.com/g/320/240/paris",
// 	"display" : "to be filled"
// }

var bio = {
	"name" : "Sherman Hui",
	"role" : "Web Developer",
	"location" : "Vancouver",
	"descriptions" : [
		"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper Aenean ultricies mi vitae est. Mauris placerat eleifend leo.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper Aenean ultricies mi vitae est. Mauris placerat eleifend leo.", "Eleifend leo.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper Aenean ultricies mi vitae est. Mauris placerat eleifend leo.", "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper Aenean ultricies mi vitae est. Mauris placerat eleifend leo.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper Aenean ultricies mi vitae est. Mauris placerat eleifend leo.", "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper Aenean ultricies mi vitae est. Mauris placerat eleifend leo.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
	"skills" : [
	"HTML", "CSS", "JavaScript", "jQuery", "Python", "WordPress"
	],
	"picture" : "https://placeimg.com/555/333/tech",
	"contacts" : {
		"mobile" : "604-442-7825",
		"email" : "sherman.sy.hui@gmail.com",
		"github" : "github.com/shui91",
		"location" : "Vancouver"
	}
}

var education = {
	"schools" : [
		{
			"name" : "University of British Columbia",
			"location" : "2329 West Mall, Vancouver, BC V6T 1Z4",
			"degree" : "Bachelor of Arts",
			"major" : "Economics",
			"dates" : "2009 - 2014",
			"description" : "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper Aenean ultricies mi vitae est. Mauris placerat eleifend leo.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
		},
		{
			"name" : "Udacity",
			"location" : "",
			"degree" : "Frontend Developer Nanodegree",
			"major" : "Web Development",
			"dates" : "May 2015",
			"description" : "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper Aenean ultricies mi vitae est. Mauris placerat eleifend leo.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
		}
	]//, CODE BELOW FOR REFERENCE FOR ONLINE CLASSES
	// "onlineCourses" : [
	// 	{
	// 		"title" : "Introduction to Python (Part I)",
	// 		"school" : "Rice University",
	// 		"dates" : "April 2015 ",
	// 		"url" : "string"
	// 	},
	// 	{
	// 		"title" : "Introduction to Python (Part II)",
	// 		"school" : "Rice University",
	// 		"dates" : "May 2015",
	// 		"url" : "string"	
	// 	},
	// 	{
	// 		"title" : "Front End Developer Nanodegree",
	// 		"school" : "Udacity",
	// 		"dates" : "May 2015",
	// 		"url" : "string"
	// 	}
	// ]
}

var work = {
	"jobs" : [
		{
			"employer" : "TD Canada Trust",
			"title" : "Customer Service Representative",
			"location" : "8100 No.2 Road Unit 145, Richmond, BC",
			"dates" : "September 2014 to present",
			"description" : "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper Aenean ultricies mi vitae est. Mauris placerat eleifend leo.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
		},
		{
			"employer" : "University of British Columbia - Faculty of Arts",
			"title" : "Communications Assistant",
			"location" : "Buchanan Bldg, The University of British Columbia Vancouver, BC V6T 1Z1",
			"dates" : "April 2013 to September 2014",
			"description" : "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper Aenean ultricies mi vitae est. Mauris placerat eleifend leo.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
		},
		{
			"employer" : "Centre for Teaching, Learning and Technology",
			"title" : "Marketing and Communications Assistant",
			"location" : "214 - 1961 East Mall, Irving K. Barber Learning Centre, Vancouver, BC V6T 1Z1",
			"dates" : "Jan 2013 to April 2013",
			"description" : "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper Aenean ultricies mi vitae est. Mauris placerat eleifend leo.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
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

work.display = function() {
		var formattedHeader = HTMLworkHeader
		$(".work-container").prepend(HTMLworkHeader);

	for (job in work.jobs) {

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedEmployerInfo = formattedEmployer + formattedTitle + formattedDates;
	
		$(".work-exp-row").append(formattedEmployerInfo);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-item:last").append(formattedDescription);
	}
}

work.display();

education.display = function() {
	$(".education-container").prepend(HTMLschoolHeader);
	for (school in education.schools) {

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

		var formattedEduList = (formattedName + formattedDegree + formattedMajor + formattedDates);
		$(".education-list").append(formattedEduList);


		var formattedDescription = HTMLschoolDescription.replace("%data%", education.schools[school].description);
		$(".education-item:last").append(formattedDescription);
	}
// COMBINED ONLINE EDU W/ EDU CODE BELOW IS FOR REFERENCE // 
	// $(".education-container").append(HTMLonlineStart);
	// for (onlineCourse in education.OnlineCourses) {
	// 	var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
	// 	var formattedSchool = HTMLonlineSchool.replace("%data$", education.onlineCourses[onlineCourse].school);
	// 	var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
	// 	var formattedURL = HTMLonlineURL.replace("%data", education.onlineCourses[onlineCourse].url);

	// 	var formattedOnlineEdu = (formattedTitle + formattedSchool + formattedOnlineDates + formattedURL);
	// 	$(".online-ed:last").append(formattedOnlineEdu);
	// }
}

education.display();

bio.display = function(){
	$('.skills-container').prepend(HTMLskillsHeader);
	$('.profile-container').prepend(HTMLprofileHeader);

	var formattedPic = HTMLprofilePic.replace("%data%", bio.picture)
	$('.profile-info').append(formattedPic);
	$('.profile-info').append(HTMLprofilePara);

	for (skill in bio.skills) {
		var formattedSkill = HTMLskillsItem.replace("%data%", bio.skills[skill])
		$(".skills-list").append(formattedSkill);
	}

	for (description in bio.descriptions) {
		var formattedDescription = HTMLprofileInfo.replace("%data%", bio.descriptions[description])
		$(".profile-para").append(formattedDescription)
	}
}

bio.display();

$("#mapDiv").append(googleMap);



// NAME, ROLE, PIC & WELCOME MESSAGE //

// var formattedName = HTMLheaderName.replace("%data%", bio.name);
// var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// var formattedPic = HTMLbioPic.replace("%data%", bio.picture)
// var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);
// $("#header").append(formattedPic);
// $("#header").append(formattedWelcome);

// if (bio.skills.length > 0) {
// 	$("#header").append(HTMLskillsStart);
// 	for (skill in bio.skills) {
// 		var formattedSkill= HTMLskills.replace("%data%", bio.skills[skill]);
// 		$("#skills").append(formattedSkill);
// 	}
// }

// DISPLAY FUNCTIONS //


// // PROJECTS //
// projects.display = function() {
// 	for (project in projects.projects) {
// 		$("#projects").append(HTMLprojectStart);

// 		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
// 		$(".project-entry:last").append(formattedTitle);
// 		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
// 		$(".project-entry:last").append(formattedDates);	
// 		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
// 		$(".project-entry:last").append(formattedDescription);

// 		if (projects.projects[project].images.length > 0) {
// 			for (image_object in projects.projects[project].images){
// 				for (indy_images in projects.projects[project].images[image_object]){
// 					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image_object][indy_images]);
// 					$(".project-entry:last").append(formattedImage);
// 				}
// 			}
// 		}
// 	}
// }

// projects.display();

// END DISPLAYS //

/*function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0]+ " " +name[1];
}

$('#main').append(internationalizeButton);*/
