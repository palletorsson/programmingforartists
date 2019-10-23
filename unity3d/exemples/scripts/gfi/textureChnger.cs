using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class textureChnger : MonoBehaviour
{
    public Texture[] textures;
    public Renderer rend;
    int index = 0; 

    // Update is called once per frame
    void Update()
    {
        // use N to control texture 
        if (Input.GetKeyDown(KeyCode.N))
        {
            index = index + 1; 
        }

        // if texture length is less then index
        if (index > textures.Length - 1)
        {
            index = 0; 
        }

        rend.material.mainTexture = textures[index];

    }
}
