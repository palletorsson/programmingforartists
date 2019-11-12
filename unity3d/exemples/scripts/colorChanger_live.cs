using UnityEngine;

public class colorChanger : MonoBehaviour
{
    public Color defaultColor;

    void Start()
    {
        defaultColor = GetComponent<Renderer>().material.color; 
    }

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.R)) {
            GetComponent<Renderer>().material.color = Color.red; 
        }
        if (Input.GetKeyDown(KeyCode.B))
        {
            GetComponent<Renderer>().material.color = Color.blue;
        }
        if (Input.GetKeyDown(KeyCode.G))
        {
            GetComponent<Renderer>().material.color = Color.green;
        }
        if (Input.GetKeyDown(KeyCode.Space))
        {
            GetComponent<Renderer>().material.color = defaultColor;
        }


    }
}
