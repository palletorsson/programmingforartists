using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class anim : MonoBehaviour
{
    private Animator anim2;

    void Start()
    {
        anim2 = gameObject.GetComponent<Animator>(); 
    }
    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.R))
        {
            anim2.enabled = true;
            anim2.Play("cubeanimation"); 
        }

        if (Input.GetKeyDown(KeyCode.T))
        {
            anim2.enabled = false;
        }
    }
}
