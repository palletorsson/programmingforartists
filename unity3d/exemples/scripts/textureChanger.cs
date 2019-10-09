using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class textureChanger : MonoBehaviour
{
    public Texture[] textures;
    public Renderer rend;

    // Update is called once per frame
    void Update()
    {

        if (Input.GetKeyDown(KeyCode.F))
        {
            rend.material.mainTexture = textures[0];
        }
        if (Input.GetKeyDown(KeyCode.G))
        {
            rend.material.mainTexture = textures[1];
        }
        if (Input.GetKeyDown(KeyCode.H))
        {
            rend.material.mainTexture = textures[2];
        }
    }
}
