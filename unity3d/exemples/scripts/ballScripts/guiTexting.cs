using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class guiTexting : MonoBehaviour {
	
	public Text coinText;
	public int pointScore = 0;

	// Use this for initialization
	void Start () {
		coinText.text = "0";
	}

	void ApplyPonits()
	{
		pointScore = pointScore + 1; 
		print("point score");
		coinText.text = pointScore.ToString ();
	}
}
