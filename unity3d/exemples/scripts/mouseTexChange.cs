using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class mouseTexChange : MonoBehaviour
{

    public Texture[] textures;
    public Renderer rend;
    private int index = 0; 
    // Start is called before the first frame update


    // Update is called once per frame
    void Update()
    {

        if (Input.GetKeyDown(KeyCode.G))
        {
            index = index + 1;
        }
     
        if (index > textures.Length - 1)
        {
            index = 0;
        }
       
        rend.material.mainTexture = textures[index];

    }
}