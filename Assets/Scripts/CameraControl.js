#pragma strict

var target : Transform;
public var offsetx : float;
public var offsety : float;

function Update() {
    transform.position = new Vector3(target.transform.position.x + offsetx, target.transform.position.y + offsety, -10);
}