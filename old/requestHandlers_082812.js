// relevant fxns have been moved to index.js, this file left in case other fxn code useful

/*var url = require("url");

var Db = require('mongodb').Db,
	Connection = require('mongodb').Connection,
    MongoServer = require('mongodb').Server;
var client = new Db('test', new MongoServer("205.186.145.170", 27017, {strict:true}));	

var ccHandler = require('./ccHandler.js');

var fs = require("fs");


client.open(function(err, p_client) {});*/


/*function receiveCC(response, request, socket) {

	var url_parts = url.parse(request.url, true);
	var newWord = url_parts.query.word;
	var newSentence = url_parts.query.sentence;
	var newPhrase = url_parts.query.phrase;
	var speaker = url_parts.query.speaker;

	// deal with new word
	if (newWord != null) {
	
		client.collection('unique_words', function(err, collection) { //open connection to unique_words table
			if (!err && collection) {
				
				client.collection('LIWC', function(e, c) {
					// first check if it's in LIWC (non wildcard)
					c.findOne({'word':newWord.toLowerCase()}, function(err, doc) {
						if (doc) {
							console.log("NORMAL "+newWord);
						
							broadcastWord(speaker, newWord, doc, socket);
						} else { // if not found, check wildcards
							client.collection('LIWC_wildcards', function(e, c) {
								c.findOne({$where: "'"+newWord.toLowerCase()+"'.indexOf(this.word) != -1" }, function(err, wdoc) {
									if (wdoc) {
										console.log("WILDCARD " + newWord);
										broadcastWord(speaker, newWord, wdoc, socket);
									}
								});
							});
						}
					});
				
				});
			}
		});
	}	
	
	if (newSentence != null) {
		broadcastSentence(speaker, newSentence, socket)
	}
	
	if (newPhrase != null) {
		broadcastPhrase(speaker, newPhrase, socket);
	}
	

}*/

/*function receiveChars(response, request, socket)
{
	var url_parts = url.parse(request.url, true);
	var newChars = url_parts.query.chars;
	
	ccHandler.handleChars(newChars);
}*/

/*function broadcastWord(sp, w, d, s) {
	if (s) {	
	
		// set emotion value
		var e = '';
		if (d.cat.indexOf('posemo') > -1)
			e = 'pos';
		else if (d.cat.indexOf('negemo') > -1)
			e = 'neg';	
			
		// create message to send					
		var message = {
		  speaker: sp,
		  word: w.toUpperCase(),
		  emo: e,
		  cat: d.cat
		};
		
		// send message
 		s.broadcast.emit('message',message);
		s.emit('message', message); //send message to sender	
	} 
	//else console.log("curSocket = null");

}

function broadcastSentence(sp, sent, s) {
	if (s) {		
		// create message to send					
		var message = {
		  speaker: sp,
		  sentence: sent
		};
		
		// send message
 		s.broadcast.emit('message',message);
		s.emit('message', message); //send message to sender
	}	
}

function broadcastPhrase(sp, phrase, s) {
	if (s) {
		// create message to send					
		var message = {
		  speaker: sp,
		  phrase: phrase
		};
		
		// send message
 		s.broadcast.emit('message',message);
		s.emit('message', message); //send message to sender	
	}
}*/


/* functions for loading from static text file 
var doc;
var ind, nextInd;
var intervalID;

function loadDoc(docName, delay, socket) {

	//var url_parts = url.parse(request.url, true);
	//var delay = (url_parts.query.delay) ? url_parts.query.delay : 0;
	//var docName = url_parts.query.docName;
	//docName = '2008DebateTranscript_01.txt';
	
	console.log("d "+delay+" n "+docName);
	
	try {
		doc = fs.readFileSync(__dirname + '/documents/' + docName, 'utf8');
		
		if (delay == 0)
			ccHandler.handleChars(doc, socket);
		else {
			ind = 0;
			nextInd = 0;
			intervalID = setInterval(sendCharsFromDoc, delay, socket);
		}
	} catch (e) {
		console.log(e);
	}		
}

function sendCharsFromDoc(socket) {

	if (ind < doc.length) {
		nextInd = Math.min(ind + Math.floor((Math.random()*3)+1), doc.length);
		ccHandler.handleChars(doc.substring(ind, nextInd), socket);
		ind = nextInd;
	}
	else clearTimeout(intervalID);
	
}

//exports.receiveCC = receiveCC;
exports.receiveChars = receiveChars;
exports.loadDoc = loadDoc;
exports.ccHandler = ccHandler; */




// stuff for testing, not sure exactly what needs to be done with this still, john?
/*var str='Here\'s a (good, bad, indifferent, ...) '+
        'example sentence to be used in this test '+
        'of English language "token-extraction". ' +
        'How about $10,000 in \'additional\' cash?';
        
var testString = "Perhaps even more worryingly, German data released 3:15 Thursday showed signs of a \"slowdown\" in an economy that until now had been a bright spot for the Continent's backside. A 1,000 $12,314.32 Markit index based on surveys of purchasing managers of German manufacturing companies fell to 45.0 in May from 46.2 in April."
requestHandlers.ccHandler.parseWords(testString);*/