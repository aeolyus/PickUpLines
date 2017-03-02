'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.246f12c0-22c5-4009-be96-515fbae3e8d6"; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Pick Up Lines';

/**
 * Array containing pick up lines.
 */
var LINES = [
    "Can I have your picture so I can show Santa what I want for Christmas?",
    "You may fall from the sky, you may fall from a tree, but the best way to fall... is in love with me.",
    "Are you Google? Because I've just found what I've been searching for.",
    "If I had a star for every time you brightened my day, I'd have a galaxy in my hand.",
    "Your hand looks heavy. Let me hold it for you.",
    "Do you have a sunburn, or are you always this hot?",
    "Even if there wasn't any gravity on earth, I would still fall for you!",
    "Know what's on the menu? Me-n-u.",
    "Kissing burns 5 calories a minute. How about a workout?",
    "Do you believe in love at first sight, or should I walk by again?",
    "Let's commit the perfect crime: I'll steal you're heart, and you'll steal mine.",
    "Can I borrow a kiss? I promise I'll give it back.",
    "If kisses were snowflakes, I'd send you a blizzard.",
    "You're so beautiful you made me forget my pick up line."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetLine');
    },
    'GetNewLineIntent': function () {
        this.emit('GetLine');
    },
    'GetLine': function () {
        // Get a random pick up line from the pick up lines list
        var lineIndex = Math.floor(Math.random() * LINES.length);
        var randomLine = LINES[lineIndex];

        // Create speech output
        var speechOutput = "Here's your pick up line: " + randomLine;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomLine)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a pick up line, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};