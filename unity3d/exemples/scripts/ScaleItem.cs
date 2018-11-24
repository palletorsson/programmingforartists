using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ScaleItem : MonoBehaviour
{
    bool scaleCoolDown = false;
    float coolTime = 3.0f; 

    private void Update()
    {
        if (scaleCoolDown) {
            coolTime = coolTime - Time.deltaTime; 
            if (coolTime < 0.0f) {
                scaleCoolDown = false;
                coolTime = 3.0f;
            }

        } 
    }

    private void OnTriggerEnter(Collider other)
    {

        if (other.tag == "pickit" && scaleCoolDown == false)
        {

            Vector3 pos = other.gameObject.transform.position;
            other.transform.position = new Vector3(pos.x - 4.0f, pos.y + 4.0f, pos.z - 4.0f);
            other.transform.localScale += new Vector3(0.5F, 0.5F, 0.5F);
            scaleCoolDown = true;
        } 

    }
}
