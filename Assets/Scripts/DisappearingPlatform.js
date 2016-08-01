#pragma strict
function Start(){
    gameObject.SetActive(true);
}
function OnCollisionStay2D(theCollision : Collision2D) {
    yield WaitForSeconds(2);
    gameObject.SetActive(false);
}