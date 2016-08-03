#pragma strict

var SpellCoolDown : float;
public var speed: float =3;
public var startingX: float;
public var endingX: float;
var duration : float = 3;
public var BossSpell : Rigidbody2D;
public var Horcrux : Rigidbody2D;

//var direction : float;
public var spellSpeed : float;
static var dead = false;
public var hits : int = 0;

function Start(){
    GetComponent.<Renderer>().enabled = true;
    GetComponent.<Collider2D>().enabled = true;
   // direction = -1;
}

function Update() {
    //transform.position = new Vector3(PingPong(Time.time * speed, startingX, endingX), transform.position.y, transform.position.z);
    if (Time.time > SpellCoolDown){
        SpellCoolDown = Time.time + duration; 
        Spell();
    }
    if(GetComponent.<SpriteRenderer>().enabled == true) {
        dead = false;
    } else {
        dead = true;

    }
}

function PingPong(t: float, minLength: float, maxLength: float) {
    var pos: float = (Mathf.PingPong(t, maxLength - minLength) + minLength);
    return pos;
}

function OnCollisionStay2D(theCollision : Collision2D) {
    if (theCollision.gameObject.name.StartsWith("Player")) { 
        hits = 0;
    }
}

function OnTriggerEnter2D(collider2D : Collider2D){
    if (collider2D.name.StartsWith("SpellX") ||collider2D.name.StartsWith("SpellZ")  ){
	    hits++;
	    if (hits > 1) {
			GetComponent.<SpriteRenderer>().enabled = false;
			GetComponent.<Collider2D>().enabled = false;
			dead = true;
			Instantiate(Horcrux, transform.position, Quaternion.identity);
		}
	}
}

function Spell(){
    if (dead == false) {
        var Spell = Instantiate(BossSpell, transform.position, Quaternion.identity);

        var player : GameObject = GameObject.Find("Player");

        var v = new Vector2((player.transform.position.x - transform.position.x),(player.transform.position.y-transform.position.y)).normalized;
        Spell.velocity.x= v.x* spellSpeed;
        Spell.velocity.y= v.y* spellSpeed;

        Destroy(Spell.gameObject, 1);
    }
}