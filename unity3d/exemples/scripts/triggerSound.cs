// Programming for Artist Unity Exempel 2
// --------------------------------------
// 1. Add a plane _ and box [X] to the scene 

// 2. Use Standard Assets, import Characters 
// https://docs.unity3d.com/Manual/HOWTO-InstallStandardAssets.html 
// Search for "FPSController" in the project window and drag FPSController in to the scene
// Remove the default Camera 

// 3. Create a audio source and select a sound for the source
// https://docs.unity3d.com/2018.1/Documentation/Manual/class-AudioSource.html

// 4. Add another cube [X] and drag it to hover of the first cube. 

// 5. Add this script to your Assets folder
// Drag the script on to the cube

// 6. Drag a audio source in to the slot. 

// 7. Click the box and uncheck is trigger in the box property. 

using UnityEngine;

public class TriggerSound : MonoBehaviour {
	
	// "public" makes the variable exposed in the unity interface. 
	public AudioSource source; 
    
	
	// Trigger the sound on by entering the trigger collider 
	// https://docs.unity3d.com/ScriptReference/Collider.OnTriggerEnter.html
	public void OnTriggerEnter(Collider other) {
		source.Play (); 
	}

	// Stop the the sound exit the trigger collider 
	public void OnTriggerExit(Collider other)
	{
		source.Stop (); 
	}
}
