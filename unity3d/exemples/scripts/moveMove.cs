using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class moveMove : MonoBehaviour {

	float depthIntoScene = 10;

	// Update is called once per frame
	void Update () {
		MoveToMouseAtObjectDepth();
	}

	void MoveToMouseAtObjectDepth() {
		Vector3 mouseScreenPosition = Input.mousePosition;

		//create a ray that goes into the scene from the camera, through the mouse position
		Ray ray = Camera.main.ScreenPointToRay(mouseScreenPosition);
		float depth;
		RaycastHit hitInfo; //create a variable to store information about the object hit (if any)

		//Check to see if the ray hits any objects in the scene
		//Also pass in hitInfo, so that Raycast can store the information about the hit there
		//The out keyword is a parameter modifier used to tell C# that this object should be passed by reference, instead of by value
		//basically it makes it so we can properly access hitInfo.
		//It's important to note that the objects we're hoping to hit with our ray must have a collider component attached to them
		if (Physics.Raycast (ray, out hitInfo)) 
		{
			if (hitInfo.transform.tag == "menu") {
				Debug.Log ("menu");
				
			} else {
				Destroy(hitInfo.collider.gameObject);
			}
			//Move this object to the postion we hit.
			this.transform.position = new Vector3(hitInfo.point.x, hitInfo.point.y, hitInfo.point.z);

		} else {
			//if we didn't hit anything, set the depth to the arbitrary depth
			depth = depthIntoScene;
			//now we can reuse our previous code to position the object using the depth we defined here
			MoveToMouseAtSpecifiedDepth(depth);
		}
	}

	void MoveToMouseAtSpecifiedDepth(float depth) {
		Vector3 mouseScreenPosition = Input.mousePosition;
		mouseScreenPosition.z = depth;
		Vector3 mouseWorldPosition = Camera.main.ScreenToWorldPoint(mouseScreenPosition);
		this.transform.position = new Vector3(mouseWorldPosition.x, mouseWorldPosition.y, mouseWorldPosition.z);
	}
}
