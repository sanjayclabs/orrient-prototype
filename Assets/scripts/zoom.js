#pragma strict

var previousDistance:float =0;
var camera1:Camera;
var zoomNow : boolean;

function Start () {
	camera1 = this.gameObject.GetComponent(Camera);
}

function Update () {
	
	if (Input.touchCount >= 2 ) {
		var touch0:Touch;
		var touch1:Touch;
		var newDistance: float;
		touch0 = Input.GetTouch(0);
		touch1 = Input.GetTouch(1);
		
		
		if (touch0.phase == TouchPhase.Moved || touch1.phase == TouchPhase.Moved){
			
			newDistance = Vector2.Distance(touch0.position, touch1.position);
			var gap:float = newDistance - previousDistance;
			
			
			if(camera1.fieldOfView >=20 && camera1.fieldOfView <=60 && zoomNow) {
				camera1.fieldOfView -=gap*0.1;
			}
			else if(camera1.fieldOfView <20) {
			 	camera1.fieldOfView =20;
			 }
			else if(camera1.fieldOfView >60) {
			 	camera1.fieldOfView =60;
			}
			
			previousDistance = newDistance;
			zoomNow =true;
			print(gap);
			
		} 
	}
	else {
		zoomNow = false;
	}     
}