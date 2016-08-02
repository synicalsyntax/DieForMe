#pragma strict

var SpellCoolDown : float;

var duration : float = 2;
public var AurorSpell : Rigidbody2D;
public var spellSpeed : int;
public var direction : float;


function Start(){
    GetComponent.<Renderer>().enabled = true;
    GetComponent.<Collider2D>().enabled = true;
    direction = -1;
}

function Update() {
    if (Time.time > SpellCoolDown){
        SpellCoolDown = Time.time + duration; 
        Spell();
    }
  
}

    function OnTriggerEnter2D(collider2D : Collider2D){
        if (collider2D.name.StartsWith("SpellX")){
            GetComponent.<SpriteRenderer>().enabled = false;
            GetComponent.<Collider2D>().enabled = false;
            Destroy(collider2D.gameObject);
        }
    }

        function Spell(){
            var Spell = Instantiate(AurorSpell, transform.position, Quaternion.identity);
            Spell.velocity.x = direction * spellSpeed;

        }

