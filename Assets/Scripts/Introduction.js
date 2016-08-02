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
    //player = FindObjectOfType(PlayerControl);
    var temp : String = textFile.text;
    textLines = temp.Split("\n"[0]);
    if(endAtLine == 0){
        endAtLine = textLines.Length - 1;
    }
}

function Update () {
    if(currentLine>endAtLine){
        textBox.SetActive(false);
    }
    theText.text = textLines[currentLine];
    if(Input.GetKeyDown(KeyCode.Return)){
        currentLine +=1;
    }
   
}