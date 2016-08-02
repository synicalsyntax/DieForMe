﻿#pragma strict

 var SpellCoolDown : float = 2;
public var speed: float = 3;
public var startingX: float;
public var endingX: float;
var duration : float = 2;
public var AurorSpell : Rigidbody2D;
var direction : float;
public var spellSpeed : int;
public static var dead : boolean = false;

function Start(){
    GetComponent.<Renderer>().enabled = true;
    GetComponent.<Collider2D>().enabled = true;
    direction = -1;
}

function Update() {
    transform.position = new Vector3(PingPong(Time.time * speed, startingX, endingX), transform.position.y, transform.position.z);
    if (Time.time > SpellCoolDown){
        SpellCoolDown = Time.time + duration; 
        Spell();
    }
    print(dead);
}

function PingPong(t: float, minLength: float, maxLength: float) {
    var pos: float = (Mathf.PingPong(t, maxLength - minLength) + minLength);
    return pos;
}

function OnTriggerEnter2D(collider2D : Collider2D){
        if (collider2D.name.StartsWith("SpellX")){
            GetComponent.<SpriteRenderer>().enabled = false;
            GetComponent.<Collider2D>().enabled = false;
            dead = true;
        }
    }

<<<<<<< HEAD
function Spell(){
      if (dead == false){
      var Spell = Instantiate(AurorSpell, transform.position, Quaternion.identity);
=======


        function Spell(){
           var Spell = Instantiate(AurorSpell, transform.position, Quaternion.identity);
>>>>>>> origin/master
            Spell.velocity.x = direction * spellSpeed;
            Destroy(Spell.gameObject, 1);
      }
}