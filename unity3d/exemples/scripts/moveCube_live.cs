using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class moveCube : MonoBehaviour
{
    float speed = 90;
    float scale = 3;

    // Update is called once per frame
    void Update()
    {
        this.transform.Rotate(new Vector3(1f, 1f, 1f), speed * Time.deltaTime, Space.Self);

        if (transform.position.y < 3)
        {
            this.transform.position = new Vector3(
                                            transform.position.x,
                                            transform.position.y + (3.0f * Time.deltaTime),
                                            transform.position.z);
           // Debug.Log(transform.position.y);
            this.transform.localScale = new Vector3(scale / 2f, scale / 2f, scale / 2f);
        }
        else
        {
            this.transform.position = new Vector3(
                                        transform.position.x,
                                        -2,
                                        transform.position.z);

        }
        if (transform.position.y < 2)
        {
            this.transform.localScale = new Vector3(scale, scale, scale);
        }


    }
}