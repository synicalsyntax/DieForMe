/*
Basic Player Platformer Script: 
  + Horizontal + Vertical Movement 
  + Collisions with Platforms + Enemy Object(s)
  + Falling Off Platform Relocation
*/

#pragma strict

var isgrounded: boolean = true; //variable for when player is grounded
public var SpellZ : GameObject;
public var SpellX : GameObject;

function Start() {
    transform.position = Vector3(0, 2, 0); //original starting position, in x, y, z values
}

function FixedUpdate() {
    var moveHorizontal: float = Input.GetAxis("Horizontal");
    var horizontalForce: Vector3 = new Vector3(moveHorizontal, 0, 0);
    GetComponent.<Rigidbody>().AddForce(horizontalForce * 25); //20 value can be changed according to player speed

    if (isgrounded == true) {
        if (Input.GetKeyDown("up") || Input.GetKeyDown("w")) {
            GetComponent.<Rigidbody>().AddForce(Vector3(0, 750, 0)); //might depend on mass of object
        }
    }

    if (transform.position.y < -10) { //if player falls off a platform or something
        transform.position = Vector3(0, 2, 0); //return to original position
        transform.Rotate(0, 0, 0); //resets rotation, idk if player will be rotating
    }


    if (Input.GetKeyDown(KeyCode.Z)){
        Instantiate(SpellZ, transform.position, Quaternion.identity);
    }
    else if (Input.GetKeyDown(KeyCode.X)){
        Instantiate(SpellX, transform.position, Quaternion.identity);

    }
}

function OnCollisionEnter(theCollision : Collision) {
    if (theCollision.gameObject.name.StartsWith("Platform")) { //checks if colliding with object called Platform
        isgrounded = true; 
    } else {
        isgrounded = false;
    }
    if (theCollision.gameObject.name.StartsWith("Enemy")) { //if touching enemy object name Enemy
        transform.position = Vector3(0, 2, 0); //reset position
    }
}

function OnCollisionStay(theCollision : Collision) {
    if (theCollision.gameObject.name.StartsWith("Platform Moving")) { //while colliding with object name that starts with Platform Moving
        transform.parent = GameObject.Find("Platform Moving").transform; //make Player child of Moving Platformer so its position will be offset accordingly
    }
}

function OnCollisionExit(theCollision : Collision) {
    isgrounded = false; //sets isgrounded to false once not colliding with an object
    transform.parent = null;
}