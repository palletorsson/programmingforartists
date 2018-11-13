using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class PlayerController : MonoBehaviour {

	// del rörelse  
	public float speed;
	private Rigidbody playerBall;

	// del bullet
	public Rigidbody bullet;
	public float power = 20f;


	// del ljud
	public AudioSource coinSound; 

	// del text 
	public Text coinText;
	public int pointScore = 0;


	void Start ()
	{
		// del rörelse 
		playerBall = GetComponent<Rigidbody>();
		coinText.text = "Coins : 0"; 
	}

	public void OnTriggerEnter(Collider other) {
		if (other.tag == "coin") {
			pointScore++; 
			coinText.text = "Coins : " + pointScore.ToString (); 
			coinSound.Play (); 
			Destroy (other.gameObject);
		}
	}
	void Update () {
		

	}
	// del rörelse 
	void FixedUpdate ()
	{
		float moveHorizontal = Input.GetAxis ("Horizontal");
		float moveVertical = Input.GetAxis ("Vertical");

		Vector3 movement = new Vector3 (moveHorizontal, 0.0f, moveVertical);
		transform.Rotate (transform.up, 360 * 0.1f * Time.deltaTime);
		playerBall.AddForce (movement * speed);

		if (Input.GetKeyDown(KeyCode.Z))
		{
			Rigidbody ball = Instantiate(bullet, transform.position, transform.rotation)
				as Rigidbody;
			ball.velocity = transform.TransformDirection(Vector3.forward * power);
		}
	}

}