#pragma strict
import UnityEngine.UI;
import UnityEngine.Networking;


public var textBox : GameObject;
public var theText : Text;
public var textFile : TextAsset;
public var textLines : String[];
public var currentLine : float;
public var endAtLine : float;
public var player : PlayerController;


function Start () {
    var temp : String = textFile.text;
    textLines = temp.Split("\n"[0]);
    //var yay : String = "Hello, hey";
    
    //print(yay.Split(","[0]));

}

function Update () {

}