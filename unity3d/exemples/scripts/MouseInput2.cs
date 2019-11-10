using UnityEngine;
using System.Collections;

public class MouseInput : MonoBehaviour {

    private Color basicColor = Color.green;
    private Color hoverColor = Color.red;
    private Renderer renderer;

    void Start()
    {
        renderer = GetComponent<Renderer>();
        renderer.material.color = basicColor;
    }

    void OnMouseDown() {
        Destroy(gameObject);
    }
  
    void OnMouseOver() {

        this.transform.Rotate(Vector3.up, 45 * Time.deltaTime, Space.Self);
    }

    void OnMouseEnter()
    {
        renderer.material.color = hoverColor;
    }

    void OnMouseExit()
    {
        renderer.material.color = basicColor;
    }

}
