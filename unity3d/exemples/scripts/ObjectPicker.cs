using UnityEngine;

public class ObjectPicker : MonoBehaviour
{
    GameObject pickedObject;
    float offset;
    private Color tempColor;
    public Rigidbody bullet;
    public float force = 400.0f;

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.F))
        {
            if(pickedObject == null)
            {
                Pickup(CastRay());
            } 
        }
        if(pickedObject !=null)
        {
            pickedObject.transform.position =
                this.transform.position +
                this.transform.forward * offset;
        }
        if (Input.GetKeyDown(KeyCode.G)) {
            Drop();
        }
        if (Input.GetKeyDown(KeyCode.X))
        {
             Rigidbody ball = Instantiate(bullet, transform.position, transform.rotation)
                as Rigidbody;

             ball.velocity = transform.TransformDirection(Vector3.forward * force);
        }
    }

    /// <summary>
    /// Casts a ray into the center of the scene.
    /// If a game object is hit, it is returned, otherwise null is returned.
    /// </summary>
    /// <returns>Hit Gameobject, if there's no hit, returns null</returns>
    GameObject CastRay()
    {
        Ray ray = Camera.main.ViewportPointToRay(new Vector3(0.5f, 0.5f, 0));
        RaycastHit hit;
        if (Physics.Raycast(ray, out hit))
        {
            if (hit.transform.tag == "pickit")
            {
                return hit.collider.gameObject;
            } 
        }

        return null;
    }


    /// <summary>
    /// Picks up the Gameobject passed in, if the parameter is null, nothing happens.
    /// </summary>
    /// <param name="go">The gameobject to pickup, accepts null objects</param>
    void Pickup(GameObject go)
    {
        if (go == null)
            return;

        this.pickedObject = go;
        offset = (this.transform.position - go.transform.position).magnitude;
        go.GetComponent<Rigidbody>().useGravity = false;
        Renderer rend = go.GetComponent<Renderer>();
        tempColor = rend.material.color; 
        rend.material.color = Color.green;

    }

    /// <summary>
    /// Drops the current picked up object, if there is no current object, does nothing.
    /// </summary>
    void Drop()
    {
        if (pickedObject == null)
            return;

        pickedObject.GetComponent<Rigidbody>().useGravity = true;
        Renderer rend = pickedObject.GetComponent<Renderer>();
        rend.material.color = tempColor;
        pickedObject = null;

    }
}
