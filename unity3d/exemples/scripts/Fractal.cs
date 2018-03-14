// exampel scipt from http://catlikecoding.com/unity/tutorials/constructing-a-fractal/

using UnityEngine;
using System.Collections;

public class Fractal : MonoBehaviour {
	// public variables show in the inspector <o>
	public Mesh mesh;
	public Material material;
	public int maxDepth;
	public float childScale;

	private int depth;

	private void Start () {
		// gameObject refers to the mesh the script is attached to. So here we add the public virables to the gameObject
		gameObject.AddComponent<MeshFilter>().mesh = mesh;
		gameObject.AddComponent<MeshRenderer>().material = material;
		if (depth < maxDepth) {
			new GameObject("Fractal Child").AddComponent<Fractal>().
			Initialize(this, Vector3.up);
			new GameObject("Fractal Child").AddComponent<Fractal>().
			Initialize(this, Vector3.right);
		}
	}

	private void Initialize (Fractal parent, Vector3 direction) {
		mesh = parent.mesh;
		material = parent.material;
		maxDepth = parent.maxDepth;
		depth = parent.depth + 1;
		childScale = parent.childScale;
		transform.parent = parent.transform;
		transform.localScale = Vector3.one * childScale;
		transform.localPosition = Vector3.up * (0.5f + 0.5f * childScale);
		transform.localPosition = direction * (0.5f + 0.5f * childScale);


	}
}