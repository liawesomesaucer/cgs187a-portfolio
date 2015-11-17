// Projects = new Mongo.Collection("projects");
ProjectJSON = [
	{
		'name': 'KingMaker',
		'description': "This is kingmaker, a game-changing web app designed to streamline payments using PayPal's API and a cutting-edge facial recognition system using OpenCV. I worked on the server and designing and implementing the frontend. Built at Money2020 Vegas 2015 with a team of 5.  I focused on the frontend development, handling incoming data from our CV backend and converting them into pleasant and readable format.",
		'short_description': "Seamless facial recognition checkouts.",
		'accent_color': '#48615d',
		'url':'/kingmaker',
		'img_url': '/images/kingmaker.png',
		'background_url': '/images/kingmaker-background.png'
	},
	{
		'name': 'BitMonster',
		'description': "This won CalHacks 2.0's BlockChain API Challenge.  BitMonster eases the transition from social payment apps like Venmo to full-fledged, secure transactions with BitCoin.  With an intuitive UI, social aspect of transactions, and endless free aliases, BitMonster allows you to manage your funds and make secure and easy payments like never before.  In a team of 3, I focused on creating an intuitive UI and responsive buttons and forms.",
		'short_description': "Anonymous Venmo for BitCoins.",
		'accent_color': '#484c61',
		'url': '/bitmonster',
		'img_url':'/images/bitmonster.png',
		'background_url': '/images/bitmonster-background.png'
	},
	{
		'name': 'Tute',
		'description': "Imagine a world where you could get paid for studying well, and spend a bit of that for expert lessons on other, more difficult subjects.  Enter Tute.  Tute eliminates the middleman of traditional tutoring centers, allowing people to directly tutor each other for cash, allowing for cheaper and more personalized results.  Tute was built with a team of 5, with an android and webapp.  I worked on the design and implementation of the webapp.",
		'short_description': "Uber for tutors.",
		'accent_color': '#333',
		'url': '/tute',
		'img_url': '/images/tute.png',
		'background_url': '/images/tute-background.png',
	},
	{
		'name': 'Multiple Search',
		'description': 'All your search bars on one page.  A self-project involving the use of JavaScript cookies and lots of jQuery, with an intuitive navigation bar and prominent, well-placed search bars.',
		'short_description': 'All your search bars on one page',
		'accent_color': '#006666',
		'url': '/multisearch',
		'img_url': '/images/multiple_search.png',
		'background_url': '/images/multiple_search.png',
	},
]
SkillsJSON = [
	{
		'name': 'Python',
		'color': 'blue',
		'width': '90%',
		'mastery': 'expert'
	},
	{
		'name': 'JavaScript',
		'color': 'red',
		'width': '80%',
		'mastery': 'experienced'
	},
	{
		'name': 'Design',
		'color': '#3d0099',
		'width': '70%',
		'mastery': 'advanced'
	},
	{
		'name': 'School',
		'color': '#666',
		'width': '40%',
		'mastery': 'bad'
	},
	{
		'name': 'C++',
		'color': '#006666',
		'width': '80%',
		'mastery': 'experienced'
	},
]
Router.route('/', function() {
	var projectList = ProjectJSON;
	var skillList = SkillsJSON;
	this.render('Index', {data: {projectList: projectList, skillList: skillList}});
	// this.render( 'Footer');

});
Router.route('portfolio', function() {
	var projectList = ProjectJSON;
	this.render('Portfolio', {data: {projectList: projectList}});
})
Router.route('project/:project', function() {
	var projectList = ProjectJSON;

	for (var i=0; i<projectList.length; i++) {
		console.log(projectList[i].name);
		if (projectList[i].name.toLowerCase() === this.params.project.toLowerCase()) {
			item = projectList[i];
			break;
		}
	}
	var projectName = item['name'];
	var description = item['description'];
	var img_url = item['img_url'];
	var accent_color = item['accent_color'];
	// Send data on thingy maybe idk
	this.render( 'Project', {data:{ projectName: projectName, description:description, img_url: img_url, accent_color:accent_color}});
	// this.render( 'Footer');
});