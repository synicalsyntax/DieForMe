/*
Enemy Rotation
  Enemy is set under Game Object parent of EnemyRotation at origin
  Enemy is offset to desired position
*/

#pragma strict

var rotation : Quaternion; //used to denote rotations
public var radius : Vector3; //set radius of 1 in EnemyRotation
var currentRotation = 0.0; //set default rotation to 0

function Update()
{
    currentRotation += Time.deltaTime * 100; //sets currentRotation to amount of time passed
    rotation.eulerAngles = Vector3(0, 0, currentRotation); //sets rotation around z axis to currentRotation (represented as Euler angles in degrees)
    transform.position = rotation * radius; //translates Enemy position according to set radius
}