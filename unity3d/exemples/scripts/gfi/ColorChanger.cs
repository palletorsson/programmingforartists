using UnityEngine;

public class ColorChanger : MonoBehaviour
{

    Color newColor = new Color(0.9f, 0.0f, 0.9f, 0.9f);
   
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.R))
        {
            GetComponent<Renderer>().material.color = Color.red;
        }
        if (Input.GetKeyDown(KeyCode.G))
        {
            GetComponent<Renderer>().material.color = Color.green;
        }

        if (Input.GetKeyDown(KeyCode.B))
        {
            GetComponent<Renderer>().material.color = newColor;
        }
    }
}