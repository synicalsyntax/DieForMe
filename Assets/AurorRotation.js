#pragma strict

var SpellCoolDown : float;

var duration : float = 2;
public var AurorSpell : Rigidbody2D;
public var spellSpeed : int;
public var direction : float;

var rotation : Quaternion; //used to denote rotations
public var radius : Vector3; //set radius of 1 in EnemyRotation
var currentRotation = 0.0; //set default rotation to 0

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
    currentRotation += Time.deltaTime * 100; //sets currentRotation to amount of time passed
    rotation.eulerAngles = Vector3(0, 0, currentRotation); //sets rotation around z axis to currentRotation (represented as Euler angles in degrees)
    transform.position = rotation * radius; //translates Enemy position according to set radius
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

