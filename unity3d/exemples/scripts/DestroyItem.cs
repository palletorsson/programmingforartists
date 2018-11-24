using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DestroyItem : MonoBehaviour {


    new Color tempColor; 
    private void OnTriggerEnter(Collider other)
    {
        other.gameObject.tag = "destroyMe";
        tempColor = gameObject.GetComponent<Renderer>().material.color;         
        gameObject.GetComponent<Renderer>().material.color = new Color(0.8f, 0.0f, 0.0f, 0.5f); 
    }

    private void OnTriggerExit(Collider other)
    {
        gameObject.GetComponent<Renderer>().material.color = tempColor;
    }

}
