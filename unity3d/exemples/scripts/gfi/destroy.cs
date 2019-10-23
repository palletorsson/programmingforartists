using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class destroy : MonoBehaviour
{

    public AudioSource source;
    public Text coinText;
    public int points = 0;
    private string sceneName;


    void Start() {
     
        sceneName = "textureChange";
        Debug.Log(sceneName); 
    }

    // Update is called once per frame
    public void OnTriggerEnter(Collider other)
    {
       if (other.gameObject.tag == "coin") { 
       source.Play();
       Destroy( other.gameObject );
       points = points + 1;
       coinText.text = "Coins: " + points.ToString(); 
       
       if (points > 1) {
                SceneManager.LoadSceneAsync(sceneName);
            }
       }
    }
}
