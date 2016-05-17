walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bgaffe\b/ig, "magic spell");
	v = v.replace(/\bancient\b/g, "haunted");

	v = v.replace(/\bstar-studded\b/ig, "blood-soaked");
	v = v.replace(/\bremains to be seen\b/ig, "will never be known");
	v = v.replace(/\bsilver bullet\b/ig, "way to kill werewolves");

	v = v.replace(/\bsubway system\b/ig, "tunnels I found");
	v = v.replace(/\bsurprising\b/ig, "surprising (but not to me)");
	
	v = v.replace(/\bwar of words\b/g, "interplanetary war");
	v = v.replace(/\btension\b/g, "sexual tension");
	v = v.replace(/\bcautiously optimistic\b/g, "delusional");
	v = v.replace(/\bdoctor who\b/g, "The Big Bang Theory");
	v = v.replace(/\bwin votes\b/g, "find pokemon");
	v = v.replace(/\bbehind the headlines\b/g, "beyond the grave");
	v = v.replace(/\bemail\b/g, "poem");
	v = v.replace(/\bfacebook post\b/g, "poem");
	v = v.replace(/\btweet\b/g, "poem");
	v = v.replace(/\bfacebook ceo\b/g, "this guy");
	v = v.replace(/\blatest\b/g, "final");
	v = v.replace(/\bdisrupt\b/g, "destroy");
	v = v.replace(/\bmeeting\b/g, "menage a trois");
	v = v.replace(/\bscientists\b/g, "Channing Tatum and his friends");
	v = v.replace(/\byou won't believe\b/g, "I'm really sad about");
	textNode.nodeValue = v;
}


