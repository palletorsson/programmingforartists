using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlatRot : MonoBehaviour {

 void OnTriggerStay(Collider other) {
             if(other.gameObject.tag == "platform") {
             transform.parent = other.transform;
 
         }
     }
 
 void OnTriggerExit(Collider other) {
     if(other.gameObject.tag == "platform") {
             transform.parent = null;
             
         }
     }    
}
