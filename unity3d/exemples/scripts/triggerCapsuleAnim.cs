using UnityEngine;

public class triggerCapsuleAnim : MonoBehaviour {

	private Animator anim;	
	// Use this for initialization
	void Start () {
		anim = gameObject.GetComponent<Animator>();
	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown(KeyCode.F))
		{
			Debug.Log("Moving");
			anim.Play("PillAnimation");
			anim.speed = 2;
		}
		if (Input.GetKeyDown (KeyCode.G)) {
			Debug.Log ("Stopping");
			anim.speed = 0;
		}
	}
}		
