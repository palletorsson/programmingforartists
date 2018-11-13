using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class triggerPickupSound : MonoBehaviour {
	public AudioSource source; 
	public void OnTriggerEnter(Collider other) {
		if (other.gameObject.tag == "ball") {
			Debug.Log ("entered", other);
			source.Play (); 
			Destroy (gameObject);
		}
	}
}
