using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GridController : MonoBehaviour {

	private int randomNumber; 

	private List<int> cubeList = new List<int>();

	public float beforeStart;
	public float timeOut;
	public Material redMaterial;
	public Material whiteMaterial;



	// Use this for initialization
	void Start()
	{
		InvokeRepeating("Gen", beforeStart, timeOut);
	}
	

	public void Gen() {
		DestroyGameObjectsWithTag ("theCube");
		CreateMatrix ();
	}

	public void CreateMatrix () {
	
		for (int k = 1; k < 20; k++) {

			for (int j = 1; j < 10; j++) {
				for (int i = 1; i < 10; i++) {
					int randomNumber2 = Random.Range (0, 10); 
					if (randomNumber2 > 7) {
						GameObject NewCube = Instantiate (GameObject.FindGameObjectsWithTag ("theCube") [0]);
						NewCube.transform.position = new Vector3 (i, k, j); 
						if (randomNumber2 == 9) {
							NewCube.GetComponent<Renderer> ().material = redMaterial;
						} else {
							NewCube.GetComponent<Renderer> ().material = whiteMaterial;
						}
						cubeList.Add(1);

					} else {
						cubeList.Add(0);
					}
				}
			}
		}
	}
	public static void DestroyGameObjectsWithTag(string tag)
	{
		GameObject[] gameObjects = GameObject.FindGameObjectsWithTag(tag);
		foreach (GameObject target in gameObjects) {
			GameObject.Destroy(target);
		}
	}
}


	