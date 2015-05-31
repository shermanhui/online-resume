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
		"Sherman Hui graduated with a Bachelor of Arts in Economics and a minor in Commerce at the University of British Columbia. Currently, he is working in the retail banking industry at TD Canada Trust. Although he has a formal degree under the belt, he felt that he wasn't truly satisfied with his education and had yet to find a career that inspires true passion.  ", "As of April 2015 he has been actively involved in Massively Open Online Courses (MOOCs) to broaden his skill sets and explore various fields to find his true passion. Currently, he is completing his Front End Nanodegree at Udacity and aims to complete the Full Stack Nanodegree track afterwards.", "Ultimately, Sherman hopes to attain a full-time entry level position as a Front End Developer and move on to a Full Stack position in the exciting and ever dynamic field of web development."],
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
			"description" : "As a student at UBC some of his best learning experiences came from his active involvment many extracurricular activities. He was the 2013 Community Deparment head of the largest social club on campus, the Chinese Varsity Club. Spear heading community initiatives such as blood drives, community driven campus-wide games, and other small scale volunteer events, taught him how to delegate and plan large events. Sherman was also CVC's executive of the year in 2014. He was also involved as an amabassador to first-year UBC students as a Orientations Leader, responsible for being their first point of contact on campus and working with a selected professor to organize their first lecture."
		}//,
		// {
		// 	"name" : "Udacity",
		// 	"location" : "",
		// 	"degree" : "Frontend Developer Nanodegree",
		// 	"major" : "Web Development",
		// 	"dates" : "May 2015",
		// 	"description" : "Udacity was the perfect blend of flexible learning that accomodated full-time work and minimized any financial risks. For a driven self-learner, Sherman enjoys the self-paced aspects of Udacity, as he can speed up the materials he is familiar with but dive deeper into unfamiliar content for a better understanding. The Nanodegree introduced a variety of skills such as Object Orientated Programming and the ability to research documentation for solutions. Sherman completed four large projects during the Nanodegree. The projects include an online portfolio, this responsive resume, a replica arcade game as well as a feed reader."
		// }
	], //CODE BELOW FOR REFERENCE FOR ONLINE CLASSES
	"onlineCourses" : [
		{
			"title" : "Introduction to Python (Part I)",
			"school" : "Rice University",
			"dates" : "April 2015 ",
			"url" : "https://www.coursera.org/account/accomplishments/verify/762MAG5HLH"
		},
		{
			"title" : "Introduction to Python (Part II)",
			"school" : "Rice University",
			"dates" : "May 2015",
			"url" : "https://www.coursera.org/account/accomplishments/verify/XXR7CGJCSC"	
		},
		{
			"title" : "Front End Developer Nanodegree",
			"school" : "Udacity",
			"dates" : "May 2015",
			"url" : "#"
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
			"description" : "As the first point of contact for clients at one of Canada's five big banks, my responsibilities included delivering legendary service and personalized advice for clients."
		},
		{
			"employer" : "University of British Columbia",
			"title" : "Communications Assistant",
			"location" : "Buchanan Bldg, The University of British Columbia Vancouver, BC V6T 1Z1",
			"dates" : "April 2013 to September 2014",
			"description" : "As a communications assistant, Sherman was responsible for managing and creating content for the Faculty of Arts websites. Eventually, he took the initiative to learn basic HTML and CSS skills to help the Communications team's web developers with minor web design tasks. The result of Sherman's proactivity contributed to an excellent reception among faculty clients and even resulting in winning a W3 award for the Faculty of Art's websites."
		},
		{
			"employer" : "Centre for Teaching, Learning and Technology",
			"title" : "Marketing and Communications Assistant",
			"location" : "214 - 1961 East Mall, Irving K. Barber Learning Centre, Vancouver, BC V6T 1Z1",
			"dates" : "Jan 2013 to April 2013",
			"description" : "The Marketing and Communications Assistant position revolved around creating and editing marketing material for the CTLT. Sherman helped create and edit a email newsletter made in Adobe Illustrator, that is regularly sent out to UBC's faculty. He was also responsible for maintaining and managing the CTLT's online blog."
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
					"image 1" : "https://placeimg.com/555/333/tech"//,
					//"image 2" : "http://loremflickr.com/g/320/240/boston"
				}
			]
		},
		{
			"title" : "Filler Project",
			"dates" : "May 2015",
			"description" : "Built an online portfolio to display past projects",
			"images" : [
				{
					"image 1" : "https://placeimg.com/555/333/tech"
				}
			]
		},
		{
			"title" : "Filler Website",
			"dates" : "May 2015",
			"description" : "Built an online portfolio to display past projects",
			"images" : [
				{
					"image 1" : "https://placeimg.com/555/333/tech"
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
	$(".education-container").append(HTMLonlineStart);
	$(".online-education-row").append(HTMLonlineHeader)
	for (onlineCourse in education.onlineCourses) {
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);

		var formattedOnlineEdu = (formattedTitle + formattedSchool + formattedOnlineDates + formattedURL);
		$(".online-education-row").append(formattedOnlineEdu);
	}
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

// // PROJECTS //
projects.display = function() {
	$('.portfolio-container').prepend(HTMLprojectHeader);
	for (project in projects.projects) {
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);	
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var formattedProjectInfo = (formattedTitle + formattedDates + formattedDescription)
		$(".portfolio-row:last").append(formattedProjectInfo);

		if (projects.projects[project].images.length > 0) {
			for (image_object in projects.projects[project].images){
				for (indy_images in projects.projects[project].images[image_object]){
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image_object][indy_images]);
					$(".project-item:last").append(formattedImage);
				}
			}
		}
	}
}
projects.display();



$('#mapDiv').prepend(HTMLmapHeader);
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

// END DISPLAYS //

/*function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0]+ " " +name[1];
}

$('#main').append(internationalizeButton);*/
