#pragma strict
function Start(){
    gameObject.SetActive(true);
}
function OnCollisionStay2D(theCollision : Collision2D) {
    yield WaitForSeconds(1);
    gameObject.SetActive(false);
}