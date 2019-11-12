using UnityEngine;

public class changeTextures : MonoBehaviour
{
    public Texture[] textures;
    public int index = 0;
    public Renderer rend;

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            Debug.Log(index); 
            rend.material.mainTexture = textures[index];
            index++;
           
            if (index > textures.Length-1) {
                index = 0;
            }
        }
    }
}
