const config = require('./data/config');

module.exports = {
	siteMetadata: {
		site_url: config.url,
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		'gatsby-plugin-netlify',
		'gatsby-plugin-catch-links',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: ['Open Sans', 'Raleway'],
			},
		},
		{
			resolve: 'gatsby-plugin-canonical-urls',
			options: {
				siteUrl: config.url,
			},
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: config.googleAnalyticsID,
				head: true,
			},
		},
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: config.themeColor,
				showSpinner: false,
			},
		},
		/* {
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'img',
				path: `${__dirname}/src/images/`
			}
		}, */
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Gatsby',
				short_name: 'Gatsby',
				start_url: '/',
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: 'minimal-ui',
				icons: [
					{
						src: '/favicon/android-icon-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: 'ms-icon-310x310.png',
						sizes: '310x310',
						type: 'image/png',
					},
				],
			},
		},
		// 'gatsby-plugin-offline'
	],
};
