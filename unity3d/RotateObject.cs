using UnityEngine;

public class RotateObject : MonoBehaviour
{
    public Vector3 RotateAmount;  // degrees per second to rotate in each axis. Set in inspector.
    public int CutSpeed;
    private int rot = 0; 

    // Update is called once per frame
    void Update() { 
     if (rot == 1)
        {
            Debug.Log("Moving");
            transform.Rotate(RotateAmount* Time.deltaTime);
        }

        if (Input.GetKeyDown(KeyCode.F))
        {
            rot = 1; 
        }
        if (Input.GetKeyDown(KeyCode.G))
        {
            rot = 0;
        }



    }
}