using UnityEngine;

public class FixMatrix : MonoBehaviour {
    public int levels = 8; 
    public float cubeScale = 1;
    public float offSet = 1;
    public float gridSize = 16;
    public float x = 1;
    public float y = 2;
    public float z = 1;
    public GameObject FirstCube;
    private float i;
    int step = 0; 

    // Use this for initialization
    void Start () {
        for (int h = 0; h < levels; h++)
        {
            for (int i = step ; i < gridSize - step; i++)
            {
                for (int j = step; j < gridSize - step; j++)
                {

                GameObject NewCube = Instantiate(FirstCube);
                x = (i / cubeScale) + offSet;
                z = (j / cubeScale) + offSet;
                NewCube.transform.position = new Vector3(x, h+1, z);
                NewCube.GetComponent<Renderer>().material.color = new Color(Random.Range(0.0f, 1.0f), 0.0f, Random.Range(0.0f, 1.0f));
                }
            
            }
        step++; 
        }

    }
}
