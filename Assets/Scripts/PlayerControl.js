/*
Basic Player Platformer Script: 
  + Horizontal + Vertical Movement 
  + Collisions with Platforms + Enemy Object(s)
  + Falling Off Platform Relocation
*/
#pragma strict
var isgrounded: boolean = true; //variable for when player is grounded
public var SpellZ: Rigidbody2D; 
public var SpellX: Rigidbody2D;
var SpellCooldown: float;
var duration: float = 1;
public var spellSpeed: int;
var direction: int = 1;
var spellDirection: int = 1;
public var canMove: boolean;
public var SceneMoveTo: String;
var checkpoint: Vector2 = Vector2(-1, 2);

function Start() {
    transform.position = checkpoint; //original starting position, in x, y, z values
    direction = -1;
    spellDirection = 1;
    FlipLeft();
}

function FixedUpdate() {
    var moveHorizontal: float = Input.GetAxis("Horizontal");
    if (canMove == false) {
        moveHorizontal = 0;
    }
    var horizontalForce: Vector2 = new Vector2(moveHorizontal, 0);
    GetComponent. < Rigidbody2D > ().AddForce(horizontalForce * 20); //20 value can be changed according to player speed
    if (moveHorizontal < 0) {
        FlipLeft();
    } else if (moveHorizontal > 0) {
        FlipRight();
    }
    if (isgrounded == true) {
        if (Input.GetKeyDown("up") || Input.GetKeyDown("w")) {
            Jump();
        }
    }
}

function Update() {
    //if(!canMove){
    //return;
    //}
    if (Input.GetKeyDown(KeyCode.Z) && Time.time > SpellCooldown) {
        SpellCooldown = Time.time + duration;
        ZSpell();
    } else if (Input.GetKeyDown(KeyCode.X) && Time.time > SpellCooldown) {
        SpellCooldown = Time.time + duration;
        XSpell();
    }
}

function Jump() {
    GetComponent. < Rigidbody2D > ().AddForce(Vector2(0, 650)); //might depend on mass of object
    yield WaitForSeconds(0.1);
}

function ZSpell() {
    var Spell = Instantiate(SpellZ, transform.position, Quaternion.identity);
    Spell.GetComponent. < Renderer > ().enabled = true;
    Spell.velocity.x = direction * spellSpeed;
    yield WaitForSeconds(1);
}

function XSpell() {
    var Spell = Instantiate(SpellX, transform.position, Quaternion.identity);
    Spell.GetComponent. < Renderer > ().enabled = true;
    Spell.velocity.x = direction * spellSpeed;
    yield WaitForSeconds(1);
}

function OnCollisionEnter2D(theCollision: Collision2D) {
    if (theCollision.gameObject.name.StartsWith("Platform")) { //checks if colliding with object called Platform
        isgrounded = true;
    }
    if (theCollision.gameObject.name.StartsWith("Platform Disappearing")) { //checks if colliding with object called Platform
        yield WaitForSeconds(2);
        isgrounded = false;
    }
    if (theCollision.gameObject.name.StartsWith("Lava")) { //if touching enemy object name Enemy
        yield WaitForSeconds(0.05);
        transform.position = checkpoint; //reset position
        deathReset();
    }
    if (theCollision.gameObject.name.StartsWith("Dementor")) {
        yield WaitForSeconds(0.05);
        transform.position = checkpoint; //reset position  
        deathReset();
    }
    if (theCollision.gameObject.name.StartsWith("Plant")) {
        yield WaitForSeconds(0.05);
        transform.position = checkpoint; //reset position  
        deathReset();
    }
    if (theCollision.gameObject.name.StartsWith("Big Bad Mafia Boss")) {
        yield WaitForSeconds(0.05);
        transform.position = checkpoint; //reset position  
        deathReset();
    }
    if (theCollision.gameObject.name.StartsWith("Auror")) {
        yield WaitForSeconds(0.05);
        transform.position = checkpoint; //reset position  
        deathReset();
    }
    if (theCollision.gameObject.name.StartsWith("Horcrux 1")) {
        Destroy(theCollision.gameObject);
        yield WaitForSeconds(0.05);
        for (var poof: GameObject in GameObject.FindGameObjectsWithTag('Poof')) {
            poof.GetComponent. < SpriteRenderer > ().enabled = false;
            poof.GetComponent. < Collider2D > ().enabled = false;
        }
    }
    if (theCollision.gameObject.name.StartsWith("Horcrux")) {
        theCollision.gameObject.gameObject.SetActive(false);
        yield WaitForSeconds(1);
        Application.LoadLevel(SceneMoveTo);
    }
}

