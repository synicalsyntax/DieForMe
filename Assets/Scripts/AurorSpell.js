#pragma strict

function OnTriggerEnter2D(collider2D : Collider2D) {
    if (collider2D.name.StartsWith("Platform") || collider2D.name.StartsWith("Player")) {
   		Destroy(gameObject); 
    }
}