#pragma strict

public var speed: float =3;
//public var wait: float;
public var startingX: float;
public var endingX: float;

function Update() {
    transform.position = new Vector3(PingPong(Time.time * speed, startingX, endingX), transform.position.y, transform.position.z);
}

function PingPong(t: float, minLength: float, maxLength: float) {
    var pos: float = (Mathf.PingPong(t, maxLength - minLength) + minLength);
    return pos;
}


function OnCollisionEnter2D(theCollision : Collision2D) {
    if (theCollision.gameObject.name.StartsWith("SpellZ(Clone)")) {
    Debug.Log("hit");
    Destroy(theCollision.gameObject);
    gameObject.SetActive(false);
      }
    }