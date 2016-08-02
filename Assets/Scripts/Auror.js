#pragma strict

public var speed: float =3;
public var startingX: float;
public var endingX: float;

function Start(){
    GetComponent.<Renderer>().enabled = true;
    GetComponent.<Collider2D>().enabled = true;
}

function Update() {
    transform.position = new Vector3(PingPong(Time.time * speed, startingX, endingX), transform.position.y, transform.position.z);
}

function PingPong(t: float, minLength: float, maxLength: float) {
    var pos: float = (Mathf.PingPong(t, maxLength - minLength) + minLength);
    return pos;
}

    function OnTriggerEnter2D(collider2D : Collider2D){
        if (collider2D.name.StartsWith("SpellX")){
            GetComponent.<SpriteRenderer>().enabled = false;
            GetComponent.<Collider2D>().enabled = false;
            Destroy(collider2D.gameObject);
        }
    }

