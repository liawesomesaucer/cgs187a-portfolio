// Projects = new Mongo.Collection("projects");
ProjectJSON = [
	{
		'name': 'KingMaker',
		'description': "This is kingmaker, a game-changing web app designed to streamline payments using PayPal's API and a cutting-edge facial recognition system using OpenCV. I worked on the server and designing and implementing the frontend. Built at Money2020 Vegas 2015 with a team of 5.  I focused on the frontend development, handling incoming data from our CV backend and converting them into pleasant and readable format." + 
						"  I worked on the design and implementation of the webapp, focusing on displaying loads of similar transactions in an orderly but intriguing fashion.  The transaction feed would live update as the backend sent facial recognition data to it.  I also implemented a frontpage emulating top-level SaaS companies' for our final pitch (to PayPal).",
		'short_description': "Seamless facial recognition checkouts.",
		'accent_color': '#48615d',
		'url':'/kingmaker',
		'img_url': '/images/kingmaker.png',
		'background_url': '/images/kingmaker-background.png',
		'link_url':'http://kingmaker.meteor.com',
	},
	{
		'name': 'Exposr',
		'description': 	"Location-based photography sharing site for sharing beautiful photographs and finding inspiration.  " +
						"Built for COGS187A.  Backend built with Python-Flask deployed on Heroku; photos stored in AWS." +
						"Team of 5. I worked on design and most of the implementation.",
		'short_description': 'Stunning photographic inspiration.',
		'accent_color': '#3e3955',
		'url': '/exposr',
		'img_url': '/images/exposr1.png',
		'background_url': '/images/exposr1.png',
		'link_url':'http://xposr.herokuapp.com',
	},
	{
		'name': 'BitMonster',
		'description': "This won CalHacks 2.0's BlockChain API Challenge.  BitMonster eases the transition from social payment apps like Venmo to full-fledged, secure transactions with Bitcoin.  With an intuitive UI, social aspect of transactions, and endless free aliases, BitMonster allows you to manage your funds and make secure and easy payments like never before.  In a team of 3, I focused on creating an intuitive UI and responsive buttons and forms.",
		'short_description': "Anonymous Venmo for Bitcoins.",
		'accent_color': '#484c61',
		'url': '/bitmonster',
		'img_url':'/images/bitmonster.png',
		'background_url': '/images/bitmonster-background.png',
		'link_url':'http://bitmonster.herokuapp.com',
	},
	{
		'name': 'Tute',
		'description': "Imagine a world where you could get paid for studying well, and spend a bit of that for expert lessons on other, more difficult subjects.  Enter Tute.  Tute eliminates the middleman of traditional tutoring centers, allowing people to directly tutor each other for cash, allowing for cheaper and more personalized results.  Tute was built with a team of 4 at LAHacks 2015, with an android and webapp." + 
						"  I worked on the design and implementation of the webapp.  Firstly I thought about what a mostly mobile app would require from its web counterpart.  The webapp would need to present information in a fluid and enticing manner to get people to sign up for the mobile app." +
						"  It would need to be fast and responsive and present enough information and allow a quick way for people to sign up.  Therefore I decided on using multiple columns to display items, with attractive lines like 'get $ for teaching others', and more text on demand as the user scrolled."+
						"  It would then contain a form for conversions.  Ultimately, considering this was a hackathon project, I added a short description of the hackathon project and team members at its end to commemorate this project.",
		'short_description': "Uber for tutors.",
		'accent_color': '#333',
		'url': '/tute',
		'img_url': '/images/tute.png',
		'background_url': '/images/tute-background.png',
		'link_url':'http://liawesomesaucer.github.io/cosmic/templates/',
	},
	{
		'name': 'Multiple Search',
		'description': 'All your search bars on one page.  A self-project involving the use of JavaScript cookies and lots of jQuery, with an intuitive navigation bar and prominent, well-placed search bars.',
		'short_description': 'All your search bars on one page',
		'accent_color': '#006666',
		'url': '/multisearch',
		'img_url': '/images/multiple_search.png',
		'background_url': '/images/multiple_search.png',
		'link_url':'http://liawesomesaucer.github.io/multiple-search',
	}
]
SkillsJSON = [
	{
		'name': 'Python',
		'color': '#003366',
		'width': '90%',
		'mastery': 'experienced'
	},
	{
		'name': 'JavaScript',
		'color': '#660033',
		'width': '80%',
		'mastery': 'experienced'
	},
	{
		'name': 'Design',
		'color': '#553942',
		'width': '70%',
		'mastery': 'experienced'
	},
	{
		'name': 'HTML/CSS',
		'color': '#3e3955',
		'width': '80%',
		'mastery': 'experienced'
	},
	{
		'name': 'C++',
		'color': '#006666',
		'width': '70%',
		'mastery': 'experienced'
	},
]

Router.route('/', function() {
	var projectList = ProjectJSON;
	var skillList = SkillsJSON;
	this.render('Index', {data: {projectList: projectList, skillList: skillList}});
	$(window).scrollTop(0);
});
Router.route('portfolio', function() {
	var projectList = ProjectJSON;
	this.render('Portfolio', {data: {projectList: projectList}});
	$(window).scrollTop(0);

});
Router.route('project/:project', function() {
	var projectList = ProjectJSON;

	for (var i=0; i<projectList.length; i++) {
		// console.log(projectList[i].name);
		if (projectList[i].name && (projectList[i].name.toLowerCase() === this.params.project.toLowerCase())) {
			item = projectList[i];
			break;
		}
	}

	var projectName = item['name'];
	var description = item['description'];
	var img_url = item['img_url'];
	var accent_color = item['accent_color'];
	var link_url = item['link_url'];
	// Send data on thingy maybe idk
	this.render( 'Project', {data:{ projectName: projectName, description:description, img_url: img_url, accent_color:accent_color, link_url: link_url}});
	$(window).scrollTop(0);
});
