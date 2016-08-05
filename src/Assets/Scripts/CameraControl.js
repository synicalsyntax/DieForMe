/*
Camera Following Script
  Camera follows player, located in center.
*/

#pragma strict

var target : Transform; //In the Unity editor, attach Script to camera and set Target to Player for camera to track Player

public var offsetx : float;
public var offsety : float;

function Update(){
    transform.position = new Vector3(target.transform.position.x + offsetx, target.transform.position.y + offsety, -10); //sets Camera position to x and y position of Player (z position value is constant at -10)
}