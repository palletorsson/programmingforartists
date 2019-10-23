using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class rotCoin : MonoBehaviour
{
    public float rotSpeed = 1.0f;
     
    // Start is called before the first frame update
    void Start()
    {
        transform.Rotate(transform.up, Random.Range (0f, 360f));
    }

    // Update is called once per frame
    void Update()
    {
        transform.Rotate(transform.up, 360 * rotSpeed * Time.deltaTime); 
        
    }
}
