using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Shooter : MonoBehaviour {

    public float power = 20f;
    public float speed = 2f;
    public Rigidbody bullet;

    // Use this for initialization
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

        float h = Input.GetAxis("Horizontal") * Time.deltaTime * speed;
        float v = Input.GetAxis("Vertical") * Time.deltaTime * speed;
        transform.Translate(h, v, 0);

        if (Input.GetButtonUp("Fire1"))
        {
            Rigidbody ball = Instantiate(bullet, transform.position, transform.rotation)
                as Rigidbody;
            ball.velocity = transform.TransformDirection(Vector3.forward * power);
        }


    }
}
