const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

// This file empties the Users collection and inserts the users below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/tattooinfo');

// Previous React Setup with mongoDB

// Applying similar method to tattoo info

// Tattoo Artist dummy data
const userSeed = [
  {

    artistName: 'Kat',
    location: '2101 P Street',
    artistNumber: '9163851585',
    independent: 'shop',
    shopName: 'Royal Peacock',
    hourlyRate: 90,
    artistMin: 50,
    stylePref: 'Traditional',
    artistInsta: 'https://www.instagram.com/tattoos_of_instagram/?hl=en',
    shopLink: 'https://www.facebook.com/Royal-Peacock-Tattoo-Parlor-157554380944064/',
    artistBio: 'Been a tattoo artist for 7 years, local born and raised in Sacramento. Have quite an extensive portfolio, take a peek at the IG link!',
    artistComments: 'I mainly do traditional tattoos; however, I dabble in other styles. Message me to set-up a meeting. Deposit negotiable upon scope of work.',
    date: new Date(Date.now()),
  },
  {
    artistName: 'Dwayne',
    location: '5140 Folsom Blvd, Sacramento, CA 95819',
    artistNumber: '9163851585',
    independent: 'shop',
    shopName: 'Legacy Tattoo',
    hourlyRate: 110,
    artistMin: 70,
    stylePref: 'Tribal',
    artistInsta: 'https://www.instagram.com/tattoos_of_instagram/?hl=en',
    shopLink: 'http://www.legacyinktattoo.com/',
    artistBio: 'Been a tattoo artist for 20 years...need I say more?',
    artistComments: "I do tribal tattoos as a focus, but I'll do traditional, blackwork and small new school pieces. Deposit required for every tattoo, determined at appraisal.",
    date: new Date(Date.now()),
  },
  {
    artistName: 'Axle',
    location: '51219 19th St, Sacramento, CA 95811',
    artistNumber: '9163851585',
    independent: 'shop',
    shopName: 'The American Tradition Tattoo',
    hourlyRate: 80,
    artistMin: 100,
    stylePref: 'Traditional',
    artistInsta: 'https://www.instagram.com/tattoos_of_instagram/?hl=en',
    shopLink: 'http://www.tatsacto.com/',
    artistBio: "Been a tattoo artist for 12 years, moved to the Sacramento area from the bay. Have seen and tatted it all!",
    artistComments: "I specialize in tribal, but am open to other styles. Don't do new age stuff or minimalist garbage, not worth my time. Contact me for more info. $100 non-refundable deposit for me to produce a sketch. I am able to work with anyone within reason.",
    date: new Date(Date.now()),

  },
  {
    artistName: 'Lilly',
    location: '1021 2nd St, Sacramento, CA 95814',
    artistNumber: '9163851585',
    independent: 'shop',
    shopName: 'Capitol Ink',
    hourlyRate: 95,
    artistMin: 55,
    stylePref: 'Japanese',
    artistInsta: 'https://www.instagram.com/tattoos_of_instagram/?hl=en',
    shopLink: 'http://www.capitalinktattoo.com/',
    artistBio: "Been tattooing all my life. Not a complicated person, treat others as you want to be treated.",
    artistComments: "I love the Japanese tattoo style, focus heavily on it. I'll maybe do some traditional work if I'm interested in your design. $200 non-refundable deposit for sleeves and large pieces, I'll do free consulations for smaller ones.",
    date: new Date(Date.now()),
  },
  {
    artistName: 'Bronson',
    location: '1028 2nd St, Sacramento, CA 95814',
    artistNumber: '9163851585',
    independent: 'shop',
    shopName: 'River City Tattoo',
    hourlyRate: 50,
    artistMin: 20,
    stylePref: 'Japanese',
    artistInsta: 'https://www.instagram.com/tattoos_of_instagram/?hl=en',
    shopLink: 'http://www.rivercitytattoo.net/',
    artistBio: "Newer tattoo Artist, but do good work. Building my portfolio, open to negotiating pricing.",
    artistComments: "Focus on Japanese style, but am able to do other styles. Not very good at realism. Very good at small, minimalist type detailed tatts.",
    date: new Date(Date.now()),
  },
  {
    artistName: 'Brick',
    location: '1021 2nd St, Sacramento, CA 95814',
    artistNumber: '9163851585',
    independent: 'shop',
    shopName: 'Capitol Inkk',
    hourlyRate: 75,
    artistMin: 50,
    stylePref: 'New School',
    artistInsta: 'https://www.instagram.com/tattoos_of_instagram/?hl=en',
    shopLink: 'http://www.capitalinktattoo.com/',
    artistBio: "Cool dude looking to tattoo cool people. Keep a clean work area, personable and been told I'm funny...Don't laugh too hard, I have a needle in your arm...",
    artistComments: "I do all kinds of tattoos, but love new-age modern flare. Geometric, obtuse, and weird tatts. I'm up for a challenge. Contact me for more information, deposit negotiable.",
    date: new Date(Date.now()),
  },
  {
    artistName: 'Mary-Lu',
    location: '3216 Broadway, Sacramento, CA 95817',
    artistNumber: '9163851585',
    independent: 'Independent',
    shopName: 'N/A',
    hourlyRate: 125,
    artistMin: 100,
    stylePref: 'New School',
    artistInsta: 'https://www.instagram.com/tattoos_of_instagram/?hl=en',
    shopLink: 'N/A',
    artistBio: "Weird chick, looking to create some weird art...",
    artistComments: "I do only modern flare design tattoos. I'm not looking to repeat or copy images you've seen on pintrist or tumblr. Bring me something good. Deposit negotiable, open consultation. I'll tell you my opinion then.",
    date: new Date(Date.now()),

  },
  {
    artistName: 'Kirk',
    location: '1118 19th St, Sacramento, CA 95811',
    artistNumber: '9163851585',
    independent: 'shop',
    shopName: 'Monster Ink Tattoo',
    hourlyRate: 100,
    artistMin: 80,
    stylePref: 'Watercolor',
    artistInsta: 'https://www.instagram.com/tattoos_of_instagram/?hl=en',
    shopLink: 'https://www.facebook.com/Monster-Ink-Tattoo-132297156816531/',
    artistBio: "Was an art major, worked with all forms. Was gifted with paint, wasn't able to make ends meet as a “regular” artist, so I dabbled in a different medium: skin. Turns out, I'm pretty good at it.",
    artistComments: "I love watercolor, because of the challenge. I do other styles, love new age modern design. I do NOT do traditional. Contact me for information to set up a consulation, depending on the scope of the project. I may ask for a deposit.",
    date: new Date(Date.now()),

  },
  {
    artistName: 'Summer-ray',
    location: '1021 2nd St, Sacramento, CA 95814',
    artistNumber: '9163851585',
    independent: 'shop',
    shopName: 'Capitol Ink',
    hourlyRate: 40,
    artistMin: 40,
    stylePref: 'Minimalist',
    artistInsta: 'https://www.instagram.com/tattoos_of_instagram/?hl=en',
    shopLink: 'http://www.capitalinktattoo.com/',
    artistBio: "Focused artist. Looking to be big and grow my portfolio. Very talented at small pieces.",
    artistComments: "I love doing minimalist type of art. Can be detailed, up to a point. No deposit, $40 min. Hit me up.",
    date: new Date(Date.now()),

  },

  {
    artistName: 'Tom',
    location: '2504 Franklin Blvd, Sacramento, CA 95818',
    artistNumber: '9163851585',
    independent: 'shop',
    shopName: 'Old Republic Tattoo',
    hourlyRate: 140,
    artistMin: 100,
    stylePref: 'New School',
    artistInsta: 'https://www.instagram.com/tattoos_of_instagram/?hl=en',
    shopLink: 'https://www.oldrepublictattoo.co/',
    artistBio: "What up, don't take bio's very seriously. All you need to know is that I have been tattooing for a long time and have a portfolio to show for it.",
    artistComments: "I do all kinds of tattoos, but prefer modern design. Do dot work and watercolor, but prefer an artist twist. I'll do free consulations, but you'll need a deposit for me to start your tattoo. Willing to cooperate within reason.",
    date: new Date(Date.now()),

  },

  {
    artistName: 'Prudence',
    location: '5140 Folsom Blvd, Sacramento, CA 95819',
    artistNumber: '9163851585',
    independent: 'shop',
    shopName: 'Legacy Tattoo',
    hourlyRate: 60,
    artistMin: 60,
    stylePref: 'Tribal',
    artistInsta: 'https://www.instagram.com/tattoos_of_instagram/?hl=en',
    shopLink: 'http://www.legacyinktattoo.com/',
    artistBio: "Soft grunge. Direct opinions. If you don't like it, I don't care. I'll tell you whether or not I'll do your tattoo after a consultation.",
    artistComments: "I'll do virtually any tribal tattoo. Love the stuff. Any other ones, it's a 50/50 shot. But depending on the job I'll need a deposit. Hit me up for a consultation.",
    date: new Date(Date.now()),

  },

  {
    artistName: 'Karly',
    location: '1219 19th St, Sacramento, CA 95811',
    artistNumber: '9163851585',
    independent: 'shop',
    shopName: 'American Tradition Tattoo',
    hourlyRate: 80,
    artistMin: 80,
    stylePref: 'Traditional',
    artistInsta: 'https://www.instagram.com/tattoos_of_instagram/?hl=en',
    shopLink: 'http://www.tatsacto.com/',
    artistBio: "Local tattoo artist from humble beginnings. I may or may not tell you the story while ur under the needle.",
    artistComments: "I only do traditional style tattoos. Need a deposit, negotiable.",
    date: new Date(Date.now()),

  },

  {
    artistName: 'Carter',
    location: '1021 2nd St, Sacramento, CA 95814',
    artistNumber: '9163851585',
    independent: 'shop',
    shopName: 'Capitol Ink',
    hourlyRate: 75,
    artistMin: 40,
    stylePref: 'Tribal',
    artistInsta: 'https://www.instagram.com/tattoos_of_instagram/?hl=en',
    shopLink: 'http://www.capitalinktattoo.com/',
    artistBio: "Don't take anything too seriously...except tattooing. Take a look at the gram.",
    artistComments: "I like doing tribal tattoos, but also like dabbling in the traditional style. I'll need at least a $100 deposit for large pieces, but will do tattoos same day for $40 min.",
    date: new Date(Date.now()),

  },

  {
    artistName: 'Tiff',
    location: '2101 P Street Sacramento, CA 95816',
    artistNumber: '9163851585',
    independent: 'shop',
    shopName: 'Royal Peacock',
    hourlyRate: 85,
    artistMin: 85,
    stylePref: 'Minimalist',
    artistInsta: 'https://www.instagram.com/tattoos_of_instagram/?hl=en',
    shopLink: 'https://www.facebook.com/Royal-Peacock-Tattoo-Parlor-157554380944064/',
    artistBio: "Love minimalism, reflects in my artwork. Been tattooing for 6 years, perfected the art of small tattoos.",
    artistComments: "I only do small minimalist tattoos. Can be detailed, up to a point. Don't take less than my hourly rate for any tattoo. You pay for quality.",
    date: new Date(Date.now()),

  },

  {
    artistName: 'Chartruce',
    location: '3216 Broadway, Sacramento, CA 95817',
    artistNumber: '9163851585',
    independent: 'Independent',
    shopName: 'N/A',
    hourlyRate: 125,
    artistMin: 125,
    stylePref: 'Watercolor',
    artistInsta: 'https://www.instagram.com/tattoos_of_instagram/?hl=en',
    shopLink: 'N/A',
    artistBio: "Watercolor tattoo specialist. Check my IG.",
    artistComments: "Need $100 deposit for any tattoo. Non-negotiable.",
    date: new Date(Date.now()),

  },

  {
    artistName: 'Caleb',
    location: '1118 19th St, Sacramento, CA 95811',
    artistNumber: '9163851585',
    independent: 'shop',
    shopName: 'Monster Ink Tattoo',
    hourlyRate: 70,
    artistMin: 25,
    stylePref: 'Traditional',
    artistInsta: 'https://www.instagram.com/tattoos_of_instagram/?hl=en',
    shopLink: 'https://www.facebook.com/Monster-Ink-Tattoo-132297156816531/',
    artistBio: "I have a graduate degree in business, but decided to abandon that to follow my art. I try to make each piece original and unique.",
    artistComments: "I'll do various styles of tattoos, but like to do traditional tattoos. No need for a deposit.",
    date: new Date(Date.now()),

  },

  {
    artistName: 'Konner',
    location: '2504 Franklin Blvd, Sacramento, CA 95818',
    artistNumber: '9163851585',
    independent: 'shop',
    shopName: 'Old Republic Tattoo',
    hourlyRate: 150,
    artistMin: 100,
    stylePref: 'Realism',
    artistInsta: 'https://www.instagram.com/tattoos_of_instagram/?hl=en',
    shopLink: 'https://www.oldrepublictattoo.co/',
    artistBio: "I've been tattooing for years. Check out my Instagram if you don't think so.",
    artistComments: "I do realistic tattoos only. Give me an image and I'll recreate it. Deposit $100-$200 ranging on the scope of work.",
    date: new Date(Date.now()),

  },

  {
    artistName: 'Sean',
    location: '1028 2nd St, Sacramento, CA 95814',
    artistNumber: '9163851585',
    independent: 'shop',
    shopName: 'River City Tattoo',
    hourlyRate: 40,
    artistMin: 40,
    stylePref: 'Blackwork',
    artistInsta: 'https://www.instagram.com/tattoos_of_instagram/?hl=en',
    shopLink: 'http://www.rivercitytattoo.net/',
    artistBio: "If you'd like to see my bio, you can read my facebook. But just a summary: I like long walks on the beach and getting caught in the rain.",
    artistComments: "I'll do blackwork designs and not much else. The artistic power that blackwork has is unchallenged. $40 min.",
    date: new Date(Date.now()),

  },

  {
    artistName: 'Valarie',
    location: '5140 Folsom Blvd, Sacramento, CA 95819',
    artistNumber: '9163851585',
    independent: 'shop',
    shopName: 'Legacy Tattoo',
    hourlyRate: 60,
    artistMin: 30,
    stylePref: 'New School',
    artistInsta: 'https://www.instagram.com/tattoos_of_instagram/?hl=en',
    shopLink: 'http://www.legacyinktattoo.com/',
    artistBio: "Have an extensive portfolio. Check it out if you can. I work to create new art. Don't bring me something you google imaged. I do custom tattoos for a reasonable price...",
    artistComments: "I like modern design, but am open to others (except traditional). I won't copy an image you found on google like everyone else, but I can use that as an inspiration. Give me a direction and the artistic range to do so, you won't be disappointed.",
    date: new Date(Date.now()),

  },

  {
    artistName: 'Dianna',
    location: '1207 21st St, Sacramento, CA 95811',
    artistNumber: '9163851585',
    independent: 'shop',
    shopName: 'Bone Head Tattoo',
    hourlyRate: 130,
    artistMin: 130,
    stylePref: 'Blackwork',
    artistInsta: 'https://www.instagram.com/tattoos_of_instagram/?hl=en',
    shopLink: 'https://www.instagram.com/boneheadtattoosandpiercing/',
    artistBio: "Check the IG.",
    artistComments: "I am a blackwork artist. $100 min deposit, $130 min total tattoo. I'll accept requests within reason.",
    date: new Date(Date.now()),

  },

  {
    artistName: 'Leroy-Bedford',
    location: '2504 Franklin Blvd, Sacramento, CA 95818',
    artistNumber: '9163851585',
    independent: 'shop',
    shopName: 'Old Republic Tattoo',
    hourlyRate: 100,
    artistMin: 50,
    stylePref: 'Blackwork',
    artistInsta: 'https://www.instagram.com/tattoos_of_instagram/?hl=en',
    shopLink: 'https://www.oldrepublictattoo.co/',
    artistBio: "LEROYYYYYYY……BEDFORD. Just a tattoo artist with a cool name. I design and tattoo affordable tattoos.",
    artistComments: "I have a $50 min. No restrictions after that.",
    date: new Date(Date.now()),

  },

  {
    artistName: 'Leela',
    location: '1012 2nd St, Sacramento, CA 95814',
    artistNumber: '9163851585',
    independent: 'Independent',
    shopName: 'N/A',
    hourlyRate: 115,
    artistMin: 50,
    stylePref: 'Realism',
    artistInsta: 'https://www.instagram.com/tattoos_of_instagram/?hl=en',
    shopLink: 'N/A',
    artistBio: "#Feminist. I’ll tattoo anyone who asks within reason.",
    artistComments: "I focus mainly on doing portraits. Give me a picture and I'll match it as best as I can or your money back. Check the portfolio. Give me a ring.",
    date: new Date(Date.now()),

  },

  {
    artistName: 'Donnie',
    location: '2418 16th St, Sacramento, CA 95818',
    artistNumber: '9163851585',
    independent: 'Independent',
    shopName: 'N/A',
    hourlyRate: 75,
    artistMin: 50,
    stylePref: 'Tribal',
    artistInsta: 'https://www.instagram.com/tattoos_of_instagram/?hl=en',
    shopLink: 'N/A',
    artistBio: "Been in and out of tattoo shops. Been through all the bullshit so I decided to truck it alone. Check out my IG. I'm sure other shops have tried to use my work.",
    artistComments: "I do tribal and minimalist tattoos. I prefer tribal, but a sleek small modern design...sign me up. No deposit.",
    date: new Date(Date.now()),

  },

  {
    artistName: 'TJ',
    location: '2421 J St, Sacramento, CA 95814',
    artistNumber: '9163851585',
    independent: 'shop',
    shopName: 'Black Gold Custom Tattoo',
    hourlyRate: 140,
    artistMin: 100,
    stylePref: 'Watercolor',
    artistInsta: 'https://www.instagram.com/tattoos_of_instagram/?hl=en',
    shopLink: 'https://www.instagram.com/blackgoldtattoo916/?hl=en',
    artistBio: "I'm a premium artist. Pick me if you dare. If you dare, you've chosen wisely.",
    artistComments: "I do brilliant watercolor tattoos only. I require a $100 deposit for any tattoo. Contact me for more deets.",
    date: new Date(Date.now()),

  },

  {
    artistName: 'Wes',
    location: '1207 21st St, Sacramento, CA 95811',
    artistNumber: '9163851585',
    independent: 'shop',
    shopName: 'Bone Head Tattoo',
    hourlyRate: 165,
    artistMin: 165,
    stylePref: 'Realism',
    artistInsta: 'https://www.instagram.com/tattoos_of_instagram/?hl=en',
    shopLink: 'https://www.instagram.com/boneheadtattoosandpiercing/',
    artistBio: "If you have a portrait that you decide needs to be on your body, I'm the only person that you should talk to.",
    artistComments: "I accept $150 deposits. I accept all consulations, no matter how big or how small.",
    date: new Date(Date.now()),

  },

];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedCount + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });