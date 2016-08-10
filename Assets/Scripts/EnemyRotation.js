#pragma strict

var rotation : Quaternion;
public var radius : Vector3;
var currentRotation = 0.0;

function Update() {
    currentRotation += Time.deltaTime * 100;
    rotation.eulerAngles = Vector3(0, 0, currentRotation);
    transform.position = rotation * radius;
}