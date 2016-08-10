#pragma strict

public var Horcrux : Rigidbody2D;

function Start() {
    GetComponent.<Renderer>().enabled = true;
    GetComponent.<Collider2D>().enabled = true;
}

function OnTriggerEnter2D(collider2D : Collider2D) {
	if (collider2D.name.StartsWith("SpellZ") || collider2D.name.StartsWith("SpellX")) {
		Instantiate(Horcrux, transform.position, Quaternion.identity);
		GetComponent.<SpriteRenderer>().enabled = false;
		GetComponent.<Collider2D>().enabled = false;
	}
}