#pragma strict
public var Kills : int;
function Start () {
    DontDestroyOnLoad (transform.gameObject);
}

function Update () {

}
function addToCount(number : int){
    Kills +=number;
}