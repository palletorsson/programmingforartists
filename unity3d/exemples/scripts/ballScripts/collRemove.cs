using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;


public class collRemove: MonoBehaviour {
	private float rotateSpeed = 1.0f;


	void Start() {
		transform.Rotate (transform.up, Random.Range (0f, 360f));
	}

	void Update (){
		transform.Rotate (transform.up, 360 * rotateSpeed * Time.deltaTime);
	}

}


