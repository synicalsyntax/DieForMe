/*
Basic Player Platformer Script: 
  + Horizontal + Vertical Movement 
  + Collisions with Platforms + Enemy Object(s)
  + Falling Off Platform Relocation
*/

#pragma strict

var isgrounded : boolean = true; //variable for when player is grounded
public var SpellZ : Rigidbody2D;
public var SpellX : Rigidbody2D;
var SpellZCooldown : float;
var duration : float = 1;

var direction = -1;

function Start() {
    transform.position = Vector3(0, 2, 0); //original starting position, in x, y, z values
}

function FixedUpdate() {
    var moveHorizontal: float = Input.GetAxis("Horizontal");

    if (moveHorizontal < 0)
        direction = -1;
    else if (moveHorizontal >0){
        direction = 1;
    }

    var horizontalForce: Vector2 = new Vector2(moveHorizontal, 0);
    GetComponent.<Rigidbody2D>().AddForce(horizontalForce * 25); //20 value can be changed according to player speed

    if (isgrounded == true) {
        if (Input.GetKeyDown("up") || Input.GetKeyDown("w")) {
            Jump();
        }
    }
    if (transform.position.y < -10) { //if player falls off a platform or something
        transform.position = Vector2(0, 2); //return to original position
    }
}

function Update () {
    if (Input.GetKeyDown(KeyCode.Z) && Time.time > SpellZCooldown){
        SpellZCooldown = Time.time + duration;
        ZSpell();
    }
    else if (Input.GetKeyDown(KeyCode.X)){
        Instantiate(SpellX, transform.position, Quaternion.identity);
    }
}

function Jump() {
    GetComponent.<Rigidbody2D>().AddForce(Vector2(0, Mathf.Clamp(600,550,650))); //might depend on mass of object
    yield WaitForSeconds (0.1);
}

function ZSpell() {
    var Spell =   Instantiate(SpellZ, transform.position, Quaternion.identity);
    Spell.velocity.x = direction * 5;


    yield WaitForSeconds (1);
}

function OnCollisionEnter2D(theCollision : Collision2D) {
    if (theCollision.gameObject.name.StartsWith("Platform")) { //checks if colliding with object called Platform
        isgrounded = true; 
    } else {
        isgrounded = false;
    }
    if (theCollision.gameObject.name.StartsWith("Enemy")) { //if touching enemy object name Enemy
        transform.position = Vector2(0, 2); //reset position
    }
}

function OnCollisionStay2D(theCollision : Collision2D) {
    if (theCollision.gameObject.name.StartsWith("Platform Moving")) { //while colliding with object name that starts with Platform Moving
        transform.parent = theCollision.gameObject.transform; //make Player child of Moving Platformer so its position will be offset accordingly
    }
}

function OnCollisionExit2D(theCollision : Collision2D) {
    isgrounded = false; //sets isgrounded to false once not colliding with an object
    transform.parent = null;
}