#pragma strict

var SpellCoolDown : float;
public var speed: float =3;
var duration : float = 1;
public var AurorSpell : Rigidbody2D;
var direction : float;
public var spellSpeed : int;
static var dead = false;

function Start(){
    GetComponent.<Renderer>().enabled = true;
    GetComponent.<Collider2D>().enabled = true;
    direction = -1;
}

function Update() {
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

function OnTriggerEnter2D(collider2D : Collider2D) {
	if (collider2D.name.StartsWith("SpellX")) {
	    GetComponent.<SpriteRenderer>().enabled = false;
		GetComponent.<Collider2D>().enabled = false;
	}
}

function Spell() {
	if (dead == false) {
		var Spell = Instantiate(AurorSpell, transform.position, Quaternion.identity);
        Spell.velocity.x = direction * spellSpeed;
        Destroy(Spell.gameObject, 1);
    }
}