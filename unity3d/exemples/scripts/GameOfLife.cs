
using UnityEngine;

public class GameOfLife : MonoBehaviour {

	private readonly int randomNumber; 
    private readonly int[,] cubeList = new int[,] { 
                                            { 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 },
                                            { 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 },
                                            { 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 },
                                            { 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 },
                                            { 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 },
                                            { 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 },
                                            { 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 },
                                            { 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 },
                                            { 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 },
                                            { 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 },     
                                            { 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 },
                                            { 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 },
                                            { 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 },
                                            { 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 },
                                            { 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 },
                                            { 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 },
                                            { 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 },
                                            { 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 },

                                        };  
	public int beforeStart;
	public float timeOut;
    public int offSet; 
    public float offSetVertical;
    public int cubeScale;
    private int level = 0;
    public bool timeScale;
    private bool newBorn;   
    public GameObject[] rig;
    public Material lilacMaterial; 
    public Material defaultMaterial; 

	// Use this for initialization
	void Start()
	{   
        CreateMatrix (level);
        level++; 
		InvokeRepeating("Gol", beforeStart, timeOut);
	}
	
    public void changeTScale() { 
        if (timeScale) {
            timeScale = false;
        } else {
            timeScale = true;
        }

    }
	public void Gol() {
		level++; 
        if (level == 30) { 
            level = 0;
            DestroyGameObjectsWithTag("GolCube");
            CreateMatrix (level);
        } else if (level < 16) {
            GolMatrix(level);
        } else if (level == 24) {
            rig = GameObject.FindGameObjectsWithTag("GolCube");
            foreach (GameObject r in rig) {
                r.GetComponent<Rigidbody>().isKinematic = false;
            }
        } 
	}

	public void CreateMatrix (int k) {
        for (int j = 0; j < 17; j++) {
            for (int i = 0; i < 17; i++) {
                int randomNumber2 = Random.Range (0, 10); 
                if (randomNumber2 > 4) {                 
                    GameObject NewCube = Instantiate (GameObject.FindGameObjectWithTag ("GolCube"));
                    float x = ((float)i/(float)cubeScale)+(float)offSet;
                    float y = ((float)k/(float)cubeScale)+(float)offSetVertical; 
                    float z = ((float)j/(float)cubeScale)+(float)offSet;  
                    // Debug.Log(x); Debug.Log( y); Debug.Log(z);
                    NewCube.transform.rotation = Quaternion.identity;
                    NewCube.transform.position = new Vector3 (x, y, z);
                    NewCube.GetComponent<Rigidbody>().isKinematic = true;
                    cubeList[j,i] = 1; 
                } else {
                    cubeList[j,i] = 0; 
                }
            }
        }
	}

    public void ModMatrix (int k) { 
        for (int j = 0; j < 11; j++) {
            for (int i = 0; i < 11; i++) {            
                if (cubeList[j,i] == 1) {
                    int randomNumber2 = Random.Range (0, 10); 
                    if (randomNumber2 > 2) {
                        GameObject NewCube = Instantiate (GameObject.FindGameObjectsWithTag ("GolCube") [0]);
                        NewCube.transform.rotation = Quaternion.identity;
                        NewCube.transform.position = new Vector3 ((i/cubeScale)+offSet, (k/cubeScale)+offSetVertical, (j/cubeScale)+offSet);
                        cubeList[j,i] = 1; 
                    } else {
                        cubeList[j,i] = 0; 
                    }      
                }
            }
        }
	}

    public void GolMatrix (int k) { 
        if (!timeScale) { DestroyGameObjectsWithTag("GolCube"); }
        for (int j = 1; j < 16; j++) {
            for (int i = 1; i < 16; i++) { 
               // int isAlive = 0; 
                int neighbour = 0;
                newBorn = false;  

                // if cell is dead and has exactly three alive neighbors, it changes its state to alive.
                // if cell is alive and has lower than two and higher than three alive neighbors, it dies,

                if (cubeList[j+1,i] == 1) {neighbour++; } // top  
                if (cubeList[j+1,i+1] == 1) {neighbour++; } // top right
                if (cubeList[j-1,i+1] == 1) {neighbour++; } // down left

                if (cubeList[j,i+1] == 1) {neighbour++; } // right
                if (cubeList[j,i-1] == 1) {neighbour++; } // left

                if (cubeList[j-1,i] == 1) {neighbour++; } // down
                if (cubeList[j-1,i-1] == 1) {neighbour++; } // down left
                if (cubeList[j+1,i-1] == 1) {neighbour++; } // down right

                float x = ((float)i/(float)cubeScale)+(float)offSet;
                float y = 1.0f; 
                if (timeScale) {
                    y = ((float)k/(float)cubeScale)+(float)offSetVertical; 
                } else {
                    y = (float)offSetVertical; 
                }
                float z = ((float)j/(float)cubeScale)+(float)offSet; 
               
                int aliveState = 0; 
                bool isAlive = cubeList[j,i] != 0;

                if (isAlive && neighbour < 2) {
                    aliveState = 0;
                }

                if (isAlive && (neighbour == 2 || neighbour == 3)) {
                    aliveState = 1;
                } 

                if (isAlive && neighbour > 3) {
                    aliveState = 0;
                } 

                if (!isAlive && neighbour == 3) {
                   aliveState = 1;
                   newBorn = true; 
                } 

                if(aliveState == 1) {
                    GameObject NewCube = Instantiate (GameObject.FindGameObjectsWithTag ("GolCube") [0]);
                    NewCube.GetComponent<Rigidbody>().isKinematic = true;
                    NewCube.transform.rotation = Quaternion.identity;
                    NewCube.transform.position = new Vector3 (x, y, z);
                    if (newBorn) { NewCube.GetComponent<Renderer> ().material = lilacMaterial; }
                     else {
                        NewCube.GetComponent<Renderer> ().material = defaultMaterial;
                    }
	
                    
                }
                   cubeList[j,i] = aliveState;      
            }
        }
    }
	

	public static void DestroyGameObjectsWithTag(string tag)
	{
		GameObject[] gameObjects = GameObject.FindGameObjectsWithTag(tag);
		foreach (GameObject target in gameObjects) {
            Destroy(target);
		}
	}

}


	