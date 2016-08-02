#pragma strict

var SpellCoolDown : float;
public var speed: float =3;
public var startingX: float;
public var endingX: float;
var duration : float = 2;
public var BossSpell : Rigidbody2D;
var direction : float;
public var spellSpeed : int;
static var dead = false;

function Start(){
    GetComponent.<Renderer>().enabled = true;
    GetComponent.<Collider2D>().enabled = true;
    direction = -1;
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

    function OnTriggerEnter2D(collider2D : Collider2D){
        if (collider2D.name.StartsWith("SpellX")){
            GetComponent.<SpriteRenderer>().enabled = false;
            GetComponent.<Collider2D>().enabled = false;
        }
    }

function Spell(){
     if (dead == false) {
           var Spell = Instantiate(BossSpell, transform.position, Quaternion.identity);
           Spell.velocity.x = direction * spellSpeed;
           Destroy(Spell.gameObject, 1);
     }
}