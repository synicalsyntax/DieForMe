#pragma strict
private var playerObject : GameObject;

function Start () {
    playerObject = GameObject.FindWithTag("Player");

}

function Update () {

}


function OnCollisionExit2D(theCollision : Collision2D) {
    if (theCollision.gameObject.name.StartsWith("Player")){
        gameObject.SetActive(false);

    }
}