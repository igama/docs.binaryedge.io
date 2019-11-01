# Kubernetes

Extract Kubernetes detailed information.

## Kubernetes Request Example

```
curl -v -L https://api.binaryedge.io/v1/tasks -d '{"type":"scan", "options":[{"targets":["X.X.X.X"], "ports":[{"port":8443, "protocol":"tcp", "modules":["kubernetes"]}]}]}' -H "X-Token:<Token>"
```

## Schema

### Kubernetes Event Schema

```json
{
   "result":{
      "data":{
         "auth_required":"boolean",
         "connected":"boolean",
         "pods":[
            {
               "status":{
                  "containerStatuses":[
                     {
                        "containerID":"string",
                        "imageID":"string",
                        "image":"string",
                        "restartCount":"int",
                        "ready":"boolean",
                        "lastState":{
                           "terminated":{
                              "containerID":"string",
                              "finishedAt":"string",
                              "startedAt":"string",
                              "reason":"string",
                              "exitCode":"int"
                           }
                        },
                        "state":{
                           "running":{
                              "startedAt":"string"
                           }
                        },
                        "name":"string"
                     }
                  ],
                  "startTime":"string",
                  "podIP":"string",
                  "hostIP":"string",
                  "conditions":[
                     {
                        "lastTransitionTime":"string",
                        "lastProbeTime":"string",
                        "status":"string",
                        "type":"string"
                     },
                     ...
                  ],
                  "phase":"string"
               },
               "spec":{
                  "securityContext":"object",
                  "nodeName":"string",
                  "dnsPolicy":"string",
                  "terminationGracePeriodSeconds":"int",
                  "restartPolicy":"string",
                  "containers":[
                     {
                        "imagePullPolicy":"string",
                        "terminationMessagePath":"string",
                        "resources":"object",
                        "ports":[
                           {
                              "protocol":"string",
                              "containerPort":"int"
                           }
                        ],
                        "image":"string",
                        "name":"string"
                     }
                  ]
               },
               "metadata":{
                  "ownerReferences":[
                     {
                        "controller":"boolean",
                        "uid":"string",
                        "name":"string",
                        "kind":"string",
                        "apiVersion":"string"
                     }
                  ],
                  "annotations":{
                     "kubernetes.io/created-by":"string"
                  },
                  "name":"string",
                  "generateName":"string",
                  "namespace":"string",
                  "selfLink":"string",
                  "uid":"string",
                  "resourceVersion":"string",
                  "creationTimestamp":"string",
                  "labels":{
                     "run":"string",
                     "pod-template-hash":"string"
                  }
               }
            },
            ...
         ]
      }
   },
   ...
}
```

### Contents of the fields:

* connected - Whether the module successfully connected to the server AND it responded as a valid Kubernetes
* auth_required - Whether the server requested auth to access certain data
* pods - Information regarding each Pod (group of containers)
  * status - Pod status information
  * spec - Pod spec information
  * metadata - Pod metadata

## Kubernetes Event Example

```json
{
   "result":{
      "data":{
         "auth_required":false,
         "connected":true,
         "pods":[
            {
               "status":{
                  "containerStatuses":[
                     {
                        "containerID":"docker://900c7fa75ae0675d2081f6dc1a995c0bb56390b71647f670048a3bc56688b634",
                        "imageID":"docker-pullable://docker.io/nginx@sha256:e71b1bf4281f25533cf15e6e5f9be4dac74d2328152edf7ecde23abc54e16c1c",
                        "image":"nginx",
                        "restartCount":1,
                        "ready":true,
                        "lastState":{
                           "terminated":{
                              "containerID":"docker://3ac64e0962357b682f1887e2d308bb4c964dfe43ea6d49653531602e7a813676",
                              "finishedAt":"2019-04-22T14:56:51Z",
                              "startedAt":"2019-04-12T16:15:16Z",
                              "reason":"Error",
                              "exitCode":137
                           }
                        },
                        "state":{
                           "running":{
                              "startedAt":"2019-04-22T15:05:57Z"
                           }
                        },
                        "name":"my-nginx"
                     }
                  ],
                  "startTime":"2019-04-12T16:15:06Z",
                  "podIP":"172.17.0.3",
                  "hostIP":"127.0.0.1",
                  "conditions":[
                     {
                        "lastTransitionTime":"2019-04-12T16:15:06Z",
                        "lastProbeTime":null,
                        "status":"True",
                        "type":"Initialized"
                     },
                     ...
                  ],
                  "phase":"Running"
               },
               "spec":{
                  "securityContext":{

                  },
                  "nodeName":"127.0.0.1",
                  "dnsPolicy":"ClusterFirst",
                  "terminationGracePeriodSeconds":30,
                  "restartPolicy":"Always",
                  "containers":[
                     {
                        "imagePullPolicy":"Always",
                        "terminationMessagePath":"/dev/termination-log",
                        "resources":{

                        },
                        "ports":[
                           {
                              "protocol":"TCP",
                              "containerPort":80
                           }
                        ],
                        "image":"nginx",
                        "name":"my-nginx"
                     }
                  ]
               },
               "metadata":{
                  "ownerReferences":[
                     {
                        "controller":true,
                        "uid":"228364ac-5d3e-11e9-948a-525400ab07e5",
                        "name":"my-nginx-379829228",
                        "kind":"ReplicaSet",
                        "apiVersion":"extensions/v1beta1"
                     }
                  ],
                  "annotations":{
                     "kubernetes.io/created-by":"{\"kind\":\"SerializedReference\",\"apiVersion\":\"v1\",\"reference\":{\"kind\":\"ReplicaSet\",\"namespace\":\"default\",\"name\":\"my-nginx-379829228\",\"uid\":\"228364ac-5d3e-11e9-948a-525400ab07e5\",\"apiVersion\":\"extensions\",\"resourceVersion\":\"8215\"}}\n"
                  },
                  "name":"my-nginx-379829228-0zvdr",
                  "generateName":"my-nginx-379829228-",
                  "namespace":"default",
                  "selfLink":"/api/v1/namespaces/default/pods/my-nginx-379829228-0zvdr",
                  "uid":"22841943-5d3e-11e9-948a-525400ab07e5",
                  "resourceVersion":"951969",
                  "creationTimestamp":"2019-04-12T16:15:05Z",
                  "labels":{
                     "run":"my-nginx",
                     "pod-template-hash":"379829228"
                  }
               }
            },
            ...
         ]
      }
   },
   ...
}
```
