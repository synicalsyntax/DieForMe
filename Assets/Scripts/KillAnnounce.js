#pragma strict


public var theTextBox : Introduction;
public var destroyWhenActivated : boolean;

function Start () {
    theTextBox = FindObjectOfType(Introduction);
    
}

function Update () {
    
}
function OnTriggerEnter2D (other : Collider2D) {
    var otherScript: PlayerControl = FindObjectOfType(PlayerControl);
    if(other.name == "Player"){
        theTextBox.setLinesOther("YOU KILLED " + otherScript.returnKills() + " PEOPLE TO GET TO YOUR GOAL.");
        theTextBox.EnableTextBox();
        if(destroyWhenActivated){
            Destroy(gameObject);
        }
    }
    
}
