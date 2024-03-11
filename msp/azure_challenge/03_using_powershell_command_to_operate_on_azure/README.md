# Using PowerShell command to operate on Azure

### Overview
PowerShell is a cross-platform task automation solution made up of a command-line shell, a scripting language, and a configuration management framework. PowerShell runs on Windows, Linux, and macOS.

PowerShell is a modern command shell that includes the best features of other popular shells. Unlike most shells that only accept and return text, PowerShell accepts and returns .NET objects. The shell includes the following features:

- Robust command-line history
- Tab completion and command prediction
- Supports command and parameter aliases
- Pipeline for chaining commands
- In-console help system, similar to Unix man pages

By the end of this lab, you will be able to:
- Using Windows PowerShell ISE to create scripting
- Using script to create a new file
- Using PowerShell command to deploy a nginx in docker


### Virtual Machines
- Security: Standard
- Windows Server: 2022
- Avaliability Zone: No infrastructure redundancy required
- Public IP: `13.68.84.116`

### Remote Server

```powershell
New-Item C:\Users\yourname\desktop\test.txt -ItemType "file"
```

after setting `Hyper-V`

```powershell
Install-WindowsFeature -Name Containers

Success Restart Needed Exit Code         Feature Result
------- -------------- ---------------   --------------
True    Yes            SuccessRest...    {Containers}

WARNING: You must restart this server to finish the installation process.
```

```powershell
Restart-Computer -Force
```

```powershell
Install-Module DockerProvider
```

```powershell
Install-Package Docker -ProviderName DockerProvider -RequiredVersion preview

Name                           Version          Source           Summary                                     
----                           -------          ------           -------                                     
Docker                         17.10.0-ee-pr... Docker           Docker Enterprise Edition for Windows Ser...
```

```powershell
[Environment]::SetEnvironmentVariable("LCOW_SUPPORTED", "1", "Machine")
```


```powershell
Restart-Service docker
```


### Pull the nginx image

```powershell
docker pull nginx

Using default tag: latest
docker : Error response from daemon: missing signature key
At line:1 char:1
+ docker pull nginx
+ ~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (Error response ...g signature key:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
```

#### Why we meet this Error?

Check `docker version`

```powershell
PS C:\Users\hugolin> docker version
Client:
 Version:      17.10.0-ee-preview-3
 API version:  1.33
 Go version:   go1.8.4
 Git commit:   1649af8
 Built:        Fri Oct  6 17:52:28 2017
 OS/Arch:      windows/amd64

Server:
 Version:      17.10.0-ee-preview-3
 API version:  1.34 (minimum version 1.24)
 Go version:   go1.8.4
 Git commit:   b8571fd
 Built:        Fri Oct  6 18:01:48 2017
 OS/Arch:      windows/amd64
 Experimental: true
```

- https://stackoverflow.com/questions/60697752/getting-docker-error-daemon-is-missing-signature-key-on-docker-pull
- https://github.com/go-gitea/gitea/issues/28121

The version of the docker is too old to support the latest version of the nginx image.

> [!TIP]
> Downgrade the nginx version to `nginx:1.7.11` -> `docker pull nginx:1.7.11`

#### Pull the `nginx:1.7.11` image [^3]

```powershell
docker pull nginx:1.7.11

1.7.11: Pulling from library/nginx
...
```

### Run the nginx in docker

```powershell
docker run --name nginx_1 -p 80:80 nginx
```


### Conclusion and Research

#### Downgrade/Upgrade Docker Version on Windows Server [^1], [^2]

Change the `-RequiredVersion` to the version you want to downgrade to or upgrade to.

```powershell
Install-Package -Name docker -ProviderName DockerMsftProvider -RequiredVersion 17.03.2-ee-6 -Force -Verbose
```

Then restart the docker service
```powershell
Restart-Service docker
```

#### Downgrade nginx version to mate the docker version [^3]

```powershell
docker pull nginx:<OLD_NGINX_VERSION>
```


[^1]: [Downgrade docker by installing an older version on linux](https://medium.com/@geralexgr/downgrade-docker-by-installing-an-older-version-on-linux-2b5b710ca34)
[^2]: [How To Downgrade Docker Version On Windows Server 2016](https://www.youtube.com/watch?v=llzQpWuGgeM)
[^3]: [`nginx --tags`](https://hub.docker.com/_/nginx/tags?page=1&ordering=-last_updated)

