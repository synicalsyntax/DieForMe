#pragma strict

//public var speed: float =3;
//public var startingX: float;
//public var endingX: float;

public var Horcrux : Rigidbody2D;

function Start(){
    GetComponent.<Renderer>().enabled = true;
    GetComponent.<Collider2D>().enabled = true;
}
function Update() {
    //transform.position = new Vector3(PingPong(Time.time * speed, startingX, endingX), transform.position.y, transform.position.z);
}



    function OnTriggerEnter2D(collider2D : Collider2D){
        if (collider2D.name.StartsWith("SpellZ")){
            Instantiate(Horcrux, transform.position, Quaternion.identity);
            GetComponent.<SpriteRenderer>().enabled = false;
            GetComponent.<Collider2D>().enabled = false;
        }
        if (collider2D.name.StartsWith("SpellX")){
            Instantiate(Horcrux, transform.position, Quaternion.identity);
            GetComponent.<SpriteRenderer>().enabled = false;
            GetComponent.<Collider2D>().enabled = false;
        }
    }