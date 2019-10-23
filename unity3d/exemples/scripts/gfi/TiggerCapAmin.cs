using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TiggerCapAmin : MonoBehaviour
{
    private Animator anim;
    public int speed = 2; 

    // Start is called before the first frame update
    void Start()
    {
        anim = gameObject.GetComponent<Animator>();
        anim.enabled = false;
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.A))
        {
            anim.speed = speed;
            anim.enabled = true;
            anim.Play("PillAnimation"); 
        }
        if (Input.GetKeyDown(KeyCode.S))
        {
            anim.speed = 0; 
            //anim.Play("Stopping");
        }

    }
}
