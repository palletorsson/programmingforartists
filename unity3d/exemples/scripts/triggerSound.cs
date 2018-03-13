using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class triggerSound : MonoBehaviour {
	public AudioSource source; 

	// Use this for initialization
	public void Awake () {
		source = GetComponent<AudioSource> ();
	}

	public void OnTriggerEnter(Collider other) {
		source.Play (); 
	}

}
