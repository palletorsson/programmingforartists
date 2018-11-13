using UnityEngine;
using System.Collections;

public class CameraController : MonoBehaviour {

	public GameObject player;      
	private Vector3 offset;  

	void Start () 
	{
		// räkna ut avståndet mellan bollen och kameran
		offset = transform.position - player.transform.position;
	}

	// LateUpdate händer efter Update i varje frame
	void LateUpdate () 
	{
		// sätt kameran till bollen postion - offset
		transform.position = player.transform.position + offset;
	} 

}