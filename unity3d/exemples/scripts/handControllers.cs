using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class handControllers : MonoBehaviour {

	  public float playerJumpHeight = 10;
      Rigidbody rb;
     void Start() 
     {
         rb = GetComponent<Rigidbody>();
     }
	// Update is called once per frame
	void Update () {
		if (OVRInput.Get(OVRInput.Button.One)) {
		 //	rb.velocity = new Vector3(0, 10 * playerJumpHeight * Time.deltaTime, 0);
		}
	}
}
