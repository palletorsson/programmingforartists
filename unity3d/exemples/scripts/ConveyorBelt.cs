using UnityEngine;
using System.Collections;

public class ConveyorBelt : MonoBehaviour {

	public float speed = 2.0f;

	void FixedUpdate()
	{
		Rigidbody rigidbody = GetComponent<Rigidbody>();
		rigidbody.position -= transform.forward * speed * Time.deltaTime;
		rigidbody.MovePosition (rigidbody.position + transform.forward * speed * Time.deltaTime);

	}

}