process.env.DEBUG = 'actions-on-google:*';
const Assistant = require('actions-on-google').ApiAiAssistant;

const YOUR_INTENT = 'tell_joke';

const FIRST_ARGUMENT = 'subject';

function processX(assistant) {
    console.log("X wadael tell_joke");

    const arg1 = assistant.getArgument(FIRST_ARGUMENT).toLowerCase();

// tell_joke

    switch (arg1) {
        case "apple":
            assistant.tell('You can not eat apple products');
            break;
		case "computers":
            assistant.tell('error is humane. Nightmares imply computers.');
            break;

		case "parents":
            assistant.tell('Both our mums have silicon');
            break;

		case "something":
            assistant.tell('Text response. Ah ah ah');
            break;

		case "anything":
            assistant.tell('Text response. Ah ah ah');
            break;
		
		case "war":
            assistant.tell('War is bad but, just in case, I learned war from all the online games that were played since 15 years. You are warned');
            break;

        default:
            assistant.tell( arg1 +' is not a laughing subject. Press one to get back to previous menu. Ah ah ah. Get back to work, human');
    }
}

exports.agentWadael = function(request, response) {
    console.log("start");

    console.log('Request headers: ' + JSON.stringify(request.headers));
    console.log('Request body: ' + JSON.stringify(request.body));

    let assistant = new Assistant({request, response});
    let actionMap = new Map();
    actionMap.set(YOUR_INTENT, processX);
    assistant.handleRequest(actionMap);
}
