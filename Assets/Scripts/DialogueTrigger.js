#pragma strict

public var theText :TextAsset;
public var startLine: float;
public var endLine: float;
public var theTextBox : Introduction;
public var destroyWhenActivated : boolean;

function Start () {
    theTextBox = FindObjectOfType(Introduction);
}

function Update () {
    
}
function OnTriggerEnter2D (other : Collider2D) {
    if(other.name == "Player"){
        theTextBox.ReloadScript(theText);
        theTextBox.currentLine = startLine;
        theTextBox.endAtLine = endLine;
        theTextBox.EnableTextBox();
    }
    if(destroyWhenActivated){
        Destroy(gameObject);
    }
}