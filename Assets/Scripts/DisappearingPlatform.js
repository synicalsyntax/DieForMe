#pragma strict

function Start(){
    GetComponent.<SpriteRenderer>().enabled = true;
    GetComponent.<Collider2D>().enabled = true;
}

function OnCollisionStay2D(theCollision : Collision2D) {
	var contactPoint : Vector3 = theCollision.contacts[0].point;
	var center : Vector3 = GetComponent.<Collider2D>().bounds.center;
	var top : boolean = contactPoint.y > center.y;

	if(theCollision.gameObject.name.StartsWith("Player") && top) {
		yield WaitForSeconds(3);
		GetComponent.<SpriteRenderer>().enabled = false;
	    GetComponent.<Collider2D>().enabled = false;
	    yield WaitForSeconds(3);
		GetComponent.<SpriteRenderer>().enabled = true;
	    GetComponent.<Collider2D>().enabled = true;
    }
}