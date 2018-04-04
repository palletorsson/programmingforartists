using UnityEngine;
using System.Collections;

public class MouseInput : MonoBehaviour {

	float depthIntoScene = 10;
	public string load; 
	int r = 0; 

	float defaultDepthIntoScene = 5;
	float selectScale = .01f;

	//OnMouseDown is called when the user has pressed the mouse button while over the GUIElement or Collider.
	public void OnMouseDown() {
		//Get the vector from the camera to the object
		Vector3 headingToObject = this.transform.position - Camera.main.transform.position;
		//find the projection on the forward vector of the camera
		depthIntoScene = Vector3.Dot(headingToObject, Camera.main.transform.forward);
		Application.LoadLevel(load);
	}

	//OnMouseOver is called every frame while the mouse is over the GUIElement or Collider.
	public void OnMouseOver() {
		//while the mouse is over the object, rotate the object to show it's selected and give us a chance
		// to inspect all sides of the object.
		if (r < 100) {
			this.transform.Rotate (Vector3.up, 2 * Time.deltaTime, Space.Self);
		} else {
			this.transform.Rotate (Vector3.up, -2 * Time.deltaTime, Space.Self);
		}
		if (r > 200) {
			r = 0; 
		}
		r++; 
		Debug.Log (r); 
	}
	

}
