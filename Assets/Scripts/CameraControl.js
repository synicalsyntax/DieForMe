/*
Camera Following Script
  Camera follows player, located in center.
*/

#pragma strict

var target : Transform; //In the Unity editor, attach Script to camera and set Target to Player for camera to track Player

function Update(){
    transform.position = new Vector3(GameObject.Find("Player").transform.position.x, GameObject.Find("Player").transform.position.y, -10); //sets Camera position to x and y position of Player (z position value is constant at -10)
}