using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class enemy : MonoBehaviour {
	public Transform theBall; 
	public int MoveSpeed = 4;
	public int lifes = 3;
	public Text enemyText;
	public float coolDownTime = 3.0f;
	private Rigidbody enemyPlayer;
	private bool coolDown = false; 
	public float coolDownConuter = 3.0f; 

	// del ljud
	public AudioSource bumpSound; 

	void Start () {
		enemyPlayer = GetComponent<Rigidbody>();
		enemyText.text = "Stabbed : " + lifes.ToString (); 
	}
	
	// Update is called once per frame
	void Update () {
		if (coolDown == false) {
			transform.LookAt (theBall);
			transform.position += transform.forward * MoveSpeed * Time.deltaTime;
		} else {

			coolDownConuter = coolDownConuter - Time.deltaTime;

			if (coolDownConuter >= coolDownTime/2) {
				transform.position += transform.forward * - MoveSpeed * Time.deltaTime;
			}


			if (coolDownConuter <= 0) {
				coolDown = false;
				coolDownConuter = coolDownTime; 
				print ("cool down over"); 

			}

		}

	}
		
	void OnCollisionEnter (Collision other)
	{


		if (other.gameObject.tag == "Player" && coolDown == false) {
			lifes--; 
			enemyText.text = "Stabbed : " +lifes.ToString (); 
			coolDown = true;
			bumpSound.Play (); 
			Vector3 position = other.transform.position;
			position.y += 10;
			other.transform.position = position;
			if (lifes <= 0) {
				Application.LoadLevel (0);
			}

		} 
}
}




