// exampel scipt from http://catlikecoding.com/unity/tutorials/constructing-a-fractal/

using UnityEngine;
using System.Collections;

public class GenerateBox : MonoBehaviour {
	// public variables show in the inspector <o>
	
	public Material material;
	public float beforeStart;
	public float timeOut;
	Vector3 tempScale; 

    void Start() {
		InvokeRepeating("CreateCube", beforeStart, timeOut);
    }

	void CreateCube () {
		GameObject cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
		cube.AddComponent<Rigidbody>();
		//cube.AddComponent<Renderer>();
		cube.GetComponent<Renderer>().material = material;
	
		tempScale = cube.transform.localScale; 
		tempScale.x = 0.5f; 
		tempScale.y = 0.5f; 
		tempScale.z = 0.5f; 
		cube.transform.localScale = tempScale; 
        cube.transform.position = new Vector3(0, 5.5F, 0);
	}

	
}
