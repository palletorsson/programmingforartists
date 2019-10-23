using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class mouseTexChange : MonoBehaviour
{

    public Texture[] textures;
    public Renderer rend;
    private int index = 0;
 
    Camera MainCamera;

    void Start()
    {
        MainCamera = Camera.main;
    }

    // Update is called once per frame
    void Update() { 
       
        if (Input.GetMouseButtonDown(0)){ // if left button pressed...
        
            Ray ray = MainCamera.ScreenPointToRay(Input.mousePosition);
             RaycastHit hit;
             if (Physics.Raycast(ray, out hit)){

                index = index + 1;
                if (index > textures.Length - 1)
                    {
                        index = 0;
                    }

                rend.material.mainTexture = textures[index];

            }
        }
    }
}