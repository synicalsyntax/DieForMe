#pragma strict

private var animator : Animator;

function Start () {
    animator = GetComponent.<Animator>();
}

function Update () {
    var moveHorizontal: float = Input.GetAxis("Horizontal");
    if(moveHorizontal ==0) {
        animator.SetBool("Running", false);
    }
    else{
        animator.SetBool("Running", true);
    }  
}