#pragma strict

var rotation : Quaternion;
var radius = Vector3(5,0,0);
var currentRotation = 0.0;
function Update()
{
    currentRotation += Time.deltaTime*100;
    rotation.eulerAngles = Vector3(0, 0, currentRotation);
    transform.position = rotation * radius;
}