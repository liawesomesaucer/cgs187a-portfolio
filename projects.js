// Projects = new Mongo.Collection("projects");
ProjectJSON = [
	{
		'name': 'KingMaker',
		'description': "This is kingmaker, a game-changing web app designed to streamline payments using PayPal's API and a cutting-edge facial recognition system using OpenCV. I worked on the server and designing and implementing the frontend. Built at Money2020 Vegas 2015 with a team of 5.",
		'short_description': "Seamless facial recognition checkouts.",
		'accent_color': '#2ec866',
		'url':'/kingmaker',
		'img_url': '/images/kingmaker.png',
		'background_url': '/images/kingmaker-background.png'
	},
	{
		'name': 'BitMonster',
		'description': "This won CalHacks 2.0's BlockChain API Challenge",
		'short_description': "Anonymous Venmo for BitCoins.",
		'accent_color': '#484c61',
		'url': '/bitmonster',
		'img_url':'/images/bitmonster.png',
		'background_url': '/images/bitmonster-background.png'
	},
	{
		'name': 'Tute',
		'description': "Lorem Ipsum",
		'short_description': "Uber for tutors.",
		'accent_color': '#ffffff',
		'url': '/tute',
		'img_url': '/images/tute.png',
		'background_url': '/images/tute-background.png',
	},
	{
		'name': 'Multiple Search',
		'description': 'All your search bars on one page',
		'short_description': 'All your search bars on one page',
		'accent_color': '#006666',
		'url': '/multiple-search',
		'img_url': '/images/multiple_search.png',
		'background_url': '/images/multiple_search.png',
	},
]

Router.route('/', function() {
	var projectList = ProjectJSON;
	this.render('Index', {data: {projectList: projectList}});
	// this.render( 'Footer');

});
Router.route('project/:project', function() {
	var projectList = ProjectJSON;

	for (var i=0; i<projectList.length; i++) {
		console.log(projectList[i].name);
		if (projectList[i].name.toLowerCase() == this.params.project.toLowerCase()) {
			item = projectList[i];
			break;
		}
	}
	var projectName = item['name'];
	var description = item['description'];
	var img_url = item['img_url']
	// Send data on thingy maybe idk
	this.render( 'Project', {data:{ projectName: projectName, description:description, img_url: img_url}});
	// this.render( 'Footer');
});