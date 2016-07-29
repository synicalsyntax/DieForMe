﻿#pragma strict

public var speed: float;
public var wait: float;
public var startingX: float;
public var endingX: float;

function Update() {
    transform.position = new Vector3(PingPong(Time.time * speed, startingX, endingX), transform.position.y, transform.position.z);
}

function PingPong(t: float, minLength: float, maxLength: float) {
    var pos: float = (Mathf.PingPong(t, maxLength - minLength) + minLength);
    return pos;
}