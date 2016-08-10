#pragma strict

function Start(){
    GetComponent.<Renderer>().enabled = true;
    GetComponent.<Collider2D>().enabled = true;
}

function OnTriggerEnter2D(collider2D : Collider2D) {
	if (collider2D.name.StartsWith("SpellZ")) {
		GetComponent.<SpriteRenderer>().enabled = false;
		GetComponent.<Collider2D>().enabled = false;
	}
}