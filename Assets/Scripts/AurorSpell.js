#pragma strict

function Start () {

}

function Update () {

}

function OnBecameInvisible() {
    Destroy(gameObject);
} 

function OnTriggerEnter2D(collider2D : Collider2D){
    if (collider2D.name.StartsWith("Platform")){
        Destroy(gameObject);
    }
}