#pragma strict
public var speed : float=2;
public var wait : float =1;
public var startingX: float =-5;
public var endingX: float =5;
function Start () {
    
}

function Update () {
    Move();
}
function PingPong(t : float,minLength: float,maxLength: float){
    var pos: float = (Mathf.PingPong(t,maxLength-minLength)+minLength);
    
        return pos;
}
function Move(){
    transform.position= new Vector3(PingPong(Time.time*speed,startingX,endingX),transform.position.y,transform.position.z);

}