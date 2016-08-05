#pragma strict

import UnityEngine.SceneManagement;

var speed = 0.2;
var crawling = false;
var limit : float;

function Update ()
{
     if (gameObject.transform.position.y < limit) {
          transform.position.y++;
     } else {
     	SceneManager.LoadScene('Title Screen');
     }
}