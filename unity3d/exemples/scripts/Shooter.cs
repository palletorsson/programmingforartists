// Programming for Artist Unity Exempel 3
// --------------------------------------
// 1. Cube --> Scene
// 2. Script --> Assets folder
// 3. Script --> Cube

using UnityEngine;

public class Shooter : MonoBehaviour {

    // Variable power to be use for ball movement. 
    float force = 20f;

	// Variable speed to control camera speed
    float speed = 0.2f;

    // Expose the bullet to the Unity editor
    public Rigidbody bullet;

    // Update each frame
    void FixedUpdate()
    {
        // Input.GetAxis --> https://docs.unity3d.com/Manual/Input.html
        float h = Input.GetAxis("Horizontal") *  speed;
        float v = Input.GetAxis("Vertical")  * speed;

        // transform.Translate - Translates the Gameobject that the script is attached to
        transform.Translate(h, v, 0);

        if (Input.GetKeyDown(KeyCode.X))
        {
			// Instantiate a Rigidbody called ball at the postion of the camera
			// https://docs.unity3d.com/ScriptReference/Object.Instantiate.html
            Rigidbody ball = Instantiate(bullet, transform.position, transform.rotation)
                as Rigidbody;

			// Apply a force to the ball in the dirction of the camera 
			// https://docs.unity3d.com/ScriptReference/Transform.TransformDirection.html
            ball.velocity = transform.TransformDirection(Vector3.forward * force);
        }
    }
}
