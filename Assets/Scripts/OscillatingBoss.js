#pragma strict

var SpellCoolDown : float;
public var speed: float =3;
public var startingY: float;
public var endingY: float;
var duration : float = 2;
public var Horcrux : Rigidbody2D;
public var AurorSpell : Rigidbody2D;
var direction : float;
public var spellSpeed : int;
public var hits : int  = 0;
static var dead = false;

function Start(){
    GetComponent.<Renderer>().enabled = true;
    GetComponent.<Collider2D>().enabled = true;
    direction = -1;
}

function Update() {
    transform.position = new Vector3(transform.position.x, PingPong(Time.time * speed, startingY, endingY), transform.position.z);
    if (Time.time > SpellCoolDown){
        SpellCoolDown = Time.time + duration; 
        Spell();
    }

    if(GetComponent.<SpriteRenderer>().enabled == true) {
        dead = false;
    } else {
        dead = true;
    }
    transform.position.x = 109;
}

function PingPong(t: float, minLength: float, maxLength: float) {
    var pos: float = (Mathf.PingPong(t, maxLength - minLength) + minLength);
    return pos;
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
                var Spell = Instantiate(AurorSpell, transform.position, Quaternion.identity);
                Spell.velocity.x = direction * spellSpeed;

            }
        }

