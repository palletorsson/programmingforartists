using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CopyItem : MonoBehaviour {

    private void OnTriggerEnter(Collider other)
    {

        if (other.tag == "pickit") {
            GameObject NewCube = Instantiate(other.gameObject);
            Vector3 pos = other.gameObject.transform.position; 
            NewCube.transform.position = new Vector3(pos.x, pos.y + 4.0f, pos.z - 9.0f);
            other.transform.position = new Vector3(pos.x, pos.y + 4.0f, pos.z - 8.0f); 
        }

    }
}