function OnCollisionStay2D(theCollision: Collision2D) {
    if (theCollision.gameObject.name.StartsWith("Platform Moving")) { //while colliding with object name that starts with Platform Moving
        transform.parent = theCollision.gameObject.transform; //make Player child of Moving Platformer so its position will be offset accordingly
    }
    if (theCollision.gameObject.name.StartsWith("Platform")) { //checks if colliding with object called Platform
        isgrounded = true;
    }
}

function OnCollisionExit2D(theCollision: Collision2D) {
    if (theCollision.gameObject.name.StartsWith("Platform")) { //checks if colliding with object called Platform
        isgrounded = false;
        transform.parent = null;
    }
}

function OnTriggerEnter2D(collider2D: Collider2D) {
    if (collider2D.name.StartsWith("AurorSpell")) {
        yield WaitForSeconds(0.05);
        transform.position = checkpoint; //reset position  
        deathReset();
    }
    if (collider2D.name.StartsWith("Checkpoint")) {
        checkpoint = collider2D.transform.position;
    }
}

function FlipLeft() {
    var theScale: Vector3;
    theScale = transform.localScale;
    var zScale: Vector3;
    zScale = SpellZ.transform.localScale;
    var xScale: Vector3;
    xScale = SpellX.transform.localScale;
    if (direction != -1) {
        direction = -1;
        theScale.x *= -1;
        transform.localScale = theScale;
    }
    if (spellDirection != -1) {
        spellDirection = -1;
        zScale.x *= -1;
        xScale.x *= -1;
        SpellZ.transform.localScale = zScale;
        SpellX.transform.localScale = xScale;
    }
}

function FlipRight() {
    var theScale: Vector3;
    theScale = transform.localScale;
    var zScale: Vector3;
    zScale = SpellZ.transform.localScale;
    var xScale: Vector3;
    xScale = SpellX.transform.localScale;
    if (direction != 1) {
        direction = 1;
        theScale.x *= -1;
        transform.localScale = theScale;
    }
    if (spellDirection != 1) {
        spellDirection = 1;
        zScale.x *= -1;
        xScale.x *= -1;
        SpellZ.transform.localScale = zScale;
        SpellX.transform.localScale = xScale;
    }
}

function deathReset() {
    transform.parent = null;
    Destroy(GameObject.Find('Horcrux'));
    Destroy(GameObject.Find('Horcrux 1'));
    yield WaitForSeconds(0.1);
    for (var reappear: GameObject in GameObject.FindGameObjectsWithTag("Respawn")) {
        reappear.GetComponent. < SpriteRenderer > ().enabled = true;
        reappear.GetComponent. < Collider2D > ().enabled = true;
    }
    for (var poof: GameObject in GameObject.FindGameObjectsWithTag('Poof')) {
        poof.GetComponent. < SpriteRenderer > ().enabled = true;
        poof.GetComponent. < Collider2D > ().enabled = true;
    }
    yield WaitForSeconds(3);
    for (var reappear: GameObject in GameObject.FindGameObjectsWithTag("Respawn")) {
        if (reappear.gameObject.name == "Platform Disappearing") {
            reappear.GetComponent. < SpriteRenderer > ().enabled = true;
            reappear.GetComponent. < Collider2D > ().enabled = true;
        }
    }
}