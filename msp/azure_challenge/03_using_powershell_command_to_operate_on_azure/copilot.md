1chooo: 

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

https://stackoverflow.com/questions/60697752/getting-docker-error-daemon-is-missing-signature-key-on-docker-pull

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

這要怎麼解決

GitHub Copilot: 這個錯誤可能是由於 Docker 版本過舊或者 Docker 配置問題導致的。以下是一些可能的解決方案：

1. 更新 Docker：你的 Docker 版本可能過舊，無法支援當前的操作。你可以嘗試更新 Docker 到最新版本。

```powershell
# Check for available updates
docker version

# If an update is available, update Docker
# On Windows, you can do this through the Docker Desktop application
```

2. 重設 Docker：如果更新 Docker 並未解決問題，你可以嘗試重設 Docker。這將會重設你的 Docker 配置和環境。

```powershell
# On Docker Desktop for Windows, you can do this by clicking on 
# Docker icon in system tray -> Troubleshoot -> Reset to factory defaults
```

3. 檢查 Docker 配置：確保 Docker 配置正確，特別是關於網路和存儲的配置。

如果以上方法都無法解決問題，你可能需要查看 Docker 的日誌以獲取更多詳細的錯誤信息，或者聯繫 Docker 的支援團隊尋求幫助。

1chooo: 要怎麼透過 powershell 更新 docker版本，或是到指定板本，也給我 bash 的腳本

GitHub Copilot: 

1chooo: 要怎麼透過 powershell 更新 docker版本，或是到指定板本，也給我 bash 的腳本

GitHub Copilot: 在 Windows 上，Docker 通常是透過 Docker Desktop 進行更新的。你可以在 Docker Desktop 的設定中檢查更新。然而，如果你需要透過命令行進行更新，你可能需要重新下載並安裝 Docker Desktop 的最新版本。

在 Linux 上，你可以使用以下的 bash 腳本來更新 Docker：

```bash
# Uninstall old versions
sudo apt-get remove docker docker-engine docker.io containerd runc

# Update the apt package index and install packages to allow apt to use a repository over HTTPS
sudo apt-get update
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

# Add Docker’s official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Set up the stable repository
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Update the apt package index, and install the latest version of Docker Engine and containerd
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

如果你需要安裝特定版本的 Docker，你可以先列出可用的版本，然後選擇要安裝的版本：

```bash
# List the versions available in your repo
apt-cache madison docker-ce

# Install a specific version using the version string from the second column
sudo apt-get install docker-ce=<VERSION_STRING> docker-ce-cli=<VERSION_STRING> containerd.io
```

請注意，這些腳本是為 Ubuntu 系統設計的，如果你使用的是其他 Linux 發行版，可能需要進行一