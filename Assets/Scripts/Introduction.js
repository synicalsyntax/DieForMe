#pragma strict
import UnityEngine.UI;
import UnityEngine.Networking;


public var textBox : GameObject;
public var theText : Text;
public var textFile : TextAsset;
public var textLines : String[];
public var currentLine : float;
public var endAtLine : float;
public var player : PlayerControl;
public var isActive : boolean = false;
public var stopPlayerMovement : boolean = false;



function Start () {
    player = FindObjectOfType(PlayerControl);
    if(textFile ==null){
        DisableTextBox();
    }

    if(isActive){
        EnableTextBox();
    }
    else if(!isActive){
        DisableTextBox();
    }
    var temp : String = textFile.text;
    textLines = temp.Split("\n"[0]);
    endAtLine = textLines.length;
    
}

function Update () {
    if(!isActive){
        return;
    }

    if(currentLine>endAtLine){
        DisableTextBox();
    }
    theText.text = textLines[currentLine];
    if(Input.GetKeyDown(KeyCode.Return)){
        currentLine +=1;
    }
   
}
function EnableTextBox(){
    textBox.SetActive(true);
    isActive = true;
    
        player.canMove = false;
    
}
function DisableTextBox(){
    textBox.SetActive(false);
    isActive = false;
    player.canMove = true;
}
function ReloadScript(theText : TextAsset){
    textLines = new String[1];
    textLines = theText.text.Split("\n"[0]);
}