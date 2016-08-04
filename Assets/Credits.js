#pragma strict

var speed = 0.2;
var crawling = false;
var limit = 425;

function Update ()
{
     if (gameObject.transform.position.y < limit) {
          transform.position.y++;
     }
}