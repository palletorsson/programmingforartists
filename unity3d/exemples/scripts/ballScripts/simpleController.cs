using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class simpleController : MonoBehaviour {

	// del rörelse  
	public float Sspeed;
	private Rigidbody playerBall;

	// del bullet
	public Rigidbody Sbullet;
	public float Spower = 20f;
	public bool full = true; 
	void Start ()
	{

		playerBall = GetComponent<Rigidbody>();
	
	}


	void FixedUpdate ()
	{
		float moveHorizontal = Input.GetAxis ("Horizontal");
		float moveVertical = Input.GetAxis ("Vertical");
		print (moveHorizontal); 
		print (moveVertical); 
		Vector3 movement = new Vector3 (moveHorizontal, 0.0f, moveVertical);

		playerBall.AddForce (movement * Sspeed);
		if (full) {

				Rigidbody ball = Instantiate (Sbullet, transform.position, transform.rotation)
					as Rigidbody;
				ball.velocity = transform.TransformDirection (Vector3.back * Spower);
		
		} else {
			if (Input.GetKeyDown (KeyCode.Z)) {
				Rigidbody ball = Instantiate (Sbullet, transform.position, transform.rotation)
					as Rigidbody;
				ball.velocity = transform.TransformDirection (Vector3.forward * Spower);
			}
		}
	}

}