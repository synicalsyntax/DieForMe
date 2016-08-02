#pragma strict
#pragma strict

var target : Transform;
var distance : float;

function Update(){
    transform.position = new Vector3(GameObject.Find("Player").transform.position.x, GameObject.Find("Player").transform.position.y, 5);
}