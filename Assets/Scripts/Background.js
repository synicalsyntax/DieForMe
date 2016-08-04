#pragma strict

var target : Transform;
public var offsetx : float;
public var offsety : float;
public var z : float;

function Update(){
    transform.position = new Vector3(target.transform.position.x + offsetx, target.transform.position.y + offsety, z); //sets Camera position to x and y position of Player (z position value is constant at -10)
}