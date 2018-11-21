using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class reStart : MonoBehaviour {
	public Vector3 startPosition; 
	private GameObject playerRespawn;

	void Awake () {

		playerRespawn = GameObject.FindWithTag("Player");
		startPosition = transform.position;

	}
	void OnCollisionEnter(Collision collide) {     
		  Debug.Log("collide.transform.tag"); 
		Debug.Log(collide.transform.tag);
		if(collide.transform.tag == "outer") {        
			
				playerRespawn.transform.position = new Vector3(0.0f, 0.0f, 0.0f);
				Application.LoadLevel("grid");  //Application.LoadLevel("HighScore");
			}        
	}

}
