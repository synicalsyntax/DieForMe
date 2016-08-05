#pragma strict

public var collide : Sprite;




function OnBecameInvisible() {
    Destroy(gameObject);
} 

function OnTriggerEnter2D(collider2D : Collider2D){
    if (collider2D.name.StartsWith("Platform") || collider2D.name.StartsWith("Dementor") || collider2D.name.StartsWith("Lava") || collider2D.name.StartsWith("the dad") || collider2D.gameObject.name.StartsWith("Big Bad")){
    	GetComponent.<SpriteRenderer>().sprite = collide;
    	yield WaitForSeconds(0.05);
   		Destroy(gameObject); 
    }

}