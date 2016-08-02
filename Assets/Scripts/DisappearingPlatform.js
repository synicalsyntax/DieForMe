#pragma strict

function Start(){
    GetComponent.<Renderer>().enabled = true;
    GetComponent.<Collider2D>().enabled = true;
}

function OnCollisionStay2D(theCollision : Collision2D) {
    yield WaitForSeconds(3);
    GetComponent.<SpriteRenderer>().enabled = false;
    GetComponent.<Collider2D>().enabled = false;
}