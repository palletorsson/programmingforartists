using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class randomPlacing : MonoBehaviour {
	public int numbers = 10;
	public int range = 4; 

	void Start () {
		for (int i = 0; i < numbers; i++) {
			GameObject NewCoin = Instantiate (GameObject.FindGameObjectsWithTag ("coin") [0]);
			NewCoin.transform.position = new Vector3 (Random.Range(-range, range), 0.5f, Random.Range(-range, range));
		}

	}

}