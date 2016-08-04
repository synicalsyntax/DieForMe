#pragma strict

public var collide : Sprite;


public var HitBoss : AudioClip;


function OnBecameInvisible() {
    Destroy(gameObject);
} 

function OnTriggerEnter2D(collider2D : Collider2D){
    if (collider2D.name.StartsWith("Platform") || collider2D.name.StartsWith("Dementor") || collider2D.name.StartsWith("Lava") || collider2D.name.StartsWith("the dad")){
    	GetComponent.<SpriteRenderer>().sprite = collide;
    	yield WaitForSeconds(0.05);
   		Destroy(gameObject); 
    }
    if (collider2D.gameObject.name.StartsWith("Big Bad")){
        GetComponent.<AudioSource>().clip = HitBoss;
        GetComponent.<AudioSource>().Play();

       GetComponent.<SpriteRenderer>().sprite = collide;
        yield WaitForSeconds(0.05);
        Destroy(gameObject); 
    }
}